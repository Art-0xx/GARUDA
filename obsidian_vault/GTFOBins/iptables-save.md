---
type: gtfobin
name: iptables-save
platform: Unix
functions: [file-write]
tags: [gtfobin, unix, lotl]
---

# iptables-save

## file-write

```bash
iptables -A INPUT -i lo -j ACCEPT -m comment --comment DATA
iptables -S
iptables-save -f /path/to/output-file
```
_The content is written along with a number of `iptables` rules._
**Contexts:** sudo
