---
type: detection_rule
title: "Rebuild Performance Counter Values Via Lodctr.EXE"
rule_id: cc9d3712-6310-4320-b2df-7cb408274d53
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
---

# Rebuild Performance Counter Values Via Lodctr.EXE

## Description
Detects the execution of "lodctr.exe" to rebuild the performance counter registry values. This can be abused by attackers by providing a malicious config file to overwrite performance counter configuration to confuse and evade monitoring and security solutions.

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: all of selection_*
selection_cli:
  CommandLine|contains|windash: ' -r'
selection_img:
  Image|endswith: \lodctr.exe
  OriginalFileName: LODCTR.EXE
```

## False Positives
- Legitimate usage by an administrator

## References
- https://learn.microsoft.com/en-us/windows/security/identity-protection/virtual-smart-cards/virtual-smart-card-tpmvscmgr

## Metadata
- **Author:** Nasreddine Bencherchali (Nextron Systems)
- **Date:** 2023-06-15
- **Rule ID:** `cc9d3712-6310-4320-b2df-7cb408274d53`
- **Source file:** `windows/process_creation/proc_creation_win_lodctr_performance_counter_tampering.yml`
