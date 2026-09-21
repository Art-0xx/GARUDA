---
type: detection_rule
title: "HackTool - SharpWSUS/WSUSpendu Execution"
rule_id: b0ce780f-10bd-496d-9067-066d23dc3aa5
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1210]
---

# HackTool - SharpWSUS/WSUSpendu Execution

## Description
Detects the execution of SharpWSUS or WSUSpendu, utilities that allow for lateral movement through WSUS.
Windows Server Update Services (WSUS) is a critical component of Windows systems and is frequently configured in a way that allows an attacker to circumvent internal networking limitations.

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: all of selection_wsuspendu_* or all of selection_sharpwsus_*
selection_sharpwsus_commands:
  CommandLine|contains:
  - ' approve '
  - ' create '
  - ' check '
  - ' delete '
selection_sharpwsus_flags:
  CommandLine|contains:
  - ' /payload:'
  - ' /payload='
  - ' /updateid:'
  - ' /updateid='
selection_wsuspendu_inject:
  CommandLine|contains: ' -Inject '
selection_wsuspendu_payload:
  CommandLine|contains:
  - ' -PayloadArgs '
  - ' -PayloadFile '
```

## MITRE ATT&CK
- T1210

## False Positives
- Unknown

## References
- https://labs.nettitude.com/blog/introducing-sharpwsus/
- https://github.com/nettitude/SharpWSUS
- https://web.archive.org/web/20210512154016/https://github.com/AlsidOfficial/WSUSpendu/blob/master/WSUSpendu.ps1

## Metadata
- **Author:** @Kostastsale, Nasreddine Bencherchali (Nextron Systems)
- **Date:** 2022-10-07
- **Rule ID:** `b0ce780f-10bd-496d-9067-066d23dc3aa5`
- **Source file:** `windows/process_creation/proc_creation_win_hktl_sharpwsus_wsuspendu_execution.yml`
