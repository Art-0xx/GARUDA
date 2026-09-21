---
type: detection_rule
title: "Suspicious Use of PsLogList"
rule_id: aae1243f-d8af-40d8-ab20-33fc6d0c55bc
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1087, attack.t1087.001, attack.t1087.002]
---

# Suspicious Use of PsLogList

## Description
Detects usage of the PsLogList utility to dump event log in order to extract admin accounts and perform account discovery or delete events logs

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: all of selection_*
selection_cli_eventlog:
  CommandLine|contains:
  - ' security'
  - ' application'
  - ' system'
selection_cli_flags:
  CommandLine|contains|windash:
  - ' -d'
  - ' -x'
  - ' -s'
  - ' -c'
  - ' -g'
selection_img:
- OriginalFileName: psloglist.exe
- Image|endswith:
  - \psloglist.exe
  - \psloglist64.exe
  - \psloglist64a.exe
```

## MITRE ATT&CK
- T1087
- T1087.001
- T1087.002

## False Positives
- Another tool that uses the command line switches of PsLogList
- Legitimate use of PsLogList by an administrator

## References
- https://research.nccgroup.com/2021/01/12/abusing-cloud-services-to-fly-under-the-radar/
- https://www.cybereason.com/blog/deadringer-exposing-chinese-threat-actors-targeting-major-telcos
- https://github.com/3CORESec/MAL-CL/tree/master/Descriptors/Sysinternals/PsLogList
- https://twitter.com/EricaZelic/status/1614075109827874817

## Metadata
- **Author:** Nasreddine Bencherchali (Nextron Systems)
- **Date:** 2021-12-18
- **Rule ID:** `aae1243f-d8af-40d8-ab20-33fc6d0c55bc`
- **Source file:** `windows/process_creation/proc_creation_win_sysinternals_psloglist.yml`
