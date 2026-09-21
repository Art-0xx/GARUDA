---
type: detection_rule
title: "Suspicious GrpConv Execution"
rule_id: f14e169e-9978-4c69-acb3-1cff8200bc36
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1547]
---

# Suspicious GrpConv Execution

## Description
Detects the suspicious execution of a utility to convert Windows 3.x .grp files or for persistence purposes by malicious software or actors

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: selection
selection:
  CommandLine|contains:
  - grpconv.exe -o
  - grpconv -o
```

## MITRE ATT&CK
- T1547

## False Positives
- Unknown

## References
- https://twitter.com/0gtweet/status/1526833181831200770

## Metadata
- **Author:** Florian Roth (Nextron Systems)
- **Date:** 2022-05-19
- **Rule ID:** `f14e169e-9978-4c69-acb3-1cff8200bc36`
- **Source file:** `windows/process_creation/proc_creation_win_lolbin_susp_grpconv.yml`
