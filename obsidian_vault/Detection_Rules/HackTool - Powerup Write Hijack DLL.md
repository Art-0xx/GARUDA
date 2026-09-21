---
type: detection_rule
title: "HackTool - Powerup Write Hijack DLL"
rule_id: 602a1f13-c640-4d73-b053-be9a2fa58b96
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1574.001]
---

# HackTool - Powerup Write Hijack DLL

## Description
Powerup tool's Write Hijack DLL exploits DLL hijacking for privilege escalation.
In it's default mode, it builds a self deleting .bat file which executes malicious command.
The detection rule relies on creation of the malicious bat file (debug.bat by default).

## Log Source
```yaml
category: file_event
product: windows
```

## Detection Logic
```yaml
condition: selection
selection:
  Image|endswith:
  - \powershell.exe
  - \pwsh.exe
  TargetFilename|endswith: .bat
```

## MITRE ATT&CK
- T1574.001

## False Positives
- Any powershell script that creates bat files

## References
- https://powersploit.readthedocs.io/en/latest/Privesc/Write-HijackDll/

## Metadata
- **Author:** Subhash Popuri (@pbssubhash)
- **Date:** 2021-08-21
- **Rule ID:** `602a1f13-c640-4d73-b053-be9a2fa58b96`
- **Source file:** `windows/file/file_event/file_event_win_hktl_powerup_dllhijacking.yml`
