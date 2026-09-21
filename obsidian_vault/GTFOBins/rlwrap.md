---
type: gtfobin
name: rlwrap
platform: Unix
functions: [file-write, shell]
tags: [gtfobin, unix, lotl]
---

# rlwrap

## file-write

```bash
rlwrap -l /path/to/output-file echo DATA
```
_This adds timestamps to the output file. This relies on the external `echo` command._
**Contexts:** sudo, suid, unprivileged

## shell

```bash
rlwrap /bin/sh
```
**Contexts:** sudo, suid, unprivileged
