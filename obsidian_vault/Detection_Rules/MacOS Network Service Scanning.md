---
type: detection_rule
title: "MacOS Network Service Scanning"
rule_id: 84bae5d4-b518-4ae0-b331-6d4afd34d00f
platform: macos
level: low
status: test
tags: [detection, sigma, macos]
mitre_tags: [attack.t1046]
---

# MacOS Network Service Scanning

## Description
Detects enumeration of local or remote network services.

## Log Source
```yaml
category: process_creation
product: macos
```

## Detection Logic
```yaml
condition: (selection_1 and not filter) or selection_2
filter:
  CommandLine|contains: l
selection_1:
  Image|endswith:
  - /nc
  - /netcat
selection_2:
  Image|endswith:
  - /nmap
  - /telnet
```

## MITRE ATT&CK
- T1046

## False Positives
- Legitimate administration activities

## References
- https://github.com/redcanaryco/atomic-red-team/blob/f339e7da7d05f6057fdfcdd3742bfcf365fee2a9/atomics/T1046/T1046.md

## Metadata
- **Author:** Alejandro Ortuno, oscd.community
- **Date:** 2020-10-21
- **Rule ID:** `84bae5d4-b518-4ae0-b331-6d4afd34d00f`
- **Source file:** `macos/process_creation/proc_creation_macos_network_service_scanning.yml`
