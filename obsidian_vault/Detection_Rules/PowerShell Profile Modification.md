---
type: detection_rule
title: "PowerShell Profile Modification"
rule_id: b5b78988-486d-4a80-b991-930eff3ff8bf
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1546.013]
---

# PowerShell Profile Modification

## Description
Detects the creation or modification of a powershell profile which could indicate suspicious activity as the profile can be used as a mean of persistence

## Log Source
```yaml
category: file_event
product: windows
```

## Detection Logic
```yaml
condition: selection
selection:
  TargetFilename|endswith:
  - \Microsoft.PowerShell_profile.ps1
  - \PowerShell\profile.ps1
  - \Program Files\PowerShell\7-preview\profile.ps1
  - \Program Files\PowerShell\7\profile.ps1
  - \Windows\System32\WindowsPowerShell\v1.0\profile.ps1
  - \WindowsPowerShell\profile.ps1
```

## MITRE ATT&CK
- T1546.013

## False Positives
- System administrator creating Powershell profile manually

## References
- https://www.welivesecurity.com/2019/05/29/turla-powershell-usage/
- https://persistence-info.github.io/Data/powershellprofile.html

## Metadata
- **Author:** HieuTT35, Nasreddine Bencherchali (Nextron Systems)
- **Date:** 2019-10-24
- **Rule ID:** `b5b78988-486d-4a80-b991-930eff3ff8bf`
- **Source file:** `windows/file/file_event/file_event_win_susp_powershell_profile.yml`
