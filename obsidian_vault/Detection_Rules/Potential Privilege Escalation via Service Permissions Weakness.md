---
type: detection_rule
title: "Potential Privilege Escalation via Service Permissions Weakness"
rule_id: 0f9c21f1-6a73-4b0e-9809-cb562cb8d981
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1574.011]
---

# Potential Privilege Escalation via Service Permissions Weakness

## Description
Detect modification of services configuration (ImagePath, FailureCommand and ServiceDLL) in registry by processes with Medium integrity level

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: selection
selection:
  CommandLine|contains:
  - \ImagePath
  - \FailureCommand
  - \ServiceDll
  CommandLine|contains|all:
  - ControlSet
  - services
  IntegrityLevel:
  - Medium
  - S-1-16-8192
```

## MITRE ATT&CK
- T1574.011

## False Positives
- Unknown

## References
- https://speakerdeck.com/heirhabarov/hunting-for-privilege-escalation-in-windows-environment
- https://pentestlab.blog/2017/03/31/insecure-registry-permissions/

## Metadata
- **Author:** Teymur Kheirkhabarov
- **Date:** 2019-10-26
- **Rule ID:** `0f9c21f1-6a73-4b0e-9809-cb562cb8d981`
- **Source file:** `windows/process_creation/proc_creation_win_registry_privilege_escalation_via_service_key.yml`
