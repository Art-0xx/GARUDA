---
type: detection_rule
title: "Suspicious Kernel Dump Using Dtrace"
rule_id: 7124aebe-4cd7-4ccb-8df0-6d6b93c96795
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1082]
---

# Suspicious Kernel Dump Using Dtrace

## Description
Detects suspicious way to dump the kernel on Windows systems using dtrace.exe, which is available on Windows systems since Windows 10 19H1

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: 1 of selection*
selection_obfuscated:
  CommandLine|contains|all:
  - syscall:::return
  - lkd(
selection_plain:
  CommandLine|contains: lkd(0)
  Image|endswith: \dtrace.exe
```

## MITRE ATT&CK
- T1082

## False Positives
- Unknown

## References
- https://twitter.com/0gtweet/status/1474899714290208777?s=12
- https://learn.microsoft.com/en-us/windows-hardware/drivers/devtest/dtrace

## Metadata
- **Author:** Florian Roth (Nextron Systems)
- **Date:** 2021-12-28
- **Rule ID:** `7124aebe-4cd7-4ccb-8df0-6d6b93c96795`
- **Source file:** `windows/process_creation/proc_creation_win_dtrace_kernel_dump.yml`
