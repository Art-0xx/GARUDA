---
type: gtfobin
name: pwsh
platform: Unix
functions: [file-write, shell]
tags: [gtfobin, unix, lotl]
---

# pwsh

## file-write

```bash
pwsh -c '"DATA" | Out-File /path/to/output-file'
```
**Contexts:** sudo, unprivileged

## shell

```bash
pwsh
```
**Contexts:** sudo, unprivileged
