---
type: gtfobin
name: hashcat
platform: Unix
functions: [file-write]
tags: [gtfobin, unix, lotl]
---

# hashcat

## file-write

```bash
echo -n DATA | tee /path/to/wordlist | md5sum | awk '{print $1}' >/path/to/hash
hashcat -m 0 --quiet --potfile-disable -o /path/to/output-file --outfile-format=2 --outfile-autohex-disable /path/to/hash /path/to/wordlist
```
_Append data to the end of the output file, creating if does not exist._
**Contexts:** sudo, unprivileged
