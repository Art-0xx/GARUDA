---
type: detection_rule
title: "Vulnerable Driver Blocklist Registry Tampering Via CommandLine"
rule_id: 22154f0e-5132-4a54-aa78-cc62f6def531
platform: windows
level: high
status: experimental
tags: [detection, sigma, windows]
mitre_tags: [attack.t1685]
---

# Vulnerable Driver Blocklist Registry Tampering Via CommandLine

## Description
Detects tampering of the Vulnerable Driver Blocklist registry via command line tools such as PowerShell or REG.EXE.
The Vulnerable Driver Blocklist is a security feature that helps prevent the loading of known vulnerable drivers.
Disabling this feature may indicate an attempt to bypass security controls, often targeted by threat actors
to facilitate the installation of malicious or vulnerable drivers, particularly in scenarios involving Endpoint Detection and Response

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: all of selection_*
selection_cli_1:
  CommandLine|contains:
  - 'add '
  - 'New-ItemProperty '
  - 'Set-ItemProperty '
  - 'si '
selection_cli_2:
  CommandLine|contains|all:
  - \Control\CI\Config
  - VulnerableDriverBlocklistEnable
selection_img:
- Image|endswith:
  - \powershell.exe
  - \pwsh.exe
  - \reg.exe
- OriginalFileName:
  - PowerShell.EXE
  - pwsh.dll
  - reg.exe
```

## MITRE ATT&CK
- T1685

## False Positives
- It is very unlikely for legitimate activities to disable the Vulnerable Driver Blocklist via command line tools; thus it is recommended to investigate promptly.

## References
- https://www.sophos.com/en-us/blog/sharpening-the-knife-gold-blades-strategic-evolution
- https://learn.microsoft.com/en-us/windows/security/application-security/application-control/app-control-for-business/design/microsoft-recommended-driver-block-rules

## Metadata
- **Author:** Swachchhanda Shrawan Poudel (Nextron Systems)
- **Date:** 2026-01-26
- **Rule ID:** `22154f0e-5132-4a54-aa78-cc62f6def531`
- **Source file:** `windows/process_creation/proc_creation_win_vulnerable_driver_blocklist_registry_tampering.yml`
