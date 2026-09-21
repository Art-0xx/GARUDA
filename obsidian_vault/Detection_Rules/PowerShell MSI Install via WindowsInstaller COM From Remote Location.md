---
type: detection_rule
title: "PowerShell MSI Install via WindowsInstaller COM From Remote Location"
rule_id: 222720a7-047f-4054-baa5-bab9be757db0
platform: windows
level: medium
status: experimental
tags: [detection, sigma, windows]
mitre_tags: [attack.t1059.001, attack.t1218, attack.t1105]
---

# PowerShell MSI Install via WindowsInstaller COM From Remote Location

## Description
Detects the execution of PowerShell commands that attempt to install MSI packages via the
Windows Installer COM object (`WindowsInstaller.Installer`) hosted remotely.
This could be indication of malicious software deployment or lateral movement attempts using Windows Installer functionality.
And the usage of WindowsInstaller COM object rather than msiexec could be an attempt to bypass the detection.

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: all of selection_* and not 1 of filter_main_*
filter_main_localhost:
  CommandLine|contains:
  - ://127.0.0.1
  - ://localhost
selection_cli:
  CommandLine|contains|all:
  - -ComObject
  - InstallProduct(
selection_img:
- Image|endswith:
  - \powershell_ise.exe
  - \powershell.exe
  - \pwsh.exe
- OriginalFileName:
  - PowerShell_ISE.EXE
  - PowerShell.EXE
  - pwsh.dll
selection_remote:
  CommandLine|contains:
  - http
  - \\\\
```

## MITRE ATT&CK
- T1059.001
- T1218
- T1105

## False Positives
- Unknown

## References
- https://informationsecuritybuzz.com/the-real-danger-behind-a-simple-windows-shortcut/
- https://redcanary.com/blog/threat-intelligence/intelligence-insights-may-2025/
- https://www.virustotal.com/gui/file/f9710b0ba4de5fa0e7ec27da462d4d2fc6838eba83a19f23f6617a466bbad457

## Metadata
- **Author:** Meroujan Antonyan (vx3r)
- **Date:** 2025-06-05
- **Rule ID:** `222720a7-047f-4054-baa5-bab9be757db0`
- **Source file:** `windows/process_creation/proc_creation_win_powershell_comobject_msi_remote.yml`
