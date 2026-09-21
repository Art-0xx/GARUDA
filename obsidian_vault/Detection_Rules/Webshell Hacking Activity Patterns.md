---
type: detection_rule
title: "Webshell Hacking Activity Patterns"
rule_id: 4ebc877f-4612-45cb-b3a5-8e3834db36c9
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1505.003, attack.t1018, attack.t1033, attack.t1087]
---

# Webshell Hacking Activity Patterns

## Description
Detects certain parent child patterns found in cases in which a web shell is used to perform certain credential dumping or exfiltration activities on a compromised system

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: 1 of selection_webserver_* and 1 of selection_child_*
selection_child_1:
  CommandLine|contains|all:
  - rundll32
  - comsvcs
selection_child_2:
  CommandLine|contains|all:
  - ' -hp'
  - ' a '
  - ' -m'
selection_child_3:
  CommandLine|contains|all:
  - net
  - ' user '
  - ' /add'
selection_child_4:
  CommandLine|contains|all:
  - net
  - ' localgroup '
  - ' administrators '
  - /add
selection_child_5:
  Image|endswith:
  - \ntdsutil.exe
  - \ldifde.exe
  - \adfind.exe
  - \procdump.exe
  - \Nanodump.exe
  - \vssadmin.exe
  - \fsutil.exe
selection_child_6:
  CommandLine|contains:
  - ' -decode '
  - ' -NoP '
  - ' -W Hidden '
  - ' /decode '
  - ' /ticket:'
  - ' sekurlsa'
  - .dmp full
  - .downloadfile(
  - .downloadstring(
  - FromBase64String
  - process call create
  - 'reg save '
  - whoami /priv
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
  - \caddy.exe
  - \httpd.exe
  - \nginx.exe
  - \php-cgi.exe
  - \w3wp.exe
  - \ws_tomcatservice.exe
```

## MITRE ATT&CK
- T1505.003
- T1018
- T1033
- T1087

## False Positives
- Unlikely

## References
- https://youtu.be/7aemGhaE9ds?t=641

## Metadata
- **Author:** Florian Roth (Nextron Systems)
- **Date:** 2022-03-17
- **Rule ID:** `4ebc877f-4612-45cb-b3a5-8e3834db36c9`
- **Source file:** `windows/process_creation/proc_creation_win_webshell_hacking.yml`
