---
type: gtfobin
name: ss
platform: Unix
functions: [file-read]
tags: [gtfobin, unix, lotl]
---

# ss

## file-read

```bash
ss -a -F /path/to/input-file
```
_The file content is actually parsed so only a part of the first line is returned as a part of an error message._
**Contexts:** sudo, suid, unprivileged
