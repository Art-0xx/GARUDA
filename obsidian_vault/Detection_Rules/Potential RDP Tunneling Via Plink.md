---
type: detection_rule
title: "Potential RDP Tunneling Via Plink"
rule_id: f38ce0b9-5e97-4b47-a211-7dc8d8b871da
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1572]
---

# Potential RDP Tunneling Via Plink

## Description
Execution of plink to perform data exfiltration and tunneling

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: selection_a or all of selection_b*
selection_a:
  CommandLine|contains: :127.0.0.1:3389
  Image|endswith: \plink.exe
selection_b1:
  CommandLine|contains: :3389
  Image|endswith: \plink.exe
selection_b2:
  CommandLine|contains:
  - ' -P 443'
  - ' -P 22'
```

## MITRE ATT&CK
- T1572

## False Positives
- Unknown

## References
- https://www.microsoft.com/security/blog/2022/07/26/malicious-iis-extensions-quietly-open-persistent-backdoors-into-servers/

## Metadata
- **Author:** Florian Roth (Nextron Systems)
- **Date:** 2022-08-04
- **Rule ID:** `f38ce0b9-5e97-4b47-a211-7dc8d8b871da`
- **Source file:** `windows/process_creation/proc_creation_win_plink_susp_tunneling.yml`
