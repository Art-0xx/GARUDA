---
type: detection_rule
title: "Suspicious Invoke-WebRequest Execution"
rule_id: 5e3cc4d8-3e68-43db-8656-eaaeefdec9cc
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1105]
---

# Suspicious Invoke-WebRequest Execution

## Description
Detects a suspicious call to Invoke-WebRequest cmdlet where the and output is located in a suspicious location

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: all of selection_*
selection_commands:
  CommandLine|contains:
  - 'curl '
  - Invoke-WebRequest
  - 'iwr '
  - 'wget '
selection_flags:
  CommandLine|contains:
  - ' -ur'
  - ' -o'
selection_img:
- Image|endswith:
  - \powershell_ise.exe
  - \powershell.exe
  - \pwsh.exe
- OriginalFileName:
  - powershell_ise.EXE
  - PowerShell.EXE
  - pwsh.dll
selection_susp_locations:
  CommandLine|contains:
  - \AppData\
  - \Desktop\
  - \Temp\
  - \Users\Public\
  - '%AppData%'
  - '%Public%'
  - '%Temp%'
  - '%tmp%'
  - :\Windows\
```

## MITRE ATT&CK
- T1105

## False Positives
- Unknown

## References
- https://www.sentinelone.com/blog/living-off-windows-defender-lockbit-ransomware-sideloads-cobalt-strike-through-microsoft-security-tool/

## Metadata
- **Author:** Nasreddine Bencherchali (Nextron Systems)
- **Date:** 2022-08-02
- **Rule ID:** `5e3cc4d8-3e68-43db-8656-eaaeefdec9cc`
- **Source file:** `windows/process_creation/proc_creation_win_powershell_invoke_webrequest_download.yml`
