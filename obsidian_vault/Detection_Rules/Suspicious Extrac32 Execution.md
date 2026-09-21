---
type: detection_rule
title: "Suspicious Extrac32 Execution"
rule_id: aa8e035d-7be4-48d3-a944-102aec04400d
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1105]
---

# Suspicious Extrac32 Execution

## Description
Download or Copy file with Extrac32

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: all of selection_*
selection_archive:
  CommandLine|contains: .cab
selection_lolbas:
- CommandLine|contains: extrac32.exe
- Image|endswith: \extrac32.exe
- OriginalFileName: extrac32.exe
selection_options:
  CommandLine|contains:
  - /C
  - /Y
  - ' \\\\'
```

## MITRE ATT&CK
- T1105

## False Positives
- Unknown

## References
- https://lolbas-project.github.io/lolbas/Binaries/Extrac32/

## Metadata
- **Author:** frack113
- **Date:** 2021-11-26
- **Rule ID:** `aa8e035d-7be4-48d3-a944-102aec04400d`
- **Source file:** `windows/process_creation/proc_creation_win_lolbin_extrac32.yml`
