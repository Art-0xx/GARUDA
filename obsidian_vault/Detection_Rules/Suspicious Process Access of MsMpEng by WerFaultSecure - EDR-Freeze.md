---
type: detection_rule
title: "Suspicious Process Access of MsMpEng by WerFaultSecure - EDR-Freeze"
rule_id: 387df17d-3b04-448f-8669-9e7fd5e5fd8c
platform: windows
level: high
status: experimental
tags: [detection, sigma, windows]
mitre_tags: [attack.t1685]
---

# Suspicious Process Access of MsMpEng by WerFaultSecure - EDR-Freeze

## Description
Detects process access events where WerFaultSecure accesses MsMpEng.exe with dbgcore.dll or dbghelp.dll in the call trace, indicating potential EDR freeze techniques.
This technique leverages WerFaultSecure.exe running as a Protected Process Light (PPL) with WinTCB protection level to call MiniDumpWriteDump and suspend EDR/AV processes, allowing malicious activity to execute undetected during the suspension period.

## Log Source
```yaml
category: process_access
definition: "Requires Sysmon Event ID 10 (ProcessAccess) with CallTrace enabled.\n\
  Example sysmon config snippet with grouping, as logging individual ProcessAccess\
  \ events can generate excessive logs:\n<ProcessAccess onmatch=\"include\">\n   \
  \ <Rule groupRelation=\"and\">\n    <TargetImage condition=\"end with\">\\MsMpEng.exe</TargetImage>\n\
  \    <SourceImage condition=\"end with\">\\WerFaultSecure.exe</SourceImage>\n  \
  \  </Rule>\n</ProcessAccess>\n"
product: windows
```

## Detection Logic
```yaml
condition: selection
selection:
  CallTrace|contains:
  - \dbgcore.dll
  - \dbghelp.dll
  SourceImage|endswith: \WerFaultSecure.exe
  TargetImage|endswith: \MsMpEng.exe
```

## MITRE ATT&CK
- T1685

## False Positives
- Legitimate Windows Error Reporting operations

## References
- https://blog.axelarator.net/hunting-for-edr-freeze/

## Metadata
- **Author:** Swachchhanda Shrawan Poudel (Nextron Systems)
- **Date:** 2025-11-27
- **Rule ID:** `387df17d-3b04-448f-8669-9e7fd5e5fd8c`
- **Source file:** `windows/process_access/proc_access_win_werfaultsecure_msmpeng_access.yml`
