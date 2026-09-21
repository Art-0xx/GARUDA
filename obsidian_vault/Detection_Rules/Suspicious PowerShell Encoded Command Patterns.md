---
type: detection_rule
title: "Suspicious PowerShell Encoded Command Patterns"
rule_id: b9d9cc83-380b-4ba3-8d8f-60c0e7e2930c
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1059.001]
---

# Suspicious PowerShell Encoded Command Patterns

## Description
Detects PowerShell command line patterns in combincation with encoded commands that often appear in malware infection chains

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: all of selection_* and not 1 of filter_*
filter_gcworker:
  ParentImage|contains:
  - C:\Packages\Plugins\Microsoft.GuestConfiguration.ConfigurationforWindows\
  - \gc_worker.exe
selection_encoded:
  CommandLine|contains:
  - ' JAB'
  - ' SUVYI'
  - ' SQBFAFgA'
  - ' aWV4I'
  - ' IAB'
  - ' PAA'
  - ' aQBlAHgA'
selection_flags:
  CommandLine|contains:
  - ' -e '
  - ' -en '
  - ' -enc '
  - ' -enco'
selection_img:
- Image|endswith:
  - \powershell.exe
  - \pwsh.exe
- OriginalFileName:
  - PowerShell.Exe
  - pwsh.dll
```

## MITRE ATT&CK
- T1059.001

## False Positives
- Other tools that work with encoded scripts in the command line instead of script files

## References
- https://app.any.run/tasks/b9040c63-c140-479b-ad59-f1bb56ce7a97/

## Metadata
- **Author:** Florian Roth (Nextron Systems)
- **Date:** 2022-05-24
- **Rule ID:** `b9d9cc83-380b-4ba3-8d8f-60c0e7e2930c`
- **Source file:** `windows/process_creation/proc_creation_win_powershell_base64_encoded_cmd_patterns.yml`
