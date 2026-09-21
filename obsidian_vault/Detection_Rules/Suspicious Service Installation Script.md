---
type: detection_rule
title: "Suspicious Service Installation Script"
rule_id: 70f00d10-60b2-4f34-b9a0-dc3df3fe762a
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1543.003]
---

# Suspicious Service Installation Script

## Description
Detects suspicious service installation scripts

## Log Source
```yaml
product: windows
service: system
```

## Detection Logic
```yaml
condition: all of selection_*
selection_binaries:
  ImagePath|contains:
  - cscript
  - mshta
  - powershell
  - pwsh
  - regsvr32
  - rundll32
  - wscript
selection_cmd_flags:
  ImagePath|contains|windash:
  - ' -c '
  - ' -r '
  - ' -k '
selection_eid:
  EventID: 7045
  Provider_Name: Service Control Manager
```

## MITRE ATT&CK
- T1543.003

## False Positives
- Unknown

## References
- Internal Research

## Metadata
- **Author:** pH-T (Nextron Systems)
- **Date:** 2022-03-18
- **Rule ID:** `70f00d10-60b2-4f34-b9a0-dc3df3fe762a`
- **Source file:** `windows/builtin/system/service_control_manager/win_system_susp_service_installation_script.yml`
