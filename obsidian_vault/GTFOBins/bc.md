---
type: gtfobin
name: bc
platform: Unix
functions: [file-read]
tags: [gtfobin, unix, lotl]
---

# bc

## file-read

```bash
bc -s /path/to/input-file
quit
```
_The file content is actually parsed and appears as error messages._
**Contexts:** sudo, suid, unprivileged
