---
type: detection_rule
title: "RunMRU Registry Key Deletion - Registry"
rule_id: 3a9b8c1e-5b2e-4f7a-9d1c-2a7f3b6e1c55
platform: windows
level: high
status: experimental
tags: [detection, sigma, windows]
mitre_tags: [attack.t1070.003]
---

# RunMRU Registry Key Deletion - Registry

## Description
Detects attempts to delete the RunMRU registry key, which stores the history of commands executed via the run dialog.
In the clickfix techniques, the phishing lures instruct users to open a run dialog through (Win + R) and execute malicious commands.
Adversaries may delete this key to cover their tracks after executing commands.

## Log Source
```yaml
category: registry_delete
product: windows
```

## Detection Logic
```yaml
condition: selection
selection:
  TargetObject|endswith: \Software\Microsoft\Windows\CurrentVersion\Explorer\RunMRU
```

## MITRE ATT&CK
- T1070.003

## False Positives
- Unknown

## References
- https://www.zscaler.com/blogs/security-research/coldriver-updates-arsenal-baitswitch-and-simplefix

## Metadata
- **Author:** Swachchhanda Shrawan Poudel (Nextron Systems)
- **Date:** 2025-09-25
- **Rule ID:** `3a9b8c1e-5b2e-4f7a-9d1c-2a7f3b6e1c55`
- **Source file:** `windows/registry/registry_delete/registry_delete_runmru.yml`
