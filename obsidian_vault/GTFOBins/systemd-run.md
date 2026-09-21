---
type: gtfobin
name: systemd-run
platform: Unix
functions: [command, shell]
tags: [gtfobin, unix, lotl]
---

# systemd-run

## command

```bash
systemd-run /path/to/command
```
**Contexts:** sudo

## shell

```bash
systemd-run -S
```
**Contexts:** sudo

```bash
systemd-run -t /bin/sh
```
**Contexts:** sudo
