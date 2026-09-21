---
type: gtfobin
name: xxd
platform: Unix
functions: [file-read, file-write]
tags: [gtfobin, unix, lotl]
---

# xxd

## file-read

```bash
xxd /path/to/input-file | xxd -r
```
**Contexts:** sudo, suid, unprivileged

## file-write

```bash
echo DATA | xxd | xxd -r - /path/to/output-file
```
**Contexts:** sudo, suid, unprivileged
