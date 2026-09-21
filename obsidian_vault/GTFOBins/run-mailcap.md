---
type: gtfobin
name: run-mailcap
platform: Unix
functions: [inherit]
tags: [gtfobin, unix, lotl]
---

# run-mailcap

## inherit

```bash
run-mailcap --action=view text/plain:/etc/hosts
```
**Contexts:** sudo, unprivileged

```bash
run-mailcap --action=edit text/plain:/path/to/output-file
```
_The file must exist and be not empty._
**Contexts:** sudo, unprivileged
