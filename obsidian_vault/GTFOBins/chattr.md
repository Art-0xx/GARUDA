---
type: gtfobin
name: chattr
platform: Unix
functions: [privilege-escalation]
tags: [gtfobin, unix, lotl]
---

# chattr

## privilege-escalation

```bash
chattr +i /path/to/input-file
```
_Make the target file immutable._
**Contexts:** sudo, suid
