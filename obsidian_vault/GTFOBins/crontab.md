---
type: gtfobin
name: crontab
platform: Unix
functions: [command, inherit]
tags: [gtfobin, unix, lotl]
---

# crontab

## command

```bash
crontab -e
```
_This spaws the default editor to edit the crontab file, commands can be scheduled to run using the [cron syntax](https://en.wikipedia.org/wiki/Cron)._
**Contexts:** sudo, unprivileged

## inherit

```bash
crontab -e
```
**Contexts:** sudo, unprivileged
