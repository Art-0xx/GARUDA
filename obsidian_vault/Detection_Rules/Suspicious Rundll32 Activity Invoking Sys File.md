---
type: detection_rule
title: "Suspicious Rundll32 Activity Invoking Sys File"
rule_id: 731231b9-0b5d-4219-94dd-abb6959aa7ea
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1218.011]
---

# Suspicious Rundll32 Activity Invoking Sys File

## Description
Detects suspicious process related to rundll32 based on command line that includes a *.sys file as seen being used by UNC2452

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: all of selection*
selection1:
  CommandLine|contains: rundll32.exe
selection2:
  CommandLine|contains:
  - .sys,
  - '.sys '
```

## MITRE ATT&CK
- T1218.011

## False Positives
- Unknown

## References
- https://www.microsoft.com/security/blog/2021/03/04/goldmax-goldfinder-sibot-analyzing-nobelium-malware/

## Metadata
- **Author:** Florian Roth (Nextron Systems)
- **Date:** 2021-03-05
- **Rule ID:** `731231b9-0b5d-4219-94dd-abb6959aa7ea`
- **Source file:** `windows/process_creation/proc_creation_win_rundll32_sys.yml`
