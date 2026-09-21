---
type: detection_rule
title: "New Service Creation Using Sc.EXE"
rule_id: 85ff530b-261d-48c6-a441-facaa2e81e48
platform: windows
level: low
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1543.003]
---

# New Service Creation Using Sc.EXE

## Description
Detects the creation of a new service using the "sc.exe" utility.

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: selection and not 1 of filter_optional_*
filter_optional_dropbox:
  ParentImage|endswith: \Dropbox.exe
  ParentImage|startswith:
  - C:\Program Files (x86)\Dropbox\Client\
  - C:\Program Files\Dropbox\Client\
selection:
  CommandLine|contains|all:
  - create
  - binPath
  Image|endswith: \sc.exe
```

## MITRE ATT&CK
- T1543.003

## False Positives
- Legitimate administrator or user creates a service for legitimate reasons.
- Software installation

## References
- https://github.com/redcanaryco/atomic-red-team/blob/f339e7da7d05f6057fdfcdd3742bfcf365fee2a9/atomics/T1543.003/T1543.003.md

## Metadata
- **Author:** Timur Zinniatullin, Daniil Yugoslavskiy, oscd.community
- **Date:** 2023-02-20
- **Rule ID:** `85ff530b-261d-48c6-a441-facaa2e81e48`
- **Source file:** `windows/process_creation/proc_creation_win_sc_create_service.yml`
