---
type: detection_rule
title: "BITS Transfer Job Download To Potential Suspicious Folder"
rule_id: f8a56cb7-a363-44ed-a82f-5926bb44cd05
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1197]
---

# BITS Transfer Job Download To Potential Suspicious Folder

## Description
Detects new BITS transfer job where the LocalName/Saved file is stored in a potentially suspicious location

## Log Source
```yaml
product: windows
service: bits-client
```

## Detection Logic
```yaml
condition: selection
selection:
  EventID: 16403
  LocalName|contains:
  - \Desktop\
  - C:\Users\Public\
  - C:\PerfLogs\
```

## MITRE ATT&CK
- T1197

## False Positives
- Unknown

## References
- https://github.com/redcanaryco/atomic-red-team/blob/f339e7da7d05f6057fdfcdd3742bfcf365fee2a9/atomics/T1197/T1197.md

## Metadata
- **Author:** Florian Roth (Nextron Systems)
- **Date:** 2022-06-28
- **Rule ID:** `f8a56cb7-a363-44ed-a82f-5926bb44cd05`
- **Source file:** `windows/builtin/bits_client/win_bits_client_new_trasnfer_susp_local_folder.yml`
