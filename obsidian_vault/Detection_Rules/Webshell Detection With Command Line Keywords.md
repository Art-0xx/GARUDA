---
type: detection_rule
title: "Webshell Detection With Command Line Keywords"
rule_id: bed2a484-9348-4143-8a8a-b801c979301c
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1505.003, attack.t1018, attack.t1033, attack.t1087]
---

# Webshell Detection With Command Line Keywords

## Description
Detects certain command line parameters often used during reconnaissance activity via web shells

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: 1 of selection_webserver_* and 1 of selection_susp_*
selection_susp_change_dir:
  CommandLine|contains:
  - '&cd&echo'
  - 'cd /d '
selection_susp_misc_discovery_binaries:
- Image|endswith:
  - \dsquery.exe
  - \find.exe
  - \findstr.exe
  - \ipconfig.exe
  - \netstat.exe
  - \nslookup.exe
  - \pathping.exe
  - \quser.exe
  - \schtasks.exe
  - \systeminfo.exe
  - \tasklist.exe
  - \tracert.exe
  - \wevtutil.exe
  - \whoami.exe
- OriginalFileName:
  - dsquery.exe
  - find.exe
  - findstr.exe
  - ipconfig.exe
  - netstat.exe
  - nslookup.exe
  - pathping.exe
  - quser.exe
  - schtasks.exe
  - sysinfo.exe
  - tasklist.exe
  - tracert.exe
  - VSSADMIN.EXE
  - wevtutil.exe
  - whoami.exe
selection_susp_misc_discovery_commands:
  CommandLine|contains:
  - ' Test-NetConnection '
  - dir \
selection_susp_net_utility:
  CommandLine|contains:
  - ' user '
  - ' use '
  - ' group '
  OriginalFileName:
  - net.exe
  - net1.exe
selection_susp_ping_utility:
  CommandLine|contains: ' -n '
  OriginalFileName: ping.exe
selection_susp_powershell_cli:
  CommandLine|contains:
  - ' -enc '
  - ' -EncodedCommand '
  - ' -w hidden '
  - ' -windowstyle hidden'
  - .WebClient).Download
  Image|endswith:
  - \cmd.exe
  - \powershell.exe
  - \pwsh.exe
selection_susp_wmic_utility:
  CommandLine|contains: ' /node:'
  OriginalFileName: wmic.exe
selection_webserver_characteristics_tomcat1:
  ParentImage|contains:
  - -tomcat-
  - \tomcat
  ParentImage|endswith:
  - \java.exe
  - \javaw.exe
selection_webserver_characteristics_tomcat2:
  CommandLine|contains:
  - catalina.jar
  - CATALINA_HOME
  ParentImage|endswith:
  - \java.exe
  - \javaw.exe
selection_webserver_image:
  ParentImage|endswith:
  - \w3wp.exe
  - \php-cgi.exe
  - \nginx.exe
  - \httpd.exe
  - \caddy.exe
  - \ws_tomcatservice.exe
```

## MITRE ATT&CK
- T1505.003
- T1018
- T1033
- T1087

## False Positives
- Unknown

## References
- https://www.fireeye.com/blog/threat-research/2013/08/breaking-down-the-china-chopper-web-shell-part-ii.html
- https://unit42.paloaltonetworks.com/bumblebee-webshell-xhunt-campaign/
- https://www.huntress.com/blog/threat-advisory-oh-no-cleo-cleo-software-actively-being-exploited-in-the-wild

## Metadata
- **Author:** Florian Roth (Nextron Systems), Jonhnathan Ribeiro, Anton Kutepov, oscd.community, Chad Hudson, Matt Anderson
- **Date:** 2017-01-01
- **Rule ID:** `bed2a484-9348-4143-8a8a-b801c979301c`
- **Source file:** `windows/process_creation/proc_creation_win_webshell_recon_commands_and_processes.yml`
