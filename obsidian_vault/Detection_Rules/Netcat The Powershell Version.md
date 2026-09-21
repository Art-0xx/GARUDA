---
type: detection_rule
title: "Netcat The Powershell Version"
rule_id: c5b20776-639a-49bf-94c7-84f912b91c15
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1095, attack.t1059.001]
---

# Netcat The Powershell Version

## Description
Adversaries may use a non-application layer protocol for communication between host and C2 server or among infected hosts within a network

## Log Source
```yaml
category: ps_classic_start
product: windows
```

## Detection Logic
```yaml
condition: selection
selection:
  Data|contains:
  - 'powercat '
  - powercat.ps1
```

## MITRE ATT&CK
- T1095
- T1059.001

## False Positives
- Unknown

## References
- https://nmap.org/ncat/
- https://github.com/besimorhino/powercat
- https://github.com/redcanaryco/atomic-red-team/blob/f339e7da7d05f6057fdfcdd3742bfcf365fee2a9/atomics/T1095/T1095.md

## Metadata
- **Author:** frack113
- **Date:** 2021-07-21
- **Rule ID:** `c5b20776-639a-49bf-94c7-84f912b91c15`
- **Source file:** `windows/powershell/powershell_classic/posh_pc_powercat.yml`
