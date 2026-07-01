import re
import ast
from pathlib import Path

path = Path('app.js')
text = path.read_text(encoding='utf-8')

m = re.search(r'const DB = \{(.*?)\};\s*// ══ STATE', text, re.S)
if not m:
    raise SystemExit('DB object not found')
body = m.group(1)

# Add quotes to field names
body = re.sub(r'([\{,\s])(\w+)\s*:', r'\1"\2":', body)
# Convert JS strings to JSON-like strings
body = re.sub(r"'(\\.|[^'\\])*'", lambda x: '"' + x.group(0)[1:-1].replace('"', '\\"').replace('\\\\', '\\\\\\') + '"', body)
# Remove trailing commas
body = re.sub(r',\s*([\]}])', r'\1', body)
json_text = '{' + body + '}'
json_text = json_text.replace('null', 'None').replace('true', 'True').replace('false', 'False')
obj = ast.literal_eval(json_text)

print('tables', list(obj.keys()))
for k, v in obj.items():
    print('# TABLE', k, len(v), 'rows')
    if not v:
        continue
    fields = sorted({key for row in v for key in row.keys()})
    for row in v:
        vals = []
        for f in fields:
            val = row.get(f)
            if val is None:
                vals.append('NULL')
            elif isinstance(val, bool):
                vals.append('1' if val else '0')
            elif isinstance(val, (int, float)):
                vals.append(str(val))
            else:
                vals.append("'" + str(val).replace("'", "''") + "'")
        print('INSERT INTO `%s` (%s) VALUES (%s);' % (k, ','.join('`'+f+'`' for f in fields), ','.join(vals)))
