---
type: detection_rule
title: "RDP over Reverse SSH Tunnel WFP"
rule_id: 5bed80b6-b3e8-428e-a3ae-d3c757589e41
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1090.001, attack.t1090.002, attack.t1021.001]
---

# RDP over Reverse SSH Tunnel WFP

## Description
Detects svchost hosting RDP termsvcs communicating with the loopback address

## Log Source
```yaml
product: windows
service: security
```

## Detection Logic
```yaml
condition: selection and ( sourceRDP or destinationRDP ) and not 1 of filter*
destinationRDP:
  DestPort: 3389
  SourceAddress:
  - 127.*
  - ::1
filter_app_container:
  FilterOrigin: AppContainer Loopback
filter_thor:
  Application|endswith:
  - \thor.exe
  - \thor64.exe
selection:
  EventID: 5156
sourceRDP:
  DestAddress:
  - 127.*
  - ::1
  SourcePort: 3389
```

## MITRE ATT&CK
- T1090.001
- T1090.002
- T1021.001

## False Positives
- Programs that connect locally to the RDP port

## References
- https://twitter.com/SBousseaden/status/1096148422984384514
- https://github.com/sbousseaden/EVTX-ATTACK-SAMPLES/blob/44fbe85f72ee91582876b49678f9a26292a155fb/Command%20and%20Control/DE_RDP_Tunnel_5156.evtx

## Metadata
- **Author:** Samir Bousseaden
- **Date:** 2019-02-16
- **Rule ID:** `5bed80b6-b3e8-428e-a3ae-d3c757589e41`
- **Source file:** `windows/builtin/security/win_security_rdp_reverse_tunnel.yml`
