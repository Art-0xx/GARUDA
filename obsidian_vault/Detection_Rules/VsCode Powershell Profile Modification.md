---
type: detection_rule
title: "VsCode Powershell Profile Modification"
rule_id: 3a9fa2ec-30bc-4ebd-b49e-7c9cff225502
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1546.013]
---

# VsCode Powershell Profile Modification

## Description
Detects the creation or modification of a vscode related powershell profile which could indicate suspicious activity as the profile can be used as a mean of persistence

## Log Source
```yaml
category: file_event
product: windows
```

## Detection Logic
```yaml
condition: selection
selection:
  TargetFilename|endswith: \Microsoft.VSCode_profile.ps1
```

## MITRE ATT&CK
- T1546.013

## False Positives
- Legitimate use of the profile by developers or administrators

## References
- https://learn.microsoft.com/en-us/powershell/module/microsoft.powershell.core/about/about_profiles?view=powershell-7.2

## Metadata
- **Author:** Nasreddine Bencherchali (Nextron Systems)
- **Date:** 2022-08-24
- **Rule ID:** `3a9fa2ec-30bc-4ebd-b49e-7c9cff225502`
- **Source file:** `windows/file/file_event/file_event_win_susp_vscode_powershell_profile.yml`
