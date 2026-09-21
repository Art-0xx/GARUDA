---
type: detection_rule
title: "Sysinternals PsSuspend Suspicious Execution"
rule_id: 4beb6ae0-f85b-41e2-8f18-8668abc8af78
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1685]
---

# Sysinternals PsSuspend Suspicious Execution

## Description
Detects suspicious execution of Sysinternals PsSuspend, where the utility is used to suspend critical processes such as AV or EDR to bypass defenses

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: all of selection_*
selection_cli:
  CommandLine|contains: msmpeng.exe
selection_img:
- OriginalFileName: pssuspend.exe
- Image|endswith:
  - \pssuspend.exe
  - \pssuspend64.exe
  - \pssuspend64a.exe
```

## MITRE ATT&CK
- T1685

## False Positives
- Unlikely

## References
- https://learn.microsoft.com/en-us/sysinternals/downloads/pssuspend
- https://twitter.com/0gtweet/status/1638069413717975046

## Metadata
- **Author:** Nasreddine Bencherchali (Nextron Systems)
- **Date:** 2023-03-23
- **Rule ID:** `4beb6ae0-f85b-41e2-8f18-8668abc8af78`
- **Source file:** `windows/process_creation/proc_creation_win_sysinternals_pssuspend_susp_execution.yml`
