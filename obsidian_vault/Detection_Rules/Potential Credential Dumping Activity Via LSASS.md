---
type: detection_rule
title: "Potential Credential Dumping Activity Via LSASS"
rule_id: 5ef9853e-4d0e-4a70-846f-a9ca37d876da
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1003.001]
---

# Potential Credential Dumping Activity Via LSASS

## Description
Detects process access requests to the LSASS process with specific call trace calls and access masks.
This behaviour is expressed by many credential dumping tools such as Mimikatz, NanoDump, Invoke-Mimikatz, Procdump and even the Taskmgr dumping feature.

## Log Source
```yaml
category: process_access
product: windows
```

## Detection Logic
```yaml
condition: selection and not 1 of filter_main_* and not 1 of filter_optional_*
filter_main_system_user:
  SourceUser|contains:
  - AUTHORI
  - AUTORI
filter_optional_sysmon:
  SourceImage|endswith:
  - :\Windows\Sysmon64.exe
  - :\Windows\Sysmon64a.exe
filter_optional_thor:
  CallTrace|contains|all:
  - :\Windows\Temp\asgard2-agent\
  - \thor\thor64.exe+
  - '|UNKNOWN('
  GrantedAccess: '0x103800'
selection:
  CallTrace|contains:
  - dbgcore.dll
  - dbghelp.dll
  - kernel32.dll
  - kernelbase.dll
  - ntdll.dll
  GrantedAccess|contains:
  - '0x1038'
  - '0x1438'
  - '0x143a'
  - '0x1fffff'
  TargetImage|endswith: \lsass.exe
```

## MITRE ATT&CK
- T1003.001

## False Positives
- Unknown

## References
- https://web.archive.org/web/20230329170326/https://blog.menasec.net/2019/02/threat-hunting-21-procdump-or-taskmgr.html
- https://web.archive.org/web/20230208123920/https://cyberwardog.blogspot.com/2017/03/chronicles-of-threat-hunter-hunting-for_22.html
- https://github.com/redcanaryco/atomic-red-team/blob/f339e7da7d05f6057fdfcdd3742bfcf365fee2a9/atomics/T1003.001/T1003.001.md
- https://research.splunk.com/endpoint/windows_possible_credential_dumping/

## Metadata
- **Author:** Samir Bousseaden, Michael Haag
- **Date:** 2019-04-03
- **Rule ID:** `5ef9853e-4d0e-4a70-846f-a9ca37d876da`
- **Source file:** `windows/process_access/proc_access_win_lsass_memdump.yml`
