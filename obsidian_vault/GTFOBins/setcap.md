---
type: gtfobin
name: setcap
platform: Unix
functions: [privilege-escalation]
tags: [gtfobin, unix, lotl]
---

# setcap

## privilege-escalation

```bash
setcap cap_setuid+ep /path/to/command
```
_This can be used to assign capabilities to executable files._
**Contexts:** sudo, suid
