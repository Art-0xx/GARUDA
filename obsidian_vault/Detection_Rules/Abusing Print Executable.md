---
type: detection_rule
title: "Abusing Print Executable"
rule_id: bafac3d6-7de9-4dd9-8874-4a1194b493ed
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1218]
---

# Abusing Print Executable

## Description
Attackers can use print.exe for remote file copy

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: selection and not filter_print
filter_print:
  CommandLine|contains: print.exe
selection:
  CommandLine|contains|all:
  - /D
  - .exe
  CommandLine|startswith: print
  Image|endswith: \print.exe
```

## MITRE ATT&CK
- T1218

## False Positives
- Unknown

## References
- https://lolbas-project.github.io/lolbas/Binaries/Print/
- https://twitter.com/Oddvarmoe/status/985518877076541440

## Metadata
- **Author:** Furkan CALISKAN, @caliskanfurkan_, @oscd_initiative
- **Date:** 2020-10-05
- **Rule ID:** `bafac3d6-7de9-4dd9-8874-4a1194b493ed`
- **Source file:** `windows/process_creation/proc_creation_win_print_remote_file_copy.yml`
