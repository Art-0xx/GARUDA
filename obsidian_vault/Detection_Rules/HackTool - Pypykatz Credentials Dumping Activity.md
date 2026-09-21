---
type: detection_rule
title: "HackTool - Pypykatz Credentials Dumping Activity"
rule_id: a29808fd-ef50-49ff-9c7a-59a9b040b404
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1003.002]
---

# HackTool - Pypykatz Credentials Dumping Activity

## Description
Detects the usage of "pypykatz" to obtain stored credentials. Adversaries may attempt to extract credential material from the Security Account Manager (SAM) database through Windows registry where the SAM database is stored

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: selection
selection:
  CommandLine|contains|all:
  - live
  - registry
  Image|endswith:
  - \pypykatz.exe
  - \python.exe
```

## MITRE ATT&CK
- T1003.002

## False Positives
- Unknown

## References
- https://github.com/skelsec/pypykatz
- https://github.com/redcanaryco/atomic-red-team/blob/f339e7da7d05f6057fdfcdd3742bfcf365fee2a9/atomics/T1003.002/T1003.002.md#atomic-test-2---registry-parse-with-pypykatz

## Metadata
- **Author:** frack113
- **Date:** 2022-01-05
- **Rule ID:** `a29808fd-ef50-49ff-9c7a-59a9b040b404`
- **Source file:** `windows/process_creation/proc_creation_win_hktl_pypykatz.yml`
