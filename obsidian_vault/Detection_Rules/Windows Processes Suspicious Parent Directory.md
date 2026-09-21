---
type: detection_rule
title: "Windows Processes Suspicious Parent Directory"
rule_id: 96036718-71cc-4027-a538-d1587e0006a7
platform: windows
level: low
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1036.003, attack.t1036.005]
---

# Windows Processes Suspicious Parent Directory

## Description
Detect suspicious parent processes of well-known Windows processes

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: selection and not 1 of filter_*
filter_msmpeng:
  ParentImage|contains:
  - \Windows Defender\
  - \Microsoft Security Client\
  ParentImage|endswith: \MsMpEng.exe
filter_null:
- ParentImage: null
- ParentImage:
  - ''
  - '-'
filter_sys:
- ParentImage|endswith:
  - \SavService.exe
  - \ngen.exe
- ParentImage|contains:
  - \System32\
  - \SysWOW64\
selection:
  Image|endswith:
  - \svchost.exe
  - \taskhost.exe
  - \lsm.exe
  - \lsass.exe
  - \services.exe
  - \lsaiso.exe
  - \csrss.exe
  - \wininit.exe
  - \winlogon.exe
```

## MITRE ATT&CK
- T1036.003
- T1036.005

## False Positives
- Some security products seem to spawn these

## References
- https://web.archive.org/web/20180718061628/https://securitybytes.io/blue-team-fundamentals-part-two-windows-processes-759fe15965e2
- https://www.carbonblack.com/2014/06/10/screenshot-demo-hunt-evil-faster-than-ever-with-carbon-black/
- https://www.13cubed.com/downloads/windows_process_genealogy_v2.pdf

## Metadata
- **Author:** vburov
- **Date:** 2019-02-23
- **Rule ID:** `96036718-71cc-4027-a538-d1587e0006a7`
- **Source file:** `windows/process_creation/proc_creation_win_susp_proc_wrong_parent.yml`
