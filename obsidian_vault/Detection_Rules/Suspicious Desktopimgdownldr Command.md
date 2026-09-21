---
type: detection_rule
title: "Suspicious Desktopimgdownldr Command"
rule_id: bb58aa4a-b80b-415a-a2c0-2f65a4c81009
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1105]
---

# Suspicious Desktopimgdownldr Command

## Description
Detects a suspicious Microsoft desktopimgdownldr execution with parameters used to download files from the Internet

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: ( selection1 and not selection1_filter ) or selection_reg
selection1:
  CommandLine|contains: ' /lockscreenurl:'
selection1_filter:
  CommandLine|contains:
  - .jpg
  - .jpeg
  - .png
selection_reg:
  CommandLine|contains|all:
  - reg delete
  - \PersonalizationCSP
```

## MITRE ATT&CK
- T1105

## False Positives
- False positives depend on scripts and administrative tools used in the monitored environment

## References
- https://labs.sentinelone.com/living-off-windows-land-a-new-native-file-downldr/
- https://twitter.com/SBousseaden/status/1278977301745741825

## Metadata
- **Author:** Florian Roth (Nextron Systems)
- **Date:** 2020-07-03
- **Rule ID:** `bb58aa4a-b80b-415a-a2c0-2f65a4c81009`
- **Source file:** `windows/process_creation/proc_creation_win_desktopimgdownldr_susp_execution.yml`
