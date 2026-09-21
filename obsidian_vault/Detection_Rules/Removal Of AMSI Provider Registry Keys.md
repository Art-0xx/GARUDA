---
type: detection_rule
title: "Removal Of AMSI Provider Registry Keys"
rule_id: 41d1058a-aea7-4952-9293-29eaaf516465
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1685]
---

# Removal Of AMSI Provider Registry Keys

## Description
Detects the deletion of AMSI provider registry key entries in HKLM\Software\Microsoft\AMSI. This technique could be used by an attacker in order to disable AMSI inspection.

## Log Source
```yaml
category: registry_delete
product: windows
```

## Detection Logic
```yaml
condition: selection and not 1 of filter_main_*
filter_main_defender:
  Image|endswith: \MsMpEng.exe
  Image|startswith:
  - C:\ProgramData\Microsoft\Windows Defender\Platform\
  - C:\Program Files\Windows Defender\
  - C:\Program Files (x86)\Windows Defender\
selection:
  TargetObject|endswith:
  - '{2781761E-28E0-4109-99FE-B9D127C57AFE}'
  - '{A7C452EF-8E9F-42EB-9F2B-245613CA0DC9}'
```

## MITRE ATT&CK
- T1685

## False Positives
- Unlikely

## References
- https://github.com/redcanaryco/atomic-red-team/blob/f339e7da7d05f6057fdfcdd3742bfcf365fee2a9/atomics/T1562.001/T1562.001.md
- https://seclists.org/fulldisclosure/2020/Mar/45

## Metadata
- **Author:** frack113
- **Date:** 2021-06-07
- **Rule ID:** `41d1058a-aea7-4952-9293-29eaaf516465`
- **Source file:** `windows/registry/registry_delete/registry_delete_removal_amsi_registry_key.yml`
