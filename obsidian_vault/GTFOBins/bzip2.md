---
type: gtfobin
name: bzip2
platform: Unix
functions: [file-read]
tags: [gtfobin, unix, lotl]
---

# bzip2

## file-read

```bash
bzip2 -c /path/to/input-file | bzip2 -d
```
**Contexts:** sudo, suid, unprivileged
