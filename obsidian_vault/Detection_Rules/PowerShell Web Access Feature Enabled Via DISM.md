---
type: detection_rule
title: "PowerShell Web Access Feature Enabled Via DISM"
rule_id: 7e8f2d3b-9c1a-4f67-b9e8-8d9006e0e51f
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1548.002]
---

# PowerShell Web Access Feature Enabled Via DISM

## Description
Detects the use of DISM to enable the PowerShell Web Access feature, which could be used for remote access and potential abuse

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: all of selection_*
selection_cli:
  CommandLine|contains|all:
  - WindowsPowerShellWebAccess
  - /online
  - /enable-feature
selection_img:
- Image|endswith: \dism.exe
- OriginalFileName: DISM.EXE
```

## MITRE ATT&CK
- T1548.002

## False Positives
- Legitimate PowerShell Web Access installations by administrators

## References
- https://docs.microsoft.com/en-us/powershell/module/dism/enable-windowsoptionalfeature
- https://www.cisa.gov/news-events/cybersecurity-advisories/aa24-241a
- https://gist.github.com/MHaggis/7e67b659af9148fa593cf2402edebb41

## Metadata
- **Author:** Michael Haag
- **Date:** 2024-09-03
- **Rule ID:** `7e8f2d3b-9c1a-4f67-b9e8-8d9006e0e51f`
- **Source file:** `windows/process_creation/proc_creation_win_dism_enable_powershell_web_access_feature.yml`
