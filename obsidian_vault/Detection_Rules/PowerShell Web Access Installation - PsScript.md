---
type: detection_rule
title: "PowerShell Web Access Installation - PsScript"
rule_id: 5f9c7f1a-7c21-4c39-b2f3-8d8006e0e51f
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1059.001]
---

# PowerShell Web Access Installation - PsScript

## Description
Detects the installation and configuration of PowerShell Web Access, which could be used for remote access and potential abuse

## Log Source
```yaml
category: ps_script
definition: 'Requirements: Script Block Logging must be enabled'
product: windows
```

## Detection Logic
```yaml
condition: 1 of selection_*
selection_auth:
  ScriptBlockText|contains|all:
  - Add-PswaAuthorizationRule
  - -UserName *
  - -ComputerName *
selection_config:
  ScriptBlockText|contains: Install-PswaWebApplication
selection_install:
  ScriptBlockText|contains: Install-WindowsFeature WindowsPowerShellWebAccess
```

## MITRE ATT&CK
- T1059.001

## False Positives
- Legitimate PowerShell Web Access installations by administrators

## References
- https://docs.microsoft.com/en-us/powershell/module/powershellwebaccess/install-pswawebapplication
- https://www.cisa.gov/news-events/cybersecurity-advisories/aa24-241a
- https://gist.github.com/MHaggis/7e67b659af9148fa593cf2402edebb41

## Metadata
- **Author:** Michael Haag
- **Date:** 2024-09-03
- **Rule ID:** `5f9c7f1a-7c21-4c39-b2f3-8d8006e0e51f`
- **Source file:** `windows/powershell/powershell_script/posh_ps_powershell_web_access_installation.yml`
