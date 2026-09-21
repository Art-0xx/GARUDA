---
type: gtfobin
name: sg
platform: Unix
functions: [shell]
tags: [gtfobin, unix, lotl]
---

# sg

## shell

```bash
sg $(id -ng)
```
_Commands can be run if the current user's group is specified, therefore no additional permissions are needed._
**Contexts:** sudo, unprivileged
