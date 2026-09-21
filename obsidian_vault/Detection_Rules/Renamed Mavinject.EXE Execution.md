---
type: detection_rule
title: "Renamed Mavinject.EXE Execution"
rule_id: e6474a1b-5390-49cd-ab41-8d88655f7394
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1055.001, attack.t1218.013]
---

# Renamed Mavinject.EXE Execution

## Description
Detects the execution of a renamed version of the "Mavinject" process. Which can be abused to perform process injection using the "/INJECTRUNNING" flag

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: selection and not filter
filter:
  Image|endswith:
  - \mavinject32.exe
  - \mavinject64.exe
selection:
  OriginalFileName:
  - mavinject32.exe
  - mavinject64.exe
```

## MITRE ATT&CK
- T1055.001
- T1218.013

## False Positives
- Unlikely

## References
- https://github.com/redcanaryco/atomic-red-team/blob/f339e7da7d05f6057fdfcdd3742bfcf365fee2a9/atomics/T1218/T1218.md
- https://github.com/redcanaryco/atomic-red-team/blob/f339e7da7d05f6057fdfcdd3742bfcf365fee2a9/atomics/T1056.004/T1056.004.md
- https://posts.specterops.io/mavinject-exe-functionality-deconstructed-c29ab2cf5c0e
- https://twitter.com/gN3mes1s/status/941315826107510784
- https://reaqta.com/2017/12/mavinject-microsoft-injector/

## Metadata
- **Author:** frack113, Florian Roth
- **Date:** 2022-12-05
- **Rule ID:** `e6474a1b-5390-49cd-ab41-8d88655f7394`
- **Source file:** `windows/process_creation/proc_creation_win_renamed_mavinject.yml`
