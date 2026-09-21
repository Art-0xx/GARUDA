---
type: detection_rule
title: "Potential Suspicious Activity Using SeCEdit"
rule_id: c2c76b77-32be-4d1f-82c9-7e544bdfe0eb
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1685.001, attack.t1547.001, attack.t1505.005, attack.t1556.002, attack.t1685, attack.t1574.007, attack.t1564.002, attack.t1546.008, attack.t1546.007, attack.t1547.014, attack.t1547.010, attack.t1547.002, attack.t1557, attack.t1082]
---

# Potential Suspicious Activity Using SeCEdit

## Description
Detects potential suspicious behaviour using secedit.exe. Such as exporting or modifying the security policy

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: selection_img and (1 of selection_flags_*)
selection_flags_configure:
  CommandLine|contains|all:
  - /configure
  - /db
selection_flags_discovery:
  CommandLine|contains|all:
  - /export
  - /cfg
selection_img:
- Image|endswith: \secedit.exe
- OriginalFileName: SeCEdit
```

## MITRE ATT&CK
- T1685.001
- T1547.001
- T1505.005
- T1556.002
- T1685
- T1574.007
- T1564.002
- T1546.008
- T1546.007
- T1547.014
- T1547.010
- T1547.002
- T1557
- T1082

## False Positives
- Legitimate administrative use

## References
- https://blueteamops.medium.com/secedit-and-i-know-it-595056dee53d
- https://learn.microsoft.com/en-us/windows-server/administration/windows-commands/secedit

## Metadata
- **Author:** Janantha Marasinghe
- **Date:** 2022-11-18
- **Rule ID:** `c2c76b77-32be-4d1f-82c9-7e544bdfe0eb`
- **Source file:** `windows/process_creation/proc_creation_win_secedit_execution.yml`
