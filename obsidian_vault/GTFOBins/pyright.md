---
type: gtfobin
name: pyright
platform: Unix
functions: [file-read]
tags: [gtfobin, unix, lotl]
---

# pyright

## file-read

```bash
pyright /path/to/input-file
```
_Content is leaked as error messages._
**Contexts:** sudo, unprivileged

```bash
pyright --outputjson /path/to/input-file
```
_Content is leaked as error messages in JSON format._
**Contexts:** sudo, unprivileged

```bash
pyright -w /path/to/input-dir/
```
_Recursively walks directories, parsing all Python files and leaking some contents through diagnostics._
**Contexts:** sudo, unprivileged
