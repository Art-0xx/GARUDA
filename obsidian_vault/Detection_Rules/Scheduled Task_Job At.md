---
type: detection_rule
title: "Scheduled Task/Job At"
rule_id: d2d642d7-b393-43fe-bae4-e81ed5915c4b
platform: linux
level: low
status: stable
tags: [detection, sigma, linux]
mitre_tags: [attack.t1053.002]
---

# Scheduled Task/Job At

## Description
Detects the use of at/atd which are utilities that are used to schedule tasks.
They are often abused by adversaries to maintain persistence or to perform task scheduling for initial or recurring execution of malicious code

## Log Source
```yaml
category: process_creation
product: linux
```

## Detection Logic
```yaml
condition: selection
selection:
  Image|endswith:
  - /at
  - /atd
```

## MITRE ATT&CK
- T1053.002

## False Positives
- Legitimate administration activities

## References
- https://github.com/redcanaryco/atomic-red-team/blob/f339e7da7d05f6057fdfcdd3742bfcf365fee2a9/atomics/T1053.002/T1053.002.md

## Metadata
- **Author:** Ömer Günal, oscd.community
- **Date:** 2020-10-06
- **Rule ID:** `d2d642d7-b393-43fe-bae4-e81ed5915c4b`
- **Source file:** `linux/process_creation/proc_creation_lnx_at_command.yml`
