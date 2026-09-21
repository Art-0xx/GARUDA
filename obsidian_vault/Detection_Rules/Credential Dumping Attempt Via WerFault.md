---
type: detection_rule
title: "Credential Dumping Attempt Via WerFault"
rule_id: e5b33f7d-eb93-48b6-9851-09e1e610b6d7
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1003.001]
---

# Credential Dumping Attempt Via WerFault

## Description
Detects process LSASS memory dump using Mimikatz, NanoDump, Invoke-Mimikatz, Procdump or Taskmgr based on the CallTrace pointing to ntdll.dll, dbghelp.dll or dbgcore.dll for win10, server2016 and up.

## Log Source
```yaml
category: process_access
product: windows
```

## Detection Logic
```yaml
condition: selection
selection:
  GrantedAccess: '0x1FFFFF'
  SourceImage|endswith: \WerFault.exe
  TargetImage|endswith: \lsass.exe
```

## MITRE ATT&CK
- T1003.001

## False Positives
- Actual failures in lsass.exe that trigger a crash dump (unlikely)
- Unknown cases in which WerFault accesses lsass.exe

## References
- https://github.com/helpsystems/nanodump/commit/578116faea3d278d53d70ea932e2bbfe42569507

## Metadata
- **Author:** Florian Roth (Nextron Systems)
- **Date:** 2012-06-27
- **Rule ID:** `e5b33f7d-eb93-48b6-9851-09e1e610b6d7`
- **Source file:** `windows/process_access/proc_access_win_lsass_werfault.yml`
