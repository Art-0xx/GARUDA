---
type: detection_rule
title: "Service Binary in Suspicious Folder"
rule_id: a07f0359-4c90-4dc4-a681-8ffea40b4f47
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1112]
---

# Service Binary in Suspicious Folder

## Description
Detect the creation of a service with a service binary located in a suspicious directory

## Log Source
```yaml
category: registry_set
product: windows
```

## Detection Logic
```yaml
condition: 1 of selection_* and not 1 of filter_optional_*
filter_optional_avast:
  Image|contains|all:
  - \Common Files\
  - \Temp\
filter_optional_mbamservice:
  Details|endswith: \AppData\Local\Temp\MBAMInstallerService.exe"
  Image: C:\Windows\system32\services.exe
  TargetObject|endswith: \CurrentControlSet\Services\MBAMInstallerService\ImagePath
selection_service_imagepath:
  Details|contains:
  - \Users\Public\
  - \Perflogs\
  - \ADMIN$\
  - \Temp\
  TargetObject|endswith: \ImagePath
  TargetObject|startswith: HKLM\System\CurrentControlSet\Services\
selection_service_start:
  Details:
  - DWORD (0x00000000)
  - DWORD (0x00000001)
  - DWORD (0x00000002)
  Image|contains:
  - \Users\Public\
  - \Perflogs\
  - \ADMIN$\
  - \Temp\
  TargetObject|endswith: \Start
  TargetObject|startswith: HKLM\System\CurrentControlSet\Services\
```

## MITRE ATT&CK
- T1112

## False Positives
- Unknown

## References
- https://github.com/redcanaryco/atomic-red-team/blob/f339e7da7d05f6057fdfcdd3742bfcf365fee2a9/atomics/T1562.001/T1562.001.md

## Metadata
- **Author:** Florian Roth (Nextron Systems), frack113
- **Date:** 2022-05-02
- **Rule ID:** `a07f0359-4c90-4dc4-a681-8ffea40b4f47`
- **Source file:** `windows/registry/registry_set/registry_set_creation_service_susp_folder.yml`
