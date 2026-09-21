---
type: detection_rule
title: "Renamed ZOHO Dctask64 Execution"
rule_id: 340a090b-c4e9-412e-bb36-b4b16fe96f9b
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1036, attack.t1055.001, attack.t1202, attack.t1218]
---

# Renamed ZOHO Dctask64 Execution

## Description
Detects a renamed "dctask64.exe" execution, a signed binary by ZOHO Corporation part of ManageEngine Endpoint Central.
This binary can be abused for DLL injection, arbitrary command and process execution.

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: selection and not 1 of filter_main_*
filter_main_legit_name:
  Image|endswith: \dctask64.exe
selection:
  Hashes|contains:
  - IMPHASH=6834B1B94E49701D77CCB3C0895E1AFD
  - IMPHASH=1BB6F93B129F398C7C4A76BB97450BBA
  - IMPHASH=FAA2AC19875FADE461C8D89DCF2710A3
  - IMPHASH=F1039CED4B91572AB7847D26032E6BBF
```

## MITRE ATT&CK
- T1036
- T1055.001
- T1202
- T1218

## False Positives
- Unknown

## References
- https://twitter.com/gN3mes1s/status/1222088214581825540
- https://twitter.com/gN3mes1s/status/1222095963789111296
- https://twitter.com/gN3mes1s/status/1222095371175911424

## Metadata
- **Author:** Florian Roth (Nextron Systems), Nasreddine Bencherchali (Nextron Systems)
- **Date:** 2020-01-28
- **Rule ID:** `340a090b-c4e9-412e-bb36-b4b16fe96f9b`
- **Source file:** `windows/process_creation/proc_creation_win_renamed_dctask64.yml`
