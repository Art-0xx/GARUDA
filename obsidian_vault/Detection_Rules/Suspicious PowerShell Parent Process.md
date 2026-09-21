---
type: detection_rule
title: "Suspicious PowerShell Parent Process"
rule_id: 754ed792-634f-40ae-b3bc-e0448d33f695
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1059.001]
---

# Suspicious PowerShell Parent Process

## Description
Detects a suspicious or uncommon parent processes of PowerShell

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: all of selection_*
selection_parent:
- ParentImage|contains: tomcat
- ParentImage|endswith:
  - \amigo.exe
  - \browser.exe
  - \chrome.exe
  - \firefox.exe
  - \httpd.exe
  - \iexplore.exe
  - \jbosssvc.exe
  - \microsoftedge.exe
  - \microsoftedgecp.exe
  - \MicrosoftEdgeSH.exe
  - \mshta.exe
  - \nginx.exe
  - \outlook.exe
  - \php-cgi.exe
  - \regsvr32.exe
  - \rundll32.exe
  - \safari.exe
  - \services.exe
  - \sqlagent.exe
  - \sqlserver.exe
  - \sqlservr.exe
  - \vivaldi.exe
  - \w3wp.exe
selection_powershell:
- Image|endswith:
  - \powershell.exe
  - \pwsh.exe
- CommandLine|contains:
  - /c powershell
  - /c pwsh
- Description: Windows PowerShell
- Product: PowerShell Core 6
- OriginalFileName:
  - PowerShell.EXE
  - pwsh.dll
```

## MITRE ATT&CK
- T1059.001

## False Positives
- Other scripts

## References
- https://speakerdeck.com/heirhabarov/hunting-for-powershell-abuse?slide=26

## Metadata
- **Author:** Teymur Kheirkhabarov, Harish Segar
- **Date:** 2020-03-20
- **Rule ID:** `754ed792-634f-40ae-b3bc-e0448d33f695`
- **Source file:** `windows/process_creation/proc_creation_win_powershell_susp_parent_process.yml`
