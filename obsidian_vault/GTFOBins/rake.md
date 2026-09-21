---
type: gtfobin
name: rake
platform: Unix
functions: [file-read, inherit]
tags: [gtfobin, unix, lotl]
---

# rake

## file-read

```bash
rake -f /path/to/input-file
```
_The file is actually parsed and the first wrong line is returned in an error message._
**Contexts:** sudo, unprivileged

## inherit

```bash
rake -p '...'
```
_This allows to run Ruby code (`...`)._
**Contexts:** sudo, unprivileged
