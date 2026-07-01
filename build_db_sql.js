const fs = require('fs');
const path = require('path');
const text = fs.readFileSync(path.join(__dirname, 'app.js'), 'utf8');
const match = text.match(/const DB = \{([\s\S]*?)\};\s*\/\/ ══ STATE/);
if (!match) throw new Error('DB object not found');
const body = match[1];
const obj = eval('({' + body + '})');
console.log('tables', Object.keys(obj));
for (const [k, v] of Object.entries(obj)) {
  console.log('# TABLE', k, v.length, 'rows');
  if (v.length === 0) continue;
  const fields = Array.from(new Set(v.flatMap(r => Object.keys(r)))).sort();
  for (const row of v) {
    const vals = fields.map(f => {
      const val = row[f];
      if (val === undefined || val === null) return 'NULL';
      if (typeof val === 'number') return String(val);
      return "'" + String(val).replace(/'/g, "''") + "'";
    });
    const cols = fields.map(f => '`' + f + '`').join(',');
    console.log('INSERT INTO `' + k + '` (' + cols + ') VALUES (' + vals.join(',') + ');');
  }
}
