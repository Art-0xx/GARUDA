---
type: detection_rule
title: "Windows AMSI Related Registry Tampering Via CommandLine"
rule_id: 7dbbcac2-57a0-45ac-b306-ff30a8bd2981
platform: windows
level: high
status: experimental
tags: [detection, sigma, windows]
mitre_tags: [attack.t1685]
---

# Windows AMSI Related Registry Tampering Via CommandLine

## Description
Detects tampering of AMSI (Anti-Malware Scan Interface) related registry values via command line tools such as reg.exe or PowerShell.
AMSI provides a generic interface for applications and services to integrate with antimalware products.
Adversaries may disable AMSI to evade detection of malicious scripts and code execution.

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: selection_key and (all of selection_powershell_* or all of selection_reg_*)
selection_key:
  CommandLine|contains|all:
  - \Software\Microsoft\Windows Script\Settings
  - AmsiEnable
selection_powershell_cmd:
  CommandLine|contains:
  - Set-ItemProperty
  - New-ItemProperty
  - 'sp '
selection_powershell_img:
- Image|endswith:
  - \powershell.exe
  - \pwsh.exe
- OriginalFileName:
  - PowerShell.EXE
  - pwsh.dll
selection_reg_cmd:
  CommandLine|contains: add
selection_reg_img:
- Image|endswith: \reg.exe
- OriginalFileName: reg.exe
```

## MITRE ATT&CK
- T1685

## False Positives
- Unknown

## References
- https://github.com/arttoolkit/arttoolkit.github.io/blob/16d6230d009e58fd6f773f5317fd4d14c1f26004/_wadcoms/AMSI-Bypass-Jscript_amsienable.md
- https://mostafayahiax.medium.com/hunting-for-amsi-bypassing-methods-9886dda0bf9d
- https://www.mdsec.co.uk/2019/02/macros-and-more-with-sharpshooter-v2-0/

## Metadata
- **Author:** Swachchhanda Shrawan Poudel (Nextron Systems)
- **Date:** 2025-12-25
- **Rule ID:** `7dbbcac2-57a0-45ac-b306-ff30a8bd2981`
- **Source file:** `windows/process_creation/proc_creation_win_amsi_registry_tampering.yml`
