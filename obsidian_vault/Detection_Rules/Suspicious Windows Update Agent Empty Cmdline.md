---
type: detection_rule
title: "Suspicious Windows Update Agent Empty Cmdline"
rule_id: 52d097e2-063e-4c9c-8fbb-855c8948d135
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1036]
---

# Suspicious Windows Update Agent Empty Cmdline

## Description
Detects suspicious Windows Update Agent activity in which a wuauclt.exe process command line doesn't contain any command line flags

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: all of selection*
selection_cli:
  CommandLine|endswith:
  - Wuauclt
  - Wuauclt.exe
selection_img:
- Image|endswith: \Wuauclt.exe
- OriginalFileName: Wuauclt.exe
```

## MITRE ATT&CK
- T1036

## False Positives
- Unknown

## References
- https://redcanary.com/blog/blackbyte-ransomware/

## Metadata
- **Author:** Florian Roth (Nextron Systems)
- **Date:** 2022-02-26
- **Rule ID:** `52d097e2-063e-4c9c-8fbb-855c8948d135`
- **Source file:** `windows/process_creation/proc_creation_win_wuauclt_no_cli_flags_execution.yml`
