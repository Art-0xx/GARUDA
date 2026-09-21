---
type: detection_rule
title: "Suspicious Serv-U Process Pattern"
rule_id: 58f4ea09-0fc2-4520-ba18-b85c540b0eaf
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1555]
---

# Suspicious Serv-U Process Pattern

## Description
Detects a suspicious process pattern which could be a sign of an exploited Serv-U service

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: selection
selection:
  Image|endswith:
  - \cmd.exe
  - \powershell.exe
  - \pwsh.exe
  - \wscript.exe
  - \cscript.exe
  - \sh.exe
  - \bash.exe
  - \schtasks.exe
  - \regsvr32.exe
  - \wmic.exe
  - \mshta.exe
  - \rundll32.exe
  - \msiexec.exe
  - \forfiles.exe
  - \scriptrunner.exe
  ParentImage|endswith: \Serv-U.exe
```

## MITRE ATT&CK
- T1555

## False Positives
- Legitimate uses in which users or programs use the SSH service of Serv-U for remote command execution

## References
- https://www.microsoft.com/security/blog/2021/07/13/microsoft-discovers-threat-actor-targeting-solarwinds-serv-u-software-with-0-day-exploit/

## Metadata
- **Author:** Florian Roth (Nextron Systems)
- **Date:** 2021-07-14
- **Rule ID:** `58f4ea09-0fc2-4520-ba18-b85c540b0eaf`
- **Source file:** `windows/process_creation/proc_creation_win_servu_susp_child_process.yml`
