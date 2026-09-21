---
type: detection_rule
title: "Suspicious Scan Loop Network"
rule_id: f8ad2e2c-40b6-4117-84d7-20b89896ab23
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1059, attack.t1018]
---

# Suspicious Scan Loop Network

## Description
Adversaries may attempt to get a listing of other systems by IP address, hostname, or other logical identifier on a network that may be used for Lateral Movement from the current system

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: all of selection_*
selection_loop:
  CommandLine|contains:
  - 'for '
  - 'foreach '
selection_tools:
  CommandLine|contains:
  - nslookup
  - ping
```

## MITRE ATT&CK
- T1059
- T1018

## False Positives
- Legitimate script

## References
- https://github.com/redcanaryco/atomic-red-team/blob/f339e7da7d05f6057fdfcdd3742bfcf365fee2a9/atomics/T1018/T1018.md
- https://ss64.com/nt/for.html
- https://ss64.com/ps/foreach-object.html

## Metadata
- **Author:** frack113
- **Date:** 2022-03-12
- **Rule ID:** `f8ad2e2c-40b6-4117-84d7-20b89896ab23`
- **Source file:** `windows/process_creation/proc_creation_win_susp_network_scan_loop.yml`
