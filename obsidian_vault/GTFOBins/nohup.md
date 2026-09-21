---
type: gtfobin
name: nohup
platform: Unix
functions: [command, shell]
tags: [gtfobin, unix, lotl]
---

# nohup

## command

```bash
nohup /path/to/command
cat nohup.out
```
_The `nohup.out` file contains the standard output and error of the command._
**Contexts:** sudo, suid, unprivileged

## shell

```bash
nohup /bin/sh -c '/bin/sh </dev/tty >/dev/tty 2>/dev/tty'
```
_This creates a `nohup.out` file in the current working directory._
**Contexts:** sudo, suid, unprivileged
