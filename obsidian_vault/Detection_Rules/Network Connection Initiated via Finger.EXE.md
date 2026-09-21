---
type: detection_rule
title: "Network Connection Initiated via Finger.EXE"
rule_id: 2fdaf50b-9fd5-449f-ba69-f17248119af6
platform: windows
level: high
status: experimental
tags: [detection, sigma, windows]
mitre_tags: [attack.t1071.004, attack.t1059.003]
---

# Network Connection Initiated via Finger.EXE

## Description
Detects network connections via finger.exe, which can be abused by threat actors to retrieve remote commands for execution on Windows devices.
In one ClickFix malware campaign, adversaries leveraged the finger protocol to fetch commands from a remote server.
Since the finger utility is not commonly used in modern Windows environments, its presence already raises suspicion.
Investigating such network connections can also help identify potential malicious infrastructure used by threat actors

## Log Source
```yaml
category: network_connection
product: windows
```

## Detection Logic
```yaml
condition: selection
selection:
  Image|endswith: \finger.exe
  Initiated: 'true'
```

## MITRE ATT&CK
- T1071.004
- T1059.003

## False Positives
- Unlikely

## References
- https://www.bleepingcomputer.com/news/security/decades-old-finger-protocol-abused-in-clickfix-malware-attacks/

## Metadata
- **Author:** Swachchhanda Shrawan Poudel (Nextron Systems)
- **Date:** 2025-11-19
- **Rule ID:** `2fdaf50b-9fd5-449f-ba69-f17248119af6`
- **Source file:** `windows/network_connection/net_connection_win_finger.yml`
