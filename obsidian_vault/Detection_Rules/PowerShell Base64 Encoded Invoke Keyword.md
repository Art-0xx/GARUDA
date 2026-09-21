---
type: detection_rule
title: "PowerShell Base64 Encoded Invoke Keyword"
rule_id: 6385697e-9f1b-40bd-8817-f4a91f40508e
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1059.001, attack.t1027]
---

# PowerShell Base64 Encoded Invoke Keyword

## Description
Detects UTF-8 and UTF-16 Base64 encoded powershell 'Invoke-' calls

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: all of selection_*
selection_cli_enc:
  CommandLine|contains: ' -e'
selection_cli_invoke:
  CommandLine|contains:
  - SQBuAHYAbwBrAGUALQ
  - kAbgB2AG8AawBlAC0A
  - JAG4AdgBvAGsAZQAtA
  - SW52b2tlL
  - ludm9rZS
  - JbnZva2Ut
selection_img:
- Image|endswith:
  - \powershell.exe
  - \pwsh.exe
- OriginalFileName:
  - PowerShell.EXE
  - pwsh.dll
```

## MITRE ATT&CK
- T1059.001
- T1027

## False Positives
- Unknown

## References
- https://thedfirreport.com/2022/05/09/seo-poisoning-a-gootloader-story/

## Metadata
- **Author:** pH-T (Nextron Systems), Harjot Singh, @cyb3rjy0t
- **Date:** 2022-05-20
- **Rule ID:** `6385697e-9f1b-40bd-8817-f4a91f40508e`
- **Source file:** `windows/process_creation/proc_creation_win_powershell_base64_invoke.yml`
