---
type: detection_rule
title: "Potential Data Exfiltration Activity Via CommandLine Tools"
rule_id: 7d1aaf3d-4304-425c-b7c3-162055e0b3ab
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1059.001]
---

# Potential Data Exfiltration Activity Via CommandLine Tools

## Description
Detects the use of various CLI utilities exfiltrating data via web requests

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: (selection_iwr or all of selection_curl* or selection_wget) and payloads
payloads:
- CommandLine|re:
  - net\s+view
  - sc\s+query
- CommandLine|contains:
  - Get-Content
  - GetBytes
  - hostname
  - ifconfig
  - ipconfig
  - netstat
  - nltest
  - qprocess
  - systeminfo
  - tasklist
  - ToBase64String
  - whoami
- CommandLine|contains|all:
  - 'type '
  - ' > '
  - ' C:\'
selection_curl:
  CommandLine|contains: --ur
  Image|endswith: \curl.exe
selection_curl_data:
  CommandLine|contains:
  - ' -d '
  - ' --data '
selection_iwr:
  CommandLine|contains:
  - 'curl '
  - Invoke-RestMethod
  - Invoke-WebRequest
  - 'irm '
  - 'iwr '
  - 'wget '
  CommandLine|contains|all:
  - ' -ur'
  - ' -me'
  - ' -b'
  - ' POST '
  Image|endswith:
  - \powershell_ise.exe
  - \powershell.exe
  - \pwsh.exe
  - \cmd.exe
selection_wget:
  CommandLine|contains:
  - --post-data
  - --post-file
  Image|endswith: \wget.exe
```

## MITRE ATT&CK
- T1059.001

## False Positives
- Unlikely

## References
- https://www.sentinelone.com/blog/living-off-windows-defender-lockbit-ransomware-sideloads-cobalt-strike-through-microsoft-security-tool/

## Metadata
- **Author:** Nasreddine Bencherchali (Nextron Systems)
- **Date:** 2022-08-02
- **Rule ID:** `7d1aaf3d-4304-425c-b7c3-162055e0b3ab`
- **Source file:** `windows/process_creation/proc_creation_win_susp_data_exfiltration_via_cli.yml`
