---
type: gtfobin
name: cp
platform: Unix
functions: [file-read, file-write, privilege-escalation]
tags: [gtfobin, unix, lotl]
---

# cp

## file-read

```bash
cp /path/to/input-file /dev/stdout
```
**Contexts:** sudo, suid, unprivileged

## file-write

```bash
echo DATA | cp /dev/stdin /path/to/output-file
```
**Contexts:** sudo, suid, unprivileged

## privilege-escalation

```bash
cp /path/to/input-file /path/to/output-file
```
_This can be used to copy and then read or write files from a restricted file systems or with elevated privileges. (The GNU version of `cp` has the `--parents` option that can be used to also create the directory hierarchy specified in the source path, to the destination folder.)_
**Contexts:** sudo, suid

```bash
cp --attributes-only --preserve=all /path/to/input-file /path/to/output-file
```
_This can copy SUID permissions from any SUID binary (e.g., `/path/to/input-file`) to another._
**Contexts:** sudo, suid
