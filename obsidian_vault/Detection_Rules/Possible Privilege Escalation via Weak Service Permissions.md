---
type: detection_rule
title: "Possible Privilege Escalation via Weak Service Permissions"
rule_id: d937b75f-a665-4480-88a5-2f20e9f9b22a
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1574.011]
---

# Possible Privilege Escalation via Weak Service Permissions

## Description
Detection of sc.exe utility spawning by user with Medium integrity level to change service ImagePath or FailureCommand

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: scbynonadmin and 1 of selection_*
scbynonadmin:
  Image|endswith: \sc.exe
  IntegrityLevel:
  - Medium
  - S-1-16-8192
selection_binpath:
  CommandLine|contains|all:
  - config
  - binPath
selection_failure:
  CommandLine|contains|all:
  - failure
  - command
```

## MITRE ATT&CK
- T1574.011

## False Positives
- Unknown

## References
- https://speakerdeck.com/heirhabarov/hunting-for-privilege-escalation-in-windows-environment
- https://pentestlab.blog/2017/03/30/weak-service-permissions/

## Metadata
- **Author:** Teymur Kheirkhabarov
- **Date:** 2019-10-26
- **Rule ID:** `d937b75f-a665-4480-88a5-2f20e9f9b22a`
- **Source file:** `windows/process_creation/proc_creation_win_sc_change_sevice_image_path_by_non_admin.yml`
