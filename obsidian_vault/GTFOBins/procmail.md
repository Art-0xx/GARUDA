---
type: gtfobin
name: procmail
platform: Unix
functions: [command]
tags: [gtfobin, unix, lotl]
---

# procmail

## command

```bash
echo -e ':0\n| /path/to/command >/path/to/temp-file
procmail -m /path/to/temp-file
```
_The program is picky about the file ownership, and waits for some input._
**Contexts:** sudo, unprivileged
