---
type: gtfobin
name: check_log
platform: Unix
functions: [file-read, file-write]
tags: [gtfobin, unix, lotl]
---

# check_log

## file-read

```bash
check_log -F /path/to/input-file -O /dev/stdout
```
**Contexts:** sudo, unprivileged

## file-write

```bash
check_log -F /path/to/input-file -O /path/to/output-file
```
**Contexts:** sudo, unprivileged
