---
type: gtfobin
name: sort
platform: Unix
functions: [file-read, file-write]
tags: [gtfobin, unix, lotl]
---

# sort

## file-read

```bash
sort -m /path/to/input-file
```
**Contexts:** sudo, suid, unprivileged

## file-write

```bash
echo DATA | sort -m -o /path/to/output-file
```
**Contexts:** sudo, suid, unprivileged
