---
type: detection_rule
title: "Sliver C2 Default Service Installation"
rule_id: 31c51af6-e7aa-4da7-84d4-8f32cc580af2
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1543.003, attack.t1569.002]
---

# Sliver C2 Default Service Installation

## Description
Detects known malicious service installation that appear in cases in which a Sliver implants execute the PsExec commands

## Log Source
```yaml
product: windows
service: system
```

## Detection Logic
```yaml
condition: selection_eid and 1 of selection_service_*
selection_eid:
  EventID: 7045
  Provider_Name: Service Control Manager
selection_service_1:
  ImagePath|re: ^[a-zA-Z]:\\windows\\temp\\[a-zA-Z0-9]{10}\.exe
selection_service_2:
  ServiceName:
  - Sliver
  - Sliver implant
```

## MITRE ATT&CK
- T1543.003
- T1569.002

## False Positives
- Unknown

## References
- https://github.com/BishopFox/sliver/blob/79f2d48fcdfc2bee4713b78d431ea4b27f733f30/client/command/commands.go#L1231
- https://www.microsoft.com/security/blog/2022/08/24/looking-for-the-sliver-lining-hunting-for-emerging-command-and-control-frameworks/

## Metadata
- **Author:** Florian Roth (Nextron Systems), Nasreddine Bencherchali (Nextron Systems)
- **Date:** 2022-08-25
- **Rule ID:** `31c51af6-e7aa-4da7-84d4-8f32cc580af2`
- **Source file:** `windows/builtin/system/service_control_manager/win_system_service_install_sliver.yml`
