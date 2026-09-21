---
type: detection_rule
title: "Regedit as Trusted Installer"
rule_id: 883835a7-df45-43e4-bf1d-4268768afda4
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1548]
---

# Regedit as Trusted Installer

## Description
Detects a regedit started with TrustedInstaller privileges or by ProcessHacker.exe

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: selection
selection:
  Image|endswith: \regedit.exe
  ParentImage|endswith:
  - \TrustedInstaller.exe
  - \ProcessHacker.exe
```

## MITRE ATT&CK
- T1548

## False Positives
- Unlikely

## References
- https://twitter.com/1kwpeter/status/1397816101455765504

## Metadata
- **Author:** Florian Roth (Nextron Systems)
- **Date:** 2021-05-27
- **Rule ID:** `883835a7-df45-43e4-bf1d-4268768afda4`
- **Source file:** `windows/process_creation/proc_creation_win_regedit_trustedinstaller.yml`
