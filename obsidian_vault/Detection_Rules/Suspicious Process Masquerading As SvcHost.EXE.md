---
type: detection_rule
title: "Suspicious Process Masquerading As SvcHost.EXE"
rule_id: be58d2e2-06c8-4f58-b666-b99f6dc3b6cd
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1036.005]
---

# Suspicious Process Masquerading As SvcHost.EXE

## Description
Detects a suspicious process that is masquerading as the legitimate "svchost.exe" by naming its binary "svchost.exe" and executing from an uncommon location.
Adversaries often disguise their malicious binaries by naming them after legitimate system processes like "svchost.exe" to evade detection.

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: selection and not 1 of filter_main_*
filter_main_img_location:
  Image:
  - C:\Windows\System32\svchost.exe
  - C:\Windows\SysWOW64\svchost.exe
filter_main_ofn:
  OriginalFileName: svchost.exe
selection:
  Image|endswith: \svchost.exe
```

## MITRE ATT&CK
- T1036.005

## False Positives
- Unlikely

## References
- https://tria.ge/240731-jh4crsycnb/behavioral2
- https://redcanary.com/blog/threat-detection/process-masquerading/

## Metadata
- **Author:** Swachchhanda Shrawan Poudel
- **Date:** 2024-08-07
- **Rule ID:** `be58d2e2-06c8-4f58-b666-b99f6dc3b6cd`
- **Source file:** `windows/process_creation/proc_creation_win_svchost_masqueraded_execution.yml`
