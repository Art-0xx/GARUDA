---
type: detection_rule
title: "Uncommon Svchost Command Line Parameter"
rule_id: f17211f1-1f24-4d0c-829f-31e28dc93cdd
platform: windows
level: high
status: experimental
tags: [detection, sigma, windows]
mitre_tags: [attack.t1036.005, attack.t1055, attack.t1055.012]
---

# Uncommon Svchost Command Line Parameter

## Description
Detects instances of svchost.exe running with an unusual or uncommon command line parameter by excluding known legitimate or common patterns.
This could point at a file masquerading as svchost, a process injection, or hollowing of a legitimate svchost instance.

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: selection and not 1 of filter_main_* and not 1 of filter_optional_*
filter_main_empty:
  CommandLine: ''
filter_main_flags:
  CommandLine|re: -k\s\w{1,64}(?:\s?(?:-p|-s))?
filter_main_null:
  CommandLine: null
filter_optional_defender:
  CommandLine|contains: svchost.exe
  ParentImage|endswith: \MsMpEng.exe
filter_optional_mrt:
  CommandLine: svchost.exe
  ParentImage|endswith: \MRT.exe
selection:
  Image|endswith: \svchost.exe
```

## MITRE ATT&CK
- T1036.005
- T1055
- T1055.012

## False Positives
- Unlikely

## References
- https://cardinalops.com/blog/the-art-of-anomaly-hunting-patterns-detection/
- https://www.security.com/threat-intelligence/blackbyte-exbyte-ransomware
- https://cloud.google.com/blog/topics/threat-intelligence/apt41-initiates-global-intrusion-campaign-using-multiple-exploits/
- https://media.kasperskycontenthub.com/wp-content/uploads/sites/43/2018/03/08064518/Carbanak_APT_eng.pdf

## Metadata
- **Author:** Liran Ravich
- **Date:** 2025-11-14
- **Rule ID:** `f17211f1-1f24-4d0c-829f-31e28dc93cdd`
- **Source file:** `windows/process_creation/proc_creation_win_svchost_uncommon_command_line_flags.yml`
