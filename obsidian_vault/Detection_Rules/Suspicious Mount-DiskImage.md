---
type: detection_rule
title: "Suspicious Mount-DiskImage"
rule_id: 29e1c216-6408-489d-8a06-ee9d151ef819
platform: windows
level: low
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1553.005]
---

# Suspicious Mount-DiskImage

## Description
Adversaries may abuse container files such as disk image (.iso, .vhd) file formats to deliver malicious payloads that may not be tagged with MOTW.

## Log Source
```yaml
category: ps_script
definition: 'Requirements: Script Block Logging must be enabled'
product: windows
```

## Detection Logic
```yaml
condition: selection
selection:
  ScriptBlockText|contains|all:
  - 'Mount-DiskImage '
  - '-ImagePath '
```

## MITRE ATT&CK
- T1553.005

## False Positives
- Legitimate PowerShell scripts

## References
- https://github.com/redcanaryco/atomic-red-team/blob/f339e7da7d05f6057fdfcdd3742bfcf365fee2a9/atomics/T1553.005/T1553.005.md#atomic-test-1---mount-iso-image
- https://learn.microsoft.com/en-us/powershell/module/storage/mount-diskimage?view=windowsserver2022-ps

## Metadata
- **Author:** frack113
- **Date:** 2022-02-01
- **Rule ID:** `29e1c216-6408-489d-8a06-ee9d151ef819`
- **Source file:** `windows/powershell/powershell_script/posh_ps_susp_mount_diskimage.yml`
