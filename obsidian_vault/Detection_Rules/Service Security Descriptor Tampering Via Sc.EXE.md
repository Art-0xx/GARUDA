---
type: detection_rule
title: "Service Security Descriptor Tampering Via Sc.EXE"
rule_id: 98c5aeef-32d5-492f-b174-64a691896d25
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1574.011]
---

# Service Security Descriptor Tampering Via Sc.EXE

## Description
Detection of sc.exe utility adding a new service with special permission which hides that service.

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: all of selection_*
selection_cli:
  CommandLine|contains: sdset
selection_img:
- Image|endswith: \sc.exe
- OriginalFileName: sc.exe
```

## MITRE ATT&CK
- T1574.011

## False Positives
- Unknown

## References
- https://blog.talosintelligence.com/2021/10/threat-hunting-in-large-datasets-by.html
- https://www.sans.org/blog/red-team-tactics-hiding-windows-services/
- https://twitter.com/Alh4zr3d/status/1580925761996828672
- https://twitter.com/0gtweet/status/1628720819537936386
- https://itconnect.uw.edu/tools-services-support/it-systems-infrastructure/msinf/other-help/understanding-sddl-syntax/

## Metadata
- **Author:** Nasreddine Bencherchali (Nextron Systems)
- **Date:** 2023-02-28
- **Rule ID:** `98c5aeef-32d5-492f-b174-64a691896d25`
- **Source file:** `windows/process_creation/proc_creation_win_sc_sdset_modification.yml`
