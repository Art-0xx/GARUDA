---
type: detection_rule
title: "Suspicious Executable File Creation"
rule_id: 74babdd6-a758-4549-9632-26535279e654
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1564]
---

# Suspicious Executable File Creation

## Description
Detect creation of suspicious executable file names.
Some strings look for suspicious file extensions, others look for filenames that exploit unquoted service paths.

## Log Source
```yaml
category: file_event
product: windows
```

## Detection Logic
```yaml
condition: selection
selection:
  TargetFilename|endswith:
  - :\$Recycle.Bin.exe
  - :\Documents and Settings.exe
  - :\MSOCache.exe
  - :\PerfLogs.exe
  - :\Recovery.exe
  - .bat.exe
  - .sys.exe
```

## MITRE ATT&CK
- T1564

## False Positives
- Unknown

## References
- https://medium.com/@SumitVerma101/windows-privilege-escalation-part-1-unquoted-service-path-c7a011a8d8ae
- https://app.any.run/tasks/76c69e2d-01e8-49d9-9aea-fb7cc0c4d3ad/

## Metadata
- **Author:** frack113
- **Date:** 2022-09-05
- **Rule ID:** `74babdd6-a758-4549-9632-26535279e654`
- **Source file:** `windows/file/file_event/file_event_win_susp_executable_creation.yml`
