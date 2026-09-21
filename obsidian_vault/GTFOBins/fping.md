---
type: gtfobin
name: fping
platform: Unix
functions: [file-read]
tags: [gtfobin, unix, lotl]
---

# fping

## file-read

```bash
fping -f /path/to/input-file
```
_Each line is treated as an hostname and it's leaked as an error message._
**Contexts:** sudo, suid, unprivileged
