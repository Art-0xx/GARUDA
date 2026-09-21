---
type: detection_rule
title: "Obfuscated PowerShell MSI Install via WindowsInstaller COM"
rule_id: 7b6a7418-3afc-11f0-aff4-000d3abf478c
platform: windows
level: high
status: experimental
tags: [detection, sigma, windows]
mitre_tags: [attack.t1027.010, attack.t1218.007, attack.t1059.001]
---

# Obfuscated PowerShell MSI Install via WindowsInstaller COM

## Description
Detects the execution of obfuscated PowerShell commands that attempt to install MSI packages via the Windows Installer COM object (`WindowsInstaller.Installer`).
The technique involves manipulating strings to hide functionality, such as constructing class names using string insertion (e.g., 'indowsInstaller.Installer'.Insert(0,'W')) and correcting
malformed URLs (e.g., converting 'htps://' to 'https://') at runtime. This behavior is commonly associated with malware loaders or droppers that aim to bypass static detection
by hiding intent in runtime-generated strings and using legitimate tools for code execution. The use of `InstallProduct` and COM object creation, particularly combined with
hidden window execution and suppressed UI, indicates an attempt to install software (likely malicious) without user interaction.

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: all of selection_*
selection_cli:
  CommandLine|contains|all:
  - -ComObject
  - InstallProduct(
  - .Insert(
  - UILevel
selection_img:
- Image|endswith:
  - \powershell_ise.exe
  - \powershell.exe
  - \pwsh.exe
- OriginalFileName:
  - PowerShell_ISE.EXE
  - PowerShell.EXE
  - pwsh.dll
```

## MITRE ATT&CK
- T1027.010
- T1218.007
- T1059.001

## False Positives
- Unknown

## References
- https://informationsecuritybuzz.com/the-real-danger-behind-a-simple-windows-shortcut/
- https://redcanary.com/blog/threat-intelligence/intelligence-insights-may-2025/
- https://www.virustotal.com/gui/file/f9710b0ba4de5fa0e7ec27da462d4d2fc6838eba83a19f23f6617a466bbad457

## Metadata
- **Author:** Meroujan Antonyan (vx3r)
- **Date:** 2025-05-27
- **Rule ID:** `7b6a7418-3afc-11f0-aff4-000d3abf478c`
- **Source file:** `windows/process_creation/proc_creation_win_powershell_comobject_msi.yml`
