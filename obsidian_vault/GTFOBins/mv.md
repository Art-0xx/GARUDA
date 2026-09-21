---
type: gtfobin
name: mv
platform: Unix
functions: [file-write, privilege-escalation]
tags: [gtfobin, unix, lotl]
---

# mv

## file-write

```bash
echo DATA >/path/to/temp-file
mv /path/to/temp-file /path/to/output-file
```
**Contexts:** sudo, suid, unprivileged

## privilege-escalation

```bash
mv /path/to/input-file /path/to/output-file
```
_This can be used to move and then read or write files from a restricted file systems or with elevated privileges._
**Contexts:** sudo, suid
