---
type: detection_rule
title: "Suspicious Reverse Shell Command Line"
rule_id: 738d9bcf-6999-4fdb-b4ac-3033037db8ab
platform: linux
level: high
status: test
tags: [detection, sigma, linux]
mitre_tags: [attack.t1059.004]
---

# Suspicious Reverse Shell Command Line

## Description
Detects suspicious shell commands or program code that may be executed or used in command line to establish a reverse shell

## Log Source
```yaml
product: linux
```

## Detection Logic
```yaml
condition: keywords
keywords:
- BEGIN {s = "/inet/tcp/0/
- bash -i >& /dev/tcp/
- bash -i >& /dev/udp/
- sh -i >$ /dev/udp/
- sh -i >$ /dev/tcp/
- '&& while read line 0<&5; do'
- /bin/bash -c exec 5<>/dev/tcp/
- /bin/bash -c exec 5<>/dev/udp/
- 'nc -e /bin/sh '
- /bin/sh | nc
- 'rm -f backpipe; mknod /tmp/backpipe p && nc '
- ;socket(S,PF_INET,SOCK_STREAM,getprotobyname("tcp"));if(connect(S,sockaddr_in($p,inet_aton($i))))
- ;STDIN->fdopen($c,r);$~->fdopen($c,w);system$_ while<>;
- /bin/sh -i <&3 >&3 2>&3
- uname -a; w; id; /bin/bash -i
- $sendbyte = ([text.encoding]::ASCII).GetBytes($sendback2); $stream.Write($sendbyte,0,$sendbyte.Length);
  $stream.Flush()};
- ;os.dup2(s.fileno(),0);os.dup2(s.fileno(),1);os.dup2(s.fileno(),2);os.putenv('HISTFILE','/dev/null');
- .to_i;exec sprintf("/bin/sh -i <&%d >&%d 2>&%d",f,f,f)
- ;while(cmd=c.gets);IO.popen(cmd,"r"){|io|c.print
- 'socat exec:''bash -li'',pty,stderr,setsid,sigint,sane tcp:'
- rm -f /tmp/p; mknod /tmp/p p &&
- ' | /bin/bash | telnet '
- ',echo=0,raw tcp-listen:'
- 'nc -lvvp '
- xterm -display 1
```

## MITRE ATT&CK
- T1059.004

## False Positives
- Unknown

## References
- https://alamot.github.io/reverse_shells/

## Metadata
- **Author:** Florian Roth (Nextron Systems)
- **Date:** 2019-04-02
- **Rule ID:** `738d9bcf-6999-4fdb-b4ac-3033037db8ab`
- **Source file:** `linux/builtin/lnx_shell_susp_rev_shells.yml`
