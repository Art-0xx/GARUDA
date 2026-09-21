---
type: detection_rule
title: "Suspicious Service Path Modification"
rule_id: 138d3531-8793-4f50-a2cd-f291b2863d78
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1543.003]
---

# Suspicious Service Path Modification

## Description
Detects service path modification via the "sc" binary to a suspicious command or path

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: selection
selection:
  CommandLine|contains:
  - powershell
  - 'cmd '
  - mshta
  - wscript
  - cscript
  - rundll32
  - svchost
  - dllhost
  - cmd.exe /c
  - cmd.exe /k
  - cmd.exe /r
  - cmd /c
  - cmd /k
  - cmd /r
  - C:\Users\Public
  - \Downloads\
  - \Desktop\
  - \Microsoft\Windows\Start Menu\Programs\Startup\
  - C:\Windows\TEMP\
  - \AppData\Local\Temp
  CommandLine|contains|all:
  - config
  - binPath
  Image|endswith: \sc.exe
```

## MITRE ATT&CK
- T1543.003

## False Positives
- Unlikely

## References
- https://github.com/redcanaryco/atomic-red-team/blob/f339e7da7d05f6057fdfcdd3742bfcf365fee2a9/atomics/T1543.003/T1543.003.md
- https://web.archive.org/web/20180331144337/https://www.fireeye.com/blog/threat-research/2018/03/sanny-malware-delivery-method-updated-in-recently-observed-attacks.html

## Metadata
- **Author:** Victor Sergeev, oscd.community, Nasreddine Bencherchali (Nextron Systems)
- **Date:** 2019-10-21
- **Rule ID:** `138d3531-8793-4f50-a2cd-f291b2863d78`
- **Source file:** `windows/process_creation/proc_creation_win_sc_service_path_modification.yml`
