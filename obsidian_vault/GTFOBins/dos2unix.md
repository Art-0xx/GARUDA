---
type: gtfobin
name: dos2unix
platform: Unix
functions: [file-read, file-write]
tags: [gtfobin, unix, lotl]
---

# dos2unix

## file-read

```bash
dos2unix -f -O /path/to/input-file
```
**Contexts:** sudo, suid, unprivileged

## file-write

```bash
dos2unix -f -n /path/to/input-file /path/to/output-file
```
**Contexts:** sudo, suid, unprivileged
