---
type: detection_rule
title: "Raccine Uninstall"
rule_id: a31eeaed-3fd5-478e-a8ba-e62c6b3f9ecc
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1685]
---

# Raccine Uninstall

## Description
Detects commands that indicate a Raccine removal from an end system. Raccine is a free ransomware protection tool.

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: 1 of selection*
selection1:
  CommandLine|contains|all:
  - 'taskkill '
  - RaccineSettings.exe
selection2:
  CommandLine|contains|all:
  - reg.exe
  - delete
  - Raccine Tray
selection3:
  CommandLine|contains|all:
  - schtasks
  - /DELETE
  - Raccine Rules Updater
```

## MITRE ATT&CK
- T1685

## False Positives
- Legitimate deinstallation by administrative staff

## References
- https://github.com/Neo23x0/Raccine

## Metadata
- **Author:** Florian Roth (Nextron Systems)
- **Date:** 2021-01-21
- **Rule ID:** `a31eeaed-3fd5-478e-a8ba-e62c6b3f9ecc`
- **Source file:** `windows/process_creation/proc_creation_win_susp_disable_raccine.yml`
