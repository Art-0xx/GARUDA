---
type: detection_rule
title: "CobaltStrike Service Installations - Security"
rule_id: d7a95147-145f-4678-b85d-d1ff4a3bb3f6
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1021.002, attack.t1543.003, attack.t1569.002]
---

# CobaltStrike Service Installations - Security

## Description
Detects known malicious service installs that appear in cases in which a Cobalt Strike beacon elevates privileges or lateral movement

## Log Source
```yaml
definition: The 'System Security Extension' audit subcategory need to be enabled to
  log the EID 4697
product: windows
service: security
```

## Detection Logic
```yaml
condition: event_id and 1 of selection*
event_id:
  EventID: 4697
selection1:
  ServiceFileName|contains|all:
  - ADMIN$
  - .exe
selection2:
  ServiceFileName|contains|all:
  - '%COMSPEC%'
  - start
  - powershell
selection3:
  ServiceFileName|contains: powershell -nop -w hidden -encodedcommand
selection4:
  ServiceFileName|base64offset|contains: 'IEX (New-Object Net.Webclient).DownloadString(''http://127.0.0.1:'
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
- **Rule ID:** `d7a95147-145f-4678-b85d-d1ff4a3bb3f6`
- **Source file:** `windows/builtin/security/win_security_cobaltstrike_service_installs.yml`
