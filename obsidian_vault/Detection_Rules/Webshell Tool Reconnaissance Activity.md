---
type: detection_rule
title: "Webshell Tool Reconnaissance Activity"
rule_id: f64e5c19-879c-4bae-b471-6d84c8339677
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1505.003]
---

# Webshell Tool Reconnaissance Activity

## Description
Detects processes spawned from web servers (PHP, Tomcat, IIS, etc.) that perform reconnaissance looking for the existence of popular scripting tools (perl, python, wget) on the system via the help commands

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: 1 of selection_webserver_* and selection_recon
selection_recon:
  CommandLine|contains:
  - perl --help
  - perl -h
  - python --help
  - python -h
  - python3 --help
  - python3 -h
  - wget --help
selection_webserver_characteristics_tomcat1:
  ParentImage|contains:
  - -tomcat-
  - \tomcat
  ParentImage|endswith:
  - \java.exe
  - \javaw.exe
selection_webserver_characteristics_tomcat2:
  CommandLine|contains:
  - CATALINA_HOME
  - catalina.jar
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

## False Positives
- Unknown

## References
- https://ragged-lab.blogspot.com/2020/07/webshells-automating-reconnaissance.html

## Metadata
- **Author:** Cian Heasley, Florian Roth (Nextron Systems)
- **Date:** 2020-07-22
- **Rule ID:** `f64e5c19-879c-4bae-b471-6d84c8339677`
- **Source file:** `windows/process_creation/proc_creation_win_webshell_tool_recon.yml`
