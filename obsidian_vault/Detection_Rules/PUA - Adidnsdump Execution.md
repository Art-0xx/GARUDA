---
type: detection_rule
title: "PUA - Adidnsdump Execution"
rule_id: 26d3f0a2-f514-4a3f-a8a7-e7e48a8d9160
platform: windows
level: low
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1018]
---

# PUA - Adidnsdump Execution

## Description
This tool enables enumeration and exporting of all DNS records in the zone for recon purposes of internal networks Python 3 and python.exe must be installed,
Usee to Query/modify DNS records for Active Directory integrated DNS via LDAP

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: selection
selection:
  CommandLine|contains: adidnsdump
  Image|endswith: \python.exe
```

## MITRE ATT&CK
- T1018

## False Positives
- Unknown

## References
- https://github.com/redcanaryco/atomic-red-team/blob/f339e7da7d05f6057fdfcdd3742bfcf365fee2a9/atomics/T1018/T1018.md#atomic-test-9---remote-system-discovery---adidnsdump

## Metadata
- **Author:** frack113
- **Date:** 2022-01-01
- **Rule ID:** `26d3f0a2-f514-4a3f-a8a7-e7e48a8d9160`
- **Source file:** `windows/process_creation/proc_creation_win_python_adidnsdump.yml`
