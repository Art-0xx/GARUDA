---
type: gtfobin
name: pandoc
platform: Unix
functions: [file-read, file-write, inherit]
tags: [gtfobin, unix, lotl]
---

# pandoc

## file-read

```bash
pandoc -t plain /path/to/input-file
```
**Contexts:** sudo, suid, unprivileged

## file-write

```bash
echo DATA | pandoc -t plain -o /path/to/output-file
```
**Contexts:** sudo, suid, unprivileged

## inherit

```bash
echo '...' >/path/to/temp-file
pandoc -L /path/to/temp-file /dev/null
```
_This allows to run Lua code (`...`)._
**Contexts:** sudo, suid, unprivileged
