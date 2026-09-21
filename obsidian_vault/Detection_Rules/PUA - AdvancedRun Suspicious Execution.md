---
type: detection_rule
title: "PUA - AdvancedRun Suspicious Execution"
rule_id: fa00b701-44c6-4679-994d-5a18afa8a707
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1134.002]
---

# PUA - AdvancedRun Suspicious Execution

## Description
Detects the execution of AdvancedRun utility in the context of the TrustedInstaller, SYSTEM, Local Service or Network Service accounts

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: all of selection*
selection:
  CommandLine|contains:
  - /EXEFilename
  - /CommandLine
selection_runas:
- CommandLine|contains:
  - ' /RunAs 8 '
  - ' /RunAs 4 '
  - ' /RunAs 10 '
  - ' /RunAs 11 '
- CommandLine|endswith:
  - /RunAs 8
  - /RunAs 4
  - /RunAs 10
  - /RunAs 11
```

## MITRE ATT&CK
- T1134.002

## False Positives
- Unknown

## References
- https://twitter.com/splinter_code/status/1483815103279603714
- https://medium.com/s2wblog/analysis-of-destructive-malware-whispergate-targeting-ukraine-9d5d158f19f3
- https://www.elastic.co/security-labs/operation-bleeding-bear
- https://www.winhelponline.com/blog/run-program-as-system-localsystem-account-windows/

## Metadata
- **Author:** Florian Roth (Nextron Systems)
- **Date:** 2022-01-20
- **Rule ID:** `fa00b701-44c6-4679-994d-5a18afa8a707`
- **Source file:** `windows/process_creation/proc_creation_win_pua_advancedrun_priv_user.yml`
