---
type: detection_rule
title: "Add Windows Capability Via PowerShell Script"
rule_id: 155c7fd5-47b4-49b2-bbeb-eb4fab335429
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
---

# Add Windows Capability Via PowerShell Script

## Description
Detects usage of the "Add-WindowsCapability" cmdlet to add Windows capabilities. Notable capabilities could be "OpenSSH" and others.

## Log Source
```yaml
category: ps_script
definition: 'Requirements: Script Block Logging must be enabled'
product: windows
```

## Detection Logic
```yaml
condition: all of selection_*
selection_capa:
  ScriptBlockText|contains: -Name OpenSSH.
selection_cmdlet:
  ScriptBlockText|contains: 'Add-WindowsCapability '
```

## False Positives
- Legitimate usage of the capabilities by administrators or users. Add additional filters accordingly.

## References
- https://learn.microsoft.com/en-us/windows-server/administration/openssh/openssh_install_firstuse?tabs=powershell
- https://www.virustotal.com/gui/file/af1c82237b6e5a3a7cdbad82cc498d298c67845d92971bada450023d1335e267/content

## Metadata
- **Author:** Nasreddine Bencherchali (Nextron Systems)
- **Date:** 2023-01-22
- **Rule ID:** `155c7fd5-47b4-49b2-bbeb-eb4fab335429`
- **Source file:** `windows/powershell/powershell_script/posh_ps_add_windows_capability.yml`
