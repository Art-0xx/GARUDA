---
type: detection_rule
title: "Powershell Defender Exclusion"
rule_id: 17769c90-230e-488b-a463-e05c08e9d48f
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1685]
---

# Powershell Defender Exclusion

## Description
Detects requests to exclude files, folders or processes from Antivirus scanning using PowerShell cmdlets

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: all of selection*
selection1:
  CommandLine|contains:
  - 'Add-MpPreference '
  - 'Set-MpPreference '
selection2:
  CommandLine|contains:
  - ' -ExclusionPath '
  - ' -ExclusionExtension '
  - ' -ExclusionProcess '
  - ' -ExclusionIpAddress '
```

## MITRE ATT&CK
- T1685

## False Positives
- Possible Admin Activity
- Other Cmdlets that may use the same parameters

## References
- https://learn.microsoft.com/en-us/defender-endpoint/configure-process-opened-file-exclusions-microsoft-defender-antivirus
- https://github.com/redcanaryco/atomic-red-team/blob/f339e7da7d05f6057fdfcdd3742bfcf365fee2a9/atomics/T1562.001/T1562.001.md
- https://twitter.com/AdamTheAnalyst/status/1483497517119590403

## Metadata
- **Author:** Florian Roth (Nextron Systems)
- **Date:** 2021-04-29
- **Rule ID:** `17769c90-230e-488b-a463-e05c08e9d48f`
- **Source file:** `windows/process_creation/proc_creation_win_powershell_defender_exclusion.yml`
