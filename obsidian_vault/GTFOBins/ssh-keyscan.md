---
type: gtfobin
name: ssh-keyscan
platform: Unix
functions: [file-read]
tags: [gtfobin, unix, lotl]
---

# ssh-keyscan

## file-read

```bash
ssh-keyscan -f /path/to/input-file
```
_The file content is actually parsed so only a part of each line is returned as a part of an error message._
**Contexts:** sudo, suid, unprivileged
