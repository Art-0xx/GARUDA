---
type: detection_rule
title: "Suspicious Autorun Registry Modified via WMI"
rule_id: c80e66d8-1780-48a9-b412-46663fd21ac0
platform: windows
level: high
status: experimental
tags: [detection, sigma, windows]
mitre_tags: [attack.t1547.001, attack.t1047]
---

# Suspicious Autorun Registry Modified via WMI

## Description
Detects suspicious activity where the WMIC process is used to create an autorun registry entry via reg.exe, which is often indicative of persistence mechanisms employed by malware.

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: all of selection_execution_* and (selection_suspicious_paths_1 or (all
  of selection_suspicious_paths_user_*))
selection_execution_cmd:
  CommandLine|contains:
  - \Software\Microsoft\Windows\CurrentVersion\Run
  - \Software\WOW6432Node\Microsoft\Windows\CurrentVersion\Run
  - \Software\Microsoft\Windows\CurrentVersion\Policies\Explorer\Run
  CommandLine|contains|all:
  - reg
  - ' add '
selection_execution_img:
- Image|endswith: \wmic.exe
- OriginalFileName: wmic.exe
- ParentImage|endswith: \wmiprvse.exe
selection_suspicious_paths_1:
  CommandLine|contains:
  - :\Perflogs
  - :\ProgramData'
  - :\Windows\Temp
  - :\Temp
  - \AppData\Local\Temp
  - \AppData\Roaming
  - :\$Recycle.bin
  - :\Users\Default
  - :\Users\public
  - '%temp%'
  - '%tmp%'
  - '%Public%'
  - '%AppData%'
selection_suspicious_paths_user_1:
  CommandLine|contains: :\Users\
selection_suspicious_paths_user_2:
  CommandLine|contains:
  - \Favorites
  - \Favourites
  - \Contacts
  - \Music
  - \Pictures
  - \Documents
  - \Photos
```

## MITRE ATT&CK
- T1547.001
- T1047

## False Positives
- Legitimate administrative activity or software installations

## References
- Internal Research
- https://github.com/HackTricks-wiki/hacktricks/blob/e4c7b21b8f36c97c35b7c622732b38a189ce18f7/src/windows-hardening/windows-local-privilege-escalation/privilege-escalation-with-autorun-binaries.md

## Metadata
- **Author:** Swachchhanda Shrawan Poudel (Nextron Systems)
- **Date:** 2025-02-17
- **Rule ID:** `c80e66d8-1780-48a9-b412-46663fd21ac0`
- **Source file:** `windows/process_creation/proc_creation_win_autorun_registry_modified_via_wmic.yml`
