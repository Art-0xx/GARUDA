---
type: detection_rule
title: "DNS Query by Finger Utility"
rule_id: c082c2b0-525b-4dbc-9a26-a57dc4692074
platform: windows
level: high
status: experimental
tags: [detection, sigma, windows]
mitre_tags: [attack.t1071.004, attack.t1059.003]
---

# DNS Query by Finger Utility

## Description
Detects DNS queries made by the finger utility, which can be abused by threat actors to retrieve remote commands for execution on Windows devices.
In one ClickFix malware campaign, adversaries leveraged the finger protocol to fetch commands from a remote server.
Since the finger utility is not commonly used in modern Windows environments, its presence already raises suspicion.
Investigating such DNS queries can also help identify potential malicious infrastructure used by threat actors for command and control (C2) communication.

## Log Source
```yaml
category: dns_query
product: windows
```

## Detection Logic
```yaml
condition: selection
selection:
  Image|endswith: \finger.exe
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
- **Rule ID:** `c082c2b0-525b-4dbc-9a26-a57dc4692074`
- **Source file:** `windows/dns_query/dns_query_win_finger.yml`
