<?php
// api.php - Generic CRUD API for the UniLend portal
// Usage examples:
// GET  api.php?action=list&table=accounts
// GET  api.php?action=get&table=accounts&id=1
// POST api.php?action=create&table=accounts (JSON body or form-encoded fields)
// POST api.php?action=update&table=accounts&id=1 (JSON body or form-encoded fields)
// POST api.php?action=delete&table=accounts&id=1

header('Content-Type: application/json; charset=utf-8');

// Database configuration
$dbConfig = [
    'host' => '127.0.0.1',
    'dbname' => 'unilend',
    'user' => 'root',
    'pass' => '',
    'charset' => 'utf8mb4',
];

$tables = [
    'accounts' => [
        'fields' => ['pn','name','provider','type','pension','bank','status'],
        'primary' => 'id',
    ],
    'loans' => [
        'fields' => ['ref','date','name','amort','terms','principal','proc','notarial','ins','interest','cashout','status'],
        'aliases' => ['not' => 'notarial'],
        'responseMap' => ['notarial' => 'not'],
        'primary' => 'id',
    ],
    'approvals' => [
        'fields' => ['ref','date','name','amort','terms','principal','status'],
        'primary' => 'id',
    ],
    'vouchers' => [
        'fields' => ['no','date','payee','acct','amount','status'],
        'primary' => 'id',
    ],
    'collections' => [
        'fields' => ['no','date','cust','amount','bonus','remarks','status'],
        'primary' => 'id',
    ],
    'changefunds' => [
        'fields' => ['no','date','type','amount','name','remarks','branch'],
        'primary' => 'id',
    ],
    'banks' => [
        'fields' => ['name','addr','contact','pos','tel'],
        'primary' => 'id',
    ],
    'bankaccounts' => [
        'fields' => ['bank','addr','acctno','bal'],
        'primary' => 'id',
    ],
    'products' => [
        'fields' => ['name','type','description'],
        'aliases' => ['desc' => 'description'],
        'responseMap' => ['description' => 'desc'],
        'primary' => 'id',
    ],
    'agents' => [
        'fields' => ['name','type','addr','contact'],
        'primary' => 'id',
    ],
    'addresses' => [
        'fields' => ['code','addr'],
        'primary' => 'id',
    ],
    'lookups' => [
        'fields' => ['word','order_value','code'],
        'aliases' => ['order' => 'order_value'],
        'responseMap' => ['order_value' => 'order'],
        'primary' => 'id',
    ],
];

function respond($success, $data = null, $message = null, $httpCode = 200) {
    http_response_code($httpCode);
    echo json_encode(array_filter(['success' => $success, 'data' => $data, 'message' => $message], function($v){return $v !== null;}));
    exit;
}

function getRequestData() {
    $contentType = $_SERVER['CONTENT_TYPE'] ?? '';
    if (stripos($contentType, 'application/json') !== false) {
        $body = file_get_contents('php://input');
        $data = json_decode($body, true);
        return is_array($data) ? $data : [];
    }
    return $_REQUEST;
}

function pdoConnect($config) {
    $dsn = "mysql:host={$config['host']};dbname={$config['dbname']};charset={$config['charset']}";
    try {
        $pdo = new PDO($dsn, $config['user'], $config['pass'], [
            PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
            PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
        ]);
        return $pdo;
    } catch (PDOException $e) {
        respond(false, null, 'Database connection failed: ' . $e->getMessage(), 500);
    }
}

function getTableConfig($table, $tables) {
    if (!isset($tables[$table])) {
        respond(false, null, 'Unsupported table: ' . htmlentities($table), 400);
    }
    return $tables[$table];
}

function normalizeRequestData($data, $tableConfig) {
    if (!empty($tableConfig['aliases'])) {
        foreach ($tableConfig['aliases'] as $alias => $real) {
            if (array_key_exists($alias, $data) && !array_key_exists($real, $data)) {
                $data[$real] = $data[$alias];
            }
        }
    }
    return $data;
}

function mapRowKeys($row, $tableConfig) {
    if (!empty($tableConfig['responseMap'])) {
        foreach ($tableConfig['responseMap'] as $dbKey => $clientKey) {
            if (array_key_exists($dbKey, $row) && !array_key_exists($clientKey, $row)) {
                $row[$clientKey] = $row[$dbKey];
            }
        }
    }
    return $row;
}

$action = strtolower($_REQUEST['action'] ?? 'list');
$table = strtolower($_REQUEST['table'] ?? '');
if (!$table) {
    respond(false, null, 'Missing table parameter', 400);
}
$tableConfig = getTableConfig($table, $tables);
$pdo = pdoConnect($dbConfig);
$requestData = getRequestData();

switch ($action) {
    case 'list':
        $sql = "SELECT * FROM `{$table}` ORDER BY `{$tableConfig['primary']}` DESC";
        $stmt = $pdo->query($sql);
        $rows = $stmt->fetchAll();
        $data = array_map(fn($row) => mapRowKeys($row, $tableConfig), $rows);
        respond(true, $data);
        break;

    case 'get':
        $id = $requestData['id'] ?? null;
        if (!$id) {
            respond(false, null, 'Missing id parameter', 400);
        }
        $stmt = $pdo->prepare("SELECT * FROM `{$table}` WHERE `{$tableConfig['primary']}` = :id LIMIT 1");
        $stmt->execute([':id' => $id]);
        $row = $stmt->fetch();
        if (!$row) {
            respond(false, null, 'Record not found', 404);
        }
        respond(true, mapRowKeys($row, $tableConfig));
        break;

    case 'create':
        $fields = $tableConfig['fields'];
        $params = [];
        $columns = [];
        $values = [];
        foreach ($fields as $field) {
            if (array_key_exists($field, $requestData)) {
                $columns[] = "`$field`";
                $values[] = ":$field";
                $params[":$field"] = $requestData[$field];
            }
        }
        if (empty($columns)) {
            respond(false, null, 'No valid fields provided', 400);
        }
        $sql = sprintf("INSERT INTO `%s` (%s) VALUES (%s)", $table, implode(',', $columns), implode(',', $values));
        $stmt = $pdo->prepare($sql);
        $stmt->execute($params);
        respond(true, ['id' => $pdo->lastInsertId()], 'Record created');
        break;

    case 'update':
        $id = $requestData['id'] ?? null;
        if (!$id) {
            respond(false, null, 'Missing id parameter', 400);
        }
        $fields = $tableConfig['fields'];
        $params = [':id' => $id];
        $setParts = [];
        foreach ($fields as $field) {
            if (array_key_exists($field, $requestData)) {
                $setParts[] = "`$field` = :$field";
                $params[":$field"] = $requestData[$field];
            }
        }
        if (empty($setParts)) {
            respond(false, null, 'No fields provided for update', 400);
        }
        $sql = sprintf("UPDATE `%s` SET %s WHERE `%s` = :id", $table, implode(', ', $setParts), $tableConfig['primary']);
        $stmt = $pdo->prepare($sql);
        $stmt->execute($params);
        respond(true, null, 'Record updated');
        break;

    case 'delete':
        $id = $requestData['id'] ?? null;
        if (!$id) {
            respond(false, null, 'Missing id parameter', 400);
        }
        $stmt = $pdo->prepare("DELETE FROM `{$table}` WHERE `{$tableConfig['primary']}` = :id");
        $stmt->execute([':id' => $id]);
        respond(true, null, 'Record deleted');
        break;

    default:
        respond(false, null, 'Unsupported action: ' . htmlentities($action), 400);
}
