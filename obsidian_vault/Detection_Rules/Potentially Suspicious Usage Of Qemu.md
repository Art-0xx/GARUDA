---
type: detection_rule
title: "Potentially Suspicious Usage Of Qemu"
rule_id: 5fc297ae-25b6-488a-8f25-cc12ac29b744
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1090, attack.t1572]
---

# Potentially Suspicious Usage Of Qemu

## Description
Detects potentially suspicious execution of the Qemu utility in a Windows environment.
Threat actors have leveraged this utility and this technique for achieving network access as reported by Kaspersky.

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: selection and not 1 of filter_main_*
filter_main_normal_usecase:
  CommandLine|contains:
  - ' -cdrom '
  - ' type=virt '
  - ' -blockdev '
selection:
  CommandLine|contains:
  - -m 1M
  - -m 2M
  - -m 3M
  CommandLine|contains|all:
  - restrict=off
  - '-netdev '
  - connect=
  - -nographic
```

## MITRE ATT&CK
- T1090
- T1572

## False Positives
- Unknown

## References
- https://securelist.com/network-tunneling-with-qemu/111803/
- https://www.qemu.org/docs/master/system/invocation.html#hxtool-5

## Metadata
- **Author:** Muhammad Faisal (@faisalusuf), Hunter Juhan (@threatHNTR)
- **Date:** 2024-06-03
- **Rule ID:** `5fc297ae-25b6-488a-8f25-cc12ac29b744`
- **Source file:** `windows/process_creation/proc_creation_win_qemu_suspicious_execution.yml`
