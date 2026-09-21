---
type: gtfobin
name: elvish
platform: Unix
functions: [file-read, file-write, shell]
tags: [gtfobin, unix, lotl]
---

# elvish

## file-read

```bash
elvish -c 'print (slurp </path/to/input-file)'
```
**Contexts:** sudo, suid, unprivileged

## file-write

```bash
elvish -c 'print DATA >/path/to/output-file'
```
**Contexts:** sudo, suid, unprivileged

## shell

```bash
elvish
```
**Contexts:** sudo, suid, unprivileged
