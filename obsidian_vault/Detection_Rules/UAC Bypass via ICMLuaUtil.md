---
type: detection_rule
title: "UAC Bypass via ICMLuaUtil"
rule_id: 49f2f17b-b4c8-4172-a68b-d5bf95d05130
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1548.002]
---

# UAC Bypass via ICMLuaUtil

## Description
Detects the pattern of UAC Bypass using ICMLuaUtil Elevated COM interface

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: selection and not filter
filter:
- Image|endswith: \WerFault.exe
- OriginalFileName: WerFault.exe
selection:
  ParentCommandLine|contains:
  - /Processid:{3E5FC7F9-9A51-4367-9063-A120244FBEC7}
  - /Processid:{D2E7041B-2927-42FB-8E9F-7CE93B6DC937}
  ParentImage|endswith: \dllhost.exe
```

## MITRE ATT&CK
- T1548.002

## False Positives
- Unknown

## References
- https://www.elastic.co/guide/en/security/current/uac-bypass-via-icmluautil-elevated-com-interface.html

## Metadata
- **Author:** Florian Roth (Nextron Systems), Elastic (idea)
- **Date:** 2022-09-13
- **Rule ID:** `49f2f17b-b4c8-4172-a68b-d5bf95d05130`
- **Source file:** `windows/process_creation/proc_creation_win_uac_bypass_icmluautil.yml`
