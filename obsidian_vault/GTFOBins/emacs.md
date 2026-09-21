---
type: gtfobin
name: emacs
platform: Unix
functions: [file-read, file-write, shell]
tags: [gtfobin, unix, lotl]
---

# emacs

## file-read

```bash
emacs /path/to/input-file
```
**Contexts:** sudo, unprivileged

## file-write

```bash
emacs /path/to/output-file
DATA
C-x C-s
```
**Contexts:** sudo, unprivileged

## shell

```bash
emacs -Q -nw --eval '(term "/bin/sh")'
```
**Contexts:** sudo, unprivileged
