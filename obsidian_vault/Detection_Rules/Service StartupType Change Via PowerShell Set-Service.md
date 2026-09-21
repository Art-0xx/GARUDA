---
type: detection_rule
title: "Service StartupType Change Via PowerShell Set-Service"
rule_id: 62b20d44-1546-4e61-afce-8e175eb9473c
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1685]
---

# Service StartupType Change Via PowerShell Set-Service

## Description
Detects the use of the PowerShell "Set-Service" cmdlet to change the startup type of a service to "disabled" or "manual"

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: all of selection_*
selection_cli:
  CommandLine|contains:
  - Disabled
  - Manual
  CommandLine|contains|all:
  - Set-Service
  - -StartupType
selection_img:
- Image|endswith: \powershell.exe
- OriginalFileName: PowerShell.EXE
```

## MITRE ATT&CK
- T1685

## False Positives
- False positives may occur with troubleshooting scripts

## References
- https://www.virustotal.com/gui/file/38283b775552da8981452941ea74191aa0d203edd3f61fb2dee7b0aea3514955

## Metadata
- **Author:** Nasreddine Bencherchali (Nextron Systems)
- **Date:** 2023-03-04
- **Rule ID:** `62b20d44-1546-4e61-afce-8e175eb9473c`
- **Source file:** `windows/process_creation/proc_creation_win_powershell_set_service_disabled.yml`
