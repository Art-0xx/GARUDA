---
type: detection_rule
title: "UEFI Persistence Via Wpbbin - ProcessCreation"
rule_id: 4abc0ec4-db5a-412f-9632-26659cddf145
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1542.001]
---

# UEFI Persistence Via Wpbbin - ProcessCreation

## Description
Detects execution of the binary "wpbbin" which is used as part of the UEFI based persistence method described in the reference section

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: selection
selection:
  Image: C:\Windows\System32\wpbbin.exe
```

## MITRE ATT&CK
- T1542.001

## False Positives
- Legitimate usage of the file by hardware manufacturer such as lenovo (Thanks @0gtweet for the tip)

## References
- https://grzegorztworek.medium.com/using-uefi-to-inject-executable-files-into-bitlocker-protected-drives-8ff4ca59c94c
- https://persistence-info.github.io/Data/wpbbin.html

## Metadata
- **Author:** Nasreddine Bencherchali (Nextron Systems)
- **Date:** 2022-07-18
- **Rule ID:** `4abc0ec4-db5a-412f-9632-26659cddf145`
- **Source file:** `windows/process_creation/proc_creation_win_wpbbin_potential_persistence.yml`
