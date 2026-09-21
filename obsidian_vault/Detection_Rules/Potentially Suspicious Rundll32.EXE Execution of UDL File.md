---
type: detection_rule
title: "Potentially Suspicious Rundll32.EXE Execution of UDL File"
rule_id: 0ea52357-cd59-4340-9981-c46c7e900428
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1218.011, attack.t1071]
---

# Potentially Suspicious Rundll32.EXE Execution of UDL File

## Description
Detects the execution of rundll32.exe with the oledb32.dll library to open a UDL file.
Threat actors can abuse this technique as a phishing vector to capture authentication credentials or other sensitive data.

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: all of selection_*
selection_cli:
  CommandLine|contains|all:
  - oledb32.dll
  - ',OpenDSLFile '
  - \\Users\\*\\Downloads\\
  CommandLine|endswith: .udl
selection_img:
- Image|endswith: \rundll32.exe
- OriginalFileName: RUNDLL32.EXE
selection_parent:
  ParentImage|endswith: \explorer.exe
```

## MITRE ATT&CK
- T1218.011
- T1071

## False Positives
- UDL files serve as a convenient and flexible tool for managing and testing database connections in various development and administrative scenarios.

## References
- https://trustedsec.com/blog/oops-i-udld-it-again

## Metadata
- **Author:** @kostastsale
- **Date:** 2024-08-16
- **Rule ID:** `0ea52357-cd59-4340-9981-c46c7e900428`
- **Source file:** `windows/process_creation/proc_creation_win_rundll32_udl_exec.yml`
