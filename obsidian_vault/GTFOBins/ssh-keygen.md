---
type: gtfobin
name: ssh-keygen
platform: Unix
functions: [library-load]
tags: [gtfobin, unix, lotl]
---

# ssh-keygen

## library-load

```bash
ssh-keygen -D /path/to/lib.so
```
_The shared library must contain the `void C_GetFunctionList() {}` function._
**Contexts:** sudo, suid, unprivileged
