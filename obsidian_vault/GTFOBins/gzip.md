---
type: gtfobin
name: gzip
platform: Unix
functions: [file-read]
tags: [gtfobin, unix, lotl]
---

# gzip

## file-read

```bash
gzip -c /path/to/input-file | gzip -d
```
**Contexts:** capabilities, sudo, suid, unprivileged
