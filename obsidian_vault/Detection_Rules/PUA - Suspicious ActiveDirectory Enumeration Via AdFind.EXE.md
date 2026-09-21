---
type: detection_rule
title: "PUA - Suspicious ActiveDirectory Enumeration Via AdFind.EXE"
rule_id: 455b9d50-15a1-4b99-853f-8d37655a4c1b
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1087.002]
---

# PUA - Suspicious ActiveDirectory Enumeration Via AdFind.EXE

## Description
Detects active directory enumeration activity using known AdFind CLI flags

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: 1 of selection_*
selection_enum_ad:
  CommandLine|contains: -sc admincountdmp
selection_enum_exchange:
  CommandLine|contains: -sc exchaddresses
selection_password:
  CommandLine|contains:
  - lockoutduration
  - lockoutthreshold
  - lockoutobservationwindow
  - maxpwdage
  - minpwdage
  - minpwdlength
  - pwdhistorylength
  - pwdproperties
```

## MITRE ATT&CK
- T1087.002

## False Positives
- Authorized administrative activity

## References
- https://www.joeware.net/freetools/tools/adfind/
- https://social.technet.microsoft.com/wiki/contents/articles/7535.adfind-command-examples.aspx
- https://github.com/redcanaryco/atomic-red-team/blob/f339e7da7d05f6057fdfcdd3742bfcf365fee2a9/atomics/T1087.002/T1087.002.md

## Metadata
- **Author:** frack113
- **Date:** 2021-12-13
- **Rule ID:** `455b9d50-15a1-4b99-853f-8d37655a4c1b`
- **Source file:** `windows/process_creation/proc_creation_win_pua_adfind_enumeration.yml`
