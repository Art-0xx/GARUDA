---
type: detection_rule
title: "Unusual Parent Process For Cmd.EXE"
rule_id: 4b991083-3d0e-44ce-8fc4-b254025d8d4b
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1059]
---

# Unusual Parent Process For Cmd.EXE

## Description
Detects suspicious parent process for cmd.exe

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: selection
selection:
  Image|endswith: \cmd.exe
  ParentImage|endswith:
  - \csrss.exe
  - \ctfmon.exe
  - \dllhost.exe
  - \epad.exe
  - \FlashPlayerUpdateService.exe
  - \GoogleUpdate.exe
  - \jucheck.exe
  - \jusched.exe
  - \LogonUI.exe
  - \lsass.exe
  - \regsvr32.exe
  - \SearchIndexer.exe
  - \SearchProtocolHost.exe
  - \SIHClient.exe
  - \sihost.exe
  - \slui.exe
  - \spoolsv.exe
  - \sppsvc.exe
  - \taskhostw.exe
  - \unsecapp.exe
  - \WerFault.exe
  - \wermgr.exe
  - \wlanext.exe
  - \WUDFHost.exe
```

## MITRE ATT&CK
- T1059

## False Positives
- Unknown

## References
- https://www.elastic.co/guide/en/security/current/unusual-parent-process-for-cmd.exe.html

## Metadata
- **Author:** Tim Rauch, Elastic (idea)
- **Date:** 2022-09-21
- **Rule ID:** `4b991083-3d0e-44ce-8fc4-b254025d8d4b`
- **Source file:** `windows/process_creation/proc_creation_win_cmd_unusual_parent.yml`
