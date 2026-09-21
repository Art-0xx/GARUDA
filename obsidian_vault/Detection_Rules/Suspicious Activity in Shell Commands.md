---
type: detection_rule
title: "Suspicious Activity in Shell Commands"
rule_id: 2aa1440c-9ae9-4d92-84a7-a9e5f5e31695
platform: linux
level: high
status: test
tags: [detection, sigma, linux]
mitre_tags: [attack.t1059.004]
---

# Suspicious Activity in Shell Commands

## Description
Detects suspicious shell commands used in various exploit codes (see references)

## Log Source
```yaml
product: linux
```

## Detection Logic
```yaml
condition: keywords
keywords:
- wget * - http* | perl
- wget * - http* | sh
- wget * - http* | bash
- python -m SimpleHTTPServer
- -m http.server
- import pty; pty.spawn*
- socat exec:*
- socat -O /tmp/*
- socat tcp-connect*
- '*echo binary >>*'
- '*wget *; chmod +x*'
- '*wget *; chmod 777 *'
- '*cd /tmp || cd /var/run || cd /mnt*'
- '*stop;service iptables stop;*'
- '*stop;SuSEfirewall2 stop;*'
- chmod 777 2020*
- '*>>/etc/rc.local'
- '*base64 -d /tmp/*'
- '* | base64 -d *'
- '*/chmod u+s *'
- '*chmod +s /tmp/*'
- '*chmod u+s /tmp/*'
- '* /tmp/haxhax*'
- '* /tmp/ns_sploit*'
- nc -l -p *
- cp /bin/ksh *
- cp /bin/sh *
- '* /tmp/*.b64 *'
- '*/tmp/ysocereal.jar*'
- '*/tmp/x *'
- '*; chmod +x /tmp/*'
- '*;chmod +x /tmp/*'
```

## MITRE ATT&CK
- T1059.004

## False Positives
- Unknown

## References
- https://web.archive.org/web/20170319121015/http://www.threatgeek.com/2017/03/widespread-exploitation-attempts-using-cve-2017-5638.html
- https://github.com/rapid7/metasploit-framework/blob/eb6535009f5fdafa954525687f09294918b5398d/modules/exploits/multi/http/struts_code_exec_exception_delegator.rb
- http://pastebin.com/FtygZ1cg
- https://artkond.com/2017/03/23/pivoting-guide/

## Metadata
- **Author:** Florian Roth (Nextron Systems)
- **Date:** 2017-08-21
- **Rule ID:** `2aa1440c-9ae9-4d92-84a7-a9e5f5e31695`
- **Source file:** `linux/builtin/lnx_shell_susp_commands.yml`
