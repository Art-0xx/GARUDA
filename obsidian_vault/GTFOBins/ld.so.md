---
type: gtfobin
name: ld.so
platform: Unix
functions: [shell]
tags: [gtfobin, unix, lotl]
---

# ld.so

## shell

```bash
/path/to/ld.so /bin/sh
```
_The spawned process will be the loader, not the target executable, this might aid evasion. See <https://shyft.us/posts/20230526_linux_command_proxy.html> for more information._
**Contexts:** sudo, suid, unprivileged
