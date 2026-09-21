---
type: detection_rule
title: "Esentutl Volume Shadow Copy Service Keys"
rule_id: 5aad0995-46ab-41bd-a9ff-724f41114971
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1003.002]
---

# Esentutl Volume Shadow Copy Service Keys

## Description
Detects the volume shadow copy service initialization and processing via esentutl. Registry keys such as HKLM\\System\\CurrentControlSet\\Services\\VSS\\Diag\\VolSnap\\Volume are captured.

## Log Source
```yaml
category: registry_event
product: windows
```

## Detection Logic
```yaml
condition: selection and not filter
filter:
  TargetObject|contains: System\CurrentControlSet\Services\VSS\Start
selection:
  Image|endswith: esentutl.exe
  TargetObject|contains: System\CurrentControlSet\Services\VSS
```

## MITRE ATT&CK
- T1003.002

## False Positives
- Unknown

## References
- https://github.com/redcanaryco/atomic-red-team/blob/f339e7da7d05f6057fdfcdd3742bfcf365fee2a9/atomics/T1003.002/T1003.002.md#atomic-test-3---esentutlexe-sam-copy

## Metadata
- **Author:** Roberto Rodriguez (Cyb3rWard0g), OTR (Open Threat Research)
- **Date:** 2020-10-20
- **Rule ID:** `5aad0995-46ab-41bd-a9ff-724f41114971`
- **Source file:** `windows/registry/registry_event/registry_event_esentutl_volume_shadow_copy_service_keys.yml`
