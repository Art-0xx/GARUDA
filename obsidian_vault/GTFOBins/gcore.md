---
type: gtfobin
name: gcore
platform: Unix
functions: [file-read]
tags: [gtfobin, unix, lotl]
---

# gcore

## file-read

```bash
gcore $PID
```
_It can be used to generate core dumps of running processes (`$PID`). Such files often contains sensitive information such as open files content, cryptographic keys, passwords, etc. This command produces a binary file named `core.$PID`, that is then often filtered with `strings` to narrow down relevant information._
**Contexts:** sudo, suid, unprivileged
