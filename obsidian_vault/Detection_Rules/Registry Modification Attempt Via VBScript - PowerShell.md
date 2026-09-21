---
type: detection_rule
title: "Registry Modification Attempt Via VBScript - PowerShell"
rule_id: 2a0a169d-cc66-43ce-9ae2-6e678e54e46a
platform: windows
level: medium
status: experimental
tags: [detection, sigma, windows]
mitre_tags: [attack.t1112, attack.t1059.005]
---

# Registry Modification Attempt Via VBScript - PowerShell

## Description
Detects attempts to modify the registry using VBScript's CreateObject("Wscript.shell") and RegWrite methods embedded within PowerShell scripts or commands.
Threat actors commonly embed VBScript code within PowerShell to perform registry modifications, attempting to evade detection that monitors for direct registry access through traditional tools.
This technique can be used for persistence, defense evasion, and privilege escalation by modifying registry keys without using regedit.exe, reg.exe, or PowerShell's native registry cmdlets.

## Log Source
```yaml
category: ps_script
product: windows
```

## Detection Logic
```yaml
condition: selection
selection:
  ScriptBlockText|contains|all:
  - CreateObject
  - Wscript.shell
  - .RegWrite
```

## MITRE ATT&CK
- T1112
- T1059.005

## False Positives
- Some legitimate admin or install scripts may use these processes for registry modifications.

## References
- https://www.linkedin.com/posts/mauricefielenbach_livingofftheland-redteam-persistence-activity-7344801774182051843-TE00/
- https://www.nextron-systems.com/2025/07/29/detecting-the-most-popular-mitre-persistence-method-registry-run-keys-startup-folder/
- https://detect.fyi/hunting-fileless-malware-in-the-windows-registry-1339ccde00ad

## Metadata
- **Author:** Swachchhanda Shrawan Poudel (Nextron Systems)
- **Date:** 2025-08-13
- **Rule ID:** `2a0a169d-cc66-43ce-9ae2-6e678e54e46a`
- **Source file:** `windows/powershell/powershell_script/posh_ps_vbscript_registry_modification.yml`
