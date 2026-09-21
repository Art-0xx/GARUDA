---
type: detection_rule
title: "Credential Dumping Attempt Via Svchost"
rule_id: 174afcfa-6e40-4ae9-af64-496546389294
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1548]
---

# Credential Dumping Attempt Via Svchost

## Description
Detects when a process tries to access the memory of svchost to potentially dump credentials.

## Log Source
```yaml
category: process_access
product: windows
```

## Detection Logic
```yaml
condition: selection and not 1 of filter_main_*
filter_main_known_processes:
  SourceImage|endswith:
  - \services.exe
  - \msiexec.exe
selection:
  GrantedAccess: '0x143a'
  TargetImage|endswith: \svchost.exe
```

## MITRE ATT&CK
- T1548

## False Positives
- Unknown

## References
- Internal Research

## Metadata
- **Author:** Florent Labouyrie
- **Date:** 2021-04-30
- **Rule ID:** `174afcfa-6e40-4ae9-af64-496546389294`
- **Source file:** `windows/process_access/proc_access_win_svchost_credential_dumping.yml`
