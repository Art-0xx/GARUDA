---
type: detection_rule
title: "Creation Of A Local User Account"
rule_id: 51719bf5-e4fd-4e44-8ba8-b830e7ac0731
platform: macos
level: low
status: test
tags: [detection, sigma, macos]
mitre_tags: [attack.t1136.001]
---

# Creation Of A Local User Account

## Description
Detects the creation of a new user account. Such accounts may be used for persistence that do not require persistent remote access tools to be deployed on the system.

## Log Source
```yaml
category: process_creation
product: macos
```

## Detection Logic
```yaml
condition: 1 of selection_*
selection_dscl:
  CommandLine|contains: create
  Image|endswith: /dscl
selection_sysadminctl:
  CommandLine|contains: addUser
  Image|endswith: /sysadminctl
```

## MITRE ATT&CK
- T1136.001

## False Positives
- Legitimate administration activities

## References
- https://github.com/redcanaryco/atomic-red-team/blob/f339e7da7d05f6057fdfcdd3742bfcf365fee2a9/atomics/T1136.001/T1136.001.md
- https://ss64.com/osx/sysadminctl.html

## Metadata
- **Author:** Alejandro Ortuno, oscd.community
- **Date:** 2020-10-06
- **Rule ID:** `51719bf5-e4fd-4e44-8ba8-b830e7ac0731`
- **Source file:** `macos/process_creation/proc_creation_macos_create_account.yml`
