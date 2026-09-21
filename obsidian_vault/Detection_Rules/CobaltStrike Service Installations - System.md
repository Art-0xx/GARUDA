---
type: detection_rule
title: "CobaltStrike Service Installations - System"
rule_id: 5a105d34-05fc-401e-8553-272b45c1522d
platform: windows
level: critical
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1021.002, attack.t1543.003, attack.t1569.002]
---

# CobaltStrike Service Installations - System

## Description
Detects known malicious service installs that appear in cases in which a Cobalt Strike beacon elevates privileges or lateral movement

## Log Source
```yaml
product: windows
service: system
```

## Detection Logic
```yaml
condition: selection_id and (selection1 or selection2 or selection3 or selection4)
selection1:
  ImagePath|contains|all:
  - ADMIN$
  - .exe
selection2:
  ImagePath|contains|all:
  - '%COMSPEC%'
  - start
  - powershell
selection3:
  ImagePath|contains: powershell -nop -w hidden -encodedcommand
selection4:
  ImagePath|base64offset|contains: 'IEX (New-Object Net.Webclient).DownloadString(''http://127.0.0.1:'
selection_id:
  EventID: 7045
  Provider_Name: Service Control Manager
```

## MITRE ATT&CK
- T1021.002
- T1543.003
- T1569.002

## False Positives
- Unknown

## References
- https://www.sans.org/webcasts/119395
- https://www.crowdstrike.com/blog/getting-the-bacon-from-cobalt-strike-beacon/
- https://thedfirreport.com/2021/08/29/cobalt-strike-a-defenders-guide/

## Metadata
- **Author:** Florian Roth (Nextron Systems), Wojciech Lesicki
- **Date:** 2021-05-26
- **Rule ID:** `5a105d34-05fc-401e-8553-272b45c1522d`
- **Source file:** `windows/builtin/system/service_control_manager/win_system_cobaltstrike_service_installs.yml`
