---
type: gtfobin
name: vim
platform: Unix
functions: [file-read, inherit]
tags: [gtfobin, unix, lotl]
---

# vim

## file-read

```bash
vim -c ':redir! >/path/to/output-file | echo "DATA" | redir END | q'
```
**Contexts:** sudo, suid, unprivileged

## inherit

```bash
vim -c ':py ...'
```
_This allows to run Python code (`...`)._
**Contexts:** sudo, suid, unprivileged

```bash
vim -c ':lua ...'
```
_This allows to run Lua code (`...`)._
**Contexts:** sudo, suid, unprivileged

```bash
vim
```
**Contexts:** sudo, suid, unprivileged
