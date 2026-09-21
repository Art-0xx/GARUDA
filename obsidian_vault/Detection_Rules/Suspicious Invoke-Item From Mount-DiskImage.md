---
type: detection_rule
title: "Suspicious Invoke-Item From Mount-DiskImage"
rule_id: 902cedee-0398-4e3a-8183-6f3a89773a96
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1553.005]
---

# Suspicious Invoke-Item From Mount-DiskImage

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
  - Get-Volume
  - .DriveLetter
  - 'invoke-item '
  - ):\
```

## MITRE ATT&CK
- T1553.005

## False Positives
- Legitimate PowerShell scripts

## References
- https://github.com/redcanaryco/atomic-red-team/blob/f339e7da7d05f6057fdfcdd3742bfcf365fee2a9/atomics/T1553.005/T1553.005.md#atomic-test-2---mount-an-iso-image-and-run-executable-from-the-iso
- https://learn.microsoft.com/en-us/powershell/module/storage/mount-diskimage?view=windowsserver2022-ps

## Metadata
- **Author:** frack113
- **Date:** 2022-02-01
- **Rule ID:** `902cedee-0398-4e3a-8183-6f3a89773a96`
- **Source file:** `windows/powershell/powershell_script/posh_ps_run_from_mount_diskimage.yml`
