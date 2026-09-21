---
type: gtfobin
name: iconv
platform: Unix
functions: [file-read, file-write]
tags: [gtfobin, unix, lotl]
---

# iconv

## file-read

```bash
iconv -f 8859_1 -t 8859_1 /path/to/input-file
```
**Contexts:** sudo, suid, unprivileged

## file-write

```bash
echo DATA | iconv -f 8859_1 -t 8859_1 -o /path/to/output-file
```
**Contexts:** sudo, suid, unprivileged
