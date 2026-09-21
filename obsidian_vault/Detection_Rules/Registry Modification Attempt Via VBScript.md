---
type: detection_rule
title: "Registry Modification Attempt Via VBScript"
rule_id: 921aa10f-2e74-4cca-9498-98f9ca4d6fdf
platform: windows
level: medium
status: experimental
tags: [detection, sigma, windows]
mitre_tags: [attack.t1112, attack.t1059.005]
---

# Registry Modification Attempt Via VBScript

## Description
Detects attempts to modify the registry using VBScript's CreateObject("Wscript.shell") and RegWrite methods via common LOLBINs.
It could be an attempt to modify the registry for persistence without using straightforward methods like regedit.exe, reg.exe, or PowerShell.
Threat Actors may use this technique to evade detection by security solutions that monitor for direct registry modifications through traditional tools.

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: selection
selection:
  CommandLine|contains|all:
  - CreateObject
  - Wscript.shell
  - .RegWrite
```

## MITRE ATT&CK
- T1112
- T1059.005

## False Positives
- Unknown

## References
- https://www.linkedin.com/posts/mauricefielenbach_livingofftheland-redteam-persistence-activity-7344801774182051843-TE00/
- https://www.nextron-systems.com/2025/07/29/detecting-the-most-popular-mitre-persistence-method-registry-run-keys-startup-folder/

## Metadata
- **Author:** Swachchhanda Shrawan Poudel (Nextron Systems)
- **Date:** 2025-08-13
- **Rule ID:** `921aa10f-2e74-4cca-9498-98f9ca4d6fdf`
- **Source file:** `windows/process_creation/proc_creation_win_vbscript_registry_modification.yml`
