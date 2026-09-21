---
type: gtfobin
name: tmux
platform: Unix
functions: [file-read, shell]
tags: [gtfobin, unix, lotl]
---

# tmux

## file-read

```bash
tmux -f /path/to/input-file
```
_The file is read and parsed as a `tmux` configuration file, part of the first invalid line is returned in an error message._
**Contexts:** sudo, suid, unprivileged

## shell

```bash
tmux -c /bin/sh
```
**Contexts:** sudo, suid, unprivileged

```bash
tmux -S /path/to/socket
```
_Provided to have enough permissions to access the socket (e.g., `/tmp/tmux-xxx/default`)._
**Contexts:** sudo, suid, unprivileged
