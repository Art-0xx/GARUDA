---
type: detection_rule
title: "Mavinject Inject DLL Into Running Process"
rule_id: 4f73421b-5a0b-4bbf-a892-5a7fb99bea66
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1055.001, attack.t1218.013]
---

# Mavinject Inject DLL Into Running Process

## Description
Detects process injection using the signed Windows tool "Mavinject" via the "INJECTRUNNING" flag

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: selection and not filter
filter:
  ParentImage: C:\Windows\System32\AppVClient.exe
selection:
  CommandLine|contains: ' /INJECTRUNNING '
```

## MITRE ATT&CK
- T1055.001
- T1218.013

## False Positives
- Unknown

## References
- https://github.com/redcanaryco/atomic-red-team/blob/f339e7da7d05f6057fdfcdd3742bfcf365fee2a9/atomics/T1218/T1218.md
- https://github.com/redcanaryco/atomic-red-team/blob/f339e7da7d05f6057fdfcdd3742bfcf365fee2a9/atomics/T1056.004/T1056.004.md
- https://posts.specterops.io/mavinject-exe-functionality-deconstructed-c29ab2cf5c0e
- https://twitter.com/gN3mes1s/status/941315826107510784
- https://reaqta.com/2017/12/mavinject-microsoft-injector/

## Metadata
- **Author:** frack113, Florian Roth
- **Date:** 2021-07-12
- **Rule ID:** `4f73421b-5a0b-4bbf-a892-5a7fb99bea66`
- **Source file:** `windows/process_creation/proc_creation_win_lolbin_mavinject_process_injection.yml`
