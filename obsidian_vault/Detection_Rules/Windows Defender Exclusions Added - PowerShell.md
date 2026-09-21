---
type: detection_rule
title: "Windows Defender Exclusions Added - PowerShell"
rule_id: c1344fa2-323b-4d2e-9176-84b4d4821c88
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1685, attack.t1059]
---

# Windows Defender Exclusions Added - PowerShell

## Description
Detects modifications to the Windows Defender configuration settings using PowerShell to add exclusions

## Log Source
```yaml
category: ps_script
definition: 'Requirements: Script Block Logging must be enabled'
product: windows
```

## Detection Logic
```yaml
condition: all of selection*
selection_args_exc:
  ScriptBlockText|contains:
  - ' -ExclusionPath '
  - ' -ExclusionExtension '
  - ' -ExclusionProcess '
  - ' -ExclusionIpAddress '
selection_args_pref:
  ScriptBlockText|contains:
  - 'Add-MpPreference '
  - 'Set-MpPreference '
```

## MITRE ATT&CK
- T1685
- T1059

## False Positives
- Unknown

## References
- https://www.elastic.co/guide/en/security/current/windows-defender-exclusions-added-via-powershell.html

## Metadata
- **Author:** Tim Rauch, Elastic (idea)
- **Date:** 2022-09-16
- **Rule ID:** `c1344fa2-323b-4d2e-9176-84b4d4821c88`
- **Source file:** `windows/powershell/powershell_script/posh_ps_win_defender_exclusions_added.yml`
