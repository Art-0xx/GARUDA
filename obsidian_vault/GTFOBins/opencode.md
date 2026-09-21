---
type: gtfobin
name: opencode
platform: Unix
functions: [command, inherit]
tags: [gtfobin, unix, lotl]
---

# opencode

## command

```bash
opencode
! /path/to/command
```
**Contexts:** sudo, suid, unprivileged

## inherit

```bash
opencode db '...'
```
_This allows to run SQLite queries (`...`) provided that `sqlite3` is installed._
**Contexts:** sudo, unprivileged
