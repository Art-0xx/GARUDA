---
type: detection_rule
title: "Explorer NOUACCHECK Flag"
rule_id: 534f2ef7-e8a2-4433-816d-c91bccde289b
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1548.002]
---

# Explorer NOUACCHECK Flag

## Description
Detects suspicious starts of explorer.exe that use the /NOUACCHECK flag that allows to run all sub processes of that newly started explorer.exe without any UAC checks

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: selection and not 1 of filter_*
filter_dc_logon:
- ParentCommandLine: C:\Windows\system32\svchost.exe -k netsvcs -p -s Schedule
- ParentImage: C:\Windows\System32\svchost.exe
selection:
  CommandLine|contains: /NOUACCHECK
  Image|endswith: \explorer.exe
```

## MITRE ATT&CK
- T1548.002

## False Positives
- Domain Controller User Logon
- Unknown how many legitimate software products use that method

## References
- https://twitter.com/ORCA6665/status/1496478087244095491

## Metadata
- **Author:** Florian Roth (Nextron Systems)
- **Date:** 2022-02-23
- **Rule ID:** `534f2ef7-e8a2-4433-816d-c91bccde289b`
- **Source file:** `windows/process_creation/proc_creation_win_explorer_nouaccheck.yml`
