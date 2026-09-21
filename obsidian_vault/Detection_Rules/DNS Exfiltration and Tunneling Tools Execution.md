---
type: detection_rule
title: "DNS Exfiltration and Tunneling Tools Execution"
rule_id: 98a96a5a-64a0-4c42-92c5-489da3866cb0
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1048.001, attack.t1071.004, attack.t1132.001]
---

# DNS Exfiltration and Tunneling Tools Execution

## Description
Well-known DNS Exfiltration tools execution

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: selection
selection:
- Image|endswith: \iodine.exe
- Image|contains: \dnscat2
```

## MITRE ATT&CK
- T1048.001
- T1071.004
- T1132.001

## False Positives
- Unlikely

## References
- https://github.com/iagox86/dnscat2
- https://github.com/yarrick/iodine

## Metadata
- **Author:** Daniil Yugoslavskiy, oscd.community
- **Date:** 2019-10-24
- **Rule ID:** `98a96a5a-64a0-4c42-92c5-489da3866cb0`
- **Source file:** `windows/process_creation/proc_creation_win_dns_exfiltration_tools_execution.yml`
