---
type: detection_rule
title: "New BITS Job Created Via Bitsadmin"
rule_id: 1ff315dc-2a3a-4b71-8dde-873818d25d39
platform: windows
level: low
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1197]
---

# New BITS Job Created Via Bitsadmin

## Description
Detects the creation of a new bits job by Bitsadmin

## Log Source
```yaml
product: windows
service: bits-client
```

## Detection Logic
```yaml
condition: selection
selection:
  EventID: 3
  processPath|endswith: \bitsadmin.exe
```

## MITRE ATT&CK
- T1197

## False Positives
- Many legitimate applications or scripts could leverage "bitsadmin". This event is best correlated with EID 16403 via the JobID field

## References
- https://github.com/redcanaryco/atomic-red-team/blob/f339e7da7d05f6057fdfcdd3742bfcf365fee2a9/atomics/T1197/T1197.md

## Metadata
- **Author:** frack113
- **Date:** 2022-03-01
- **Rule ID:** `1ff315dc-2a3a-4b71-8dde-873818d25d39`
- **Source file:** `windows/builtin/bits_client/win_bits_client_new_job_via_bitsadmin.yml`
