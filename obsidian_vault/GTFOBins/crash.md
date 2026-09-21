---
type: gtfobin
name: crash
platform: Unix
functions: [command, inherit]
tags: [gtfobin, unix, lotl]
---

# crash

## command

```bash
CRASHPAGER=/path/to/command crash -h
```
**Contexts:** sudo, unprivileged

## inherit

```bash
crash -h
```
**Contexts:** sudo, suid, unprivileged
