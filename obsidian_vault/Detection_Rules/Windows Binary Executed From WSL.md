---
type: detection_rule
title: "Windows Binary Executed From WSL"
rule_id: ed825c86-c009-4014-b413-b76003e33d35
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1202]
---

# Windows Binary Executed From WSL

## Description
Detects the execution of Windows binaries from within a WSL instance.
This could be used to masquerade parent-child relationships

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: selection
selection:
  CurrentDirectory|contains: \\\\wsl.localhost
  Image|re: '[a-zA-Z]:\\'
```

## MITRE ATT&CK
- T1202

## False Positives
- Unknown

## References
- Internal Research

## Metadata
- **Author:** Nasreddine Bencherchali (Nextron Systems)
- **Date:** 2023-02-14
- **Rule ID:** `ed825c86-c009-4014-b413-b76003e33d35`
- **Source file:** `windows/process_creation/proc_creation_win_wsl_windows_binaries_execution.yml`
