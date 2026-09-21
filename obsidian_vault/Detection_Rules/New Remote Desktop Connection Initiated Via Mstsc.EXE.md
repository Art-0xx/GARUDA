---
type: detection_rule
title: "New Remote Desktop Connection Initiated Via Mstsc.EXE"
rule_id: 954f0af7-62dd-418f-b3df-a84bc2c7a774
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1021.001]
---

# New Remote Desktop Connection Initiated Via Mstsc.EXE

## Description
Detects the usage of "mstsc.exe" with the "/v" flag to initiate a connection to a remote server.
Adversaries may use valid accounts to log into a computer using the Remote Desktop Protocol (RDP). The adversary may then perform actions as the logged-on user.

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: all of selection_* and not 1 of filter_optional_*
filter_optional_wsl:
  CommandLine|contains: C:\ProgramData\Microsoft\WSL\wslg.rdp
  ParentImage: C:\Windows\System32\lxss\wslhost.exe
selection_cli:
  CommandLine|contains|windash: ' /v:'
selection_img:
- Image|endswith: \mstsc.exe
- OriginalFileName: mstsc.exe
```

## MITRE ATT&CK
- T1021.001

## False Positives
- WSL (Windows Sub System For Linux)

## References
- https://github.com/redcanaryco/atomic-red-team/blob/f339e7da7d05f6057fdfcdd3742bfcf365fee2a9/atomics/T1021.001/T1021.001.md#t1021001---remote-desktop-protocol
- https://learn.microsoft.com/en-us/windows-server/administration/windows-commands/mstsc

## Metadata
- **Author:** frack113
- **Date:** 2022-01-07
- **Rule ID:** `954f0af7-62dd-418f-b3df-a84bc2c7a774`
- **Source file:** `windows/process_creation/proc_creation_win_mstsc_remote_connection.yml`
