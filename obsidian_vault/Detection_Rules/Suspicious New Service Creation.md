---
type: detection_rule
title: "Suspicious New Service Creation"
rule_id: 17a1be64-8d88-40bf-b5ff-a4f7a50ebcc8
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1543.003]
---

# Suspicious New Service Creation

## Description
Detects creation of a new service via "sc" command or the powershell "new-service" cmdlet with suspicious binary paths

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: 1 of selection* and susp_binpath
selection_posh:
  CommandLine|contains|all:
  - New-Service
  - -BinaryPathName
selection_sc:
  CommandLine|contains|all:
  - create
  - binPath=
  Image|endswith: \sc.exe
susp_binpath:
  CommandLine|contains:
  - powershell
  - mshta
  - wscript
  - cscript
  - svchost
  - dllhost
  - 'cmd '
  - cmd.exe /c
  - cmd.exe /k
  - cmd.exe /r
  - rundll32
  - C:\Users\Public
  - \Downloads\
  - \Desktop\
  - \Microsoft\Windows\Start Menu\Programs\Startup\
  - C:\Windows\TEMP\
  - \AppData\Local\Temp
```

## MITRE ATT&CK
- T1543.003

## False Positives
- Unlikely

## References
- https://github.com/redcanaryco/atomic-red-team/blob/f339e7da7d05f6057fdfcdd3742bfcf365fee2a9/atomics/T1543.003/T1543.003.md
- https://web.archive.org/web/20180331144337/https://www.fireeye.com/blog/threat-research/2018/03/sanny-malware-delivery-method-updated-in-recently-observed-attacks.html

## Metadata
- **Author:** Nasreddine Bencherchali (Nextron Systems)
- **Date:** 2022-07-14
- **Rule ID:** `17a1be64-8d88-40bf-b5ff-a4f7a50ebcc8`
- **Source file:** `windows/process_creation/proc_creation_win_susp_service_creation.yml`
