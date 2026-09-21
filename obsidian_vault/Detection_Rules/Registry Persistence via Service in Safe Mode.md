---
type: detection_rule
title: "Registry Persistence via Service in Safe Mode"
rule_id: 1547e27c-3974-43e2-a7d7-7f484fb928ec
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1564.001]
---

# Registry Persistence via Service in Safe Mode

## Description
Detects the modification of the registry to allow a driver or service to persist in Safe Mode.

## Log Source
```yaml
category: registry_set
product: windows
```

## Detection Logic
```yaml
condition: selection and not 1 of filter_optional_*
filter_optional_hexnode:
  Details: Service
  Image: C:\Hexnode\Hexnode Agent\Current\HexnodeAgent.exe
  TargetObject|endswith:
  - \Control\SafeBoot\Minimal\Hexnode Updater\(Default)
  - \Control\SafeBoot\Network\Hexnode Updater\(Default)
  - \Control\SafeBoot\Minimal\Hexnode Agent\(Default)
  - \Control\SafeBoot\Network\Hexnode Agent\(Default)
filter_optional_mbamservice:
  Details: Service
  Image|endswith: \MBAMInstallerService.exe
  TargetObject|endswith: \MBAMService\(Default)
filter_optional_sophos:
  Image: C:\WINDOWS\system32\msiexec.exe
  TargetObject|endswith:
  - \Control\SafeBoot\Minimal\SAVService\(Default)
  - \Control\SafeBoot\Network\SAVService\(Default)
selection:
  Details: Service
  TargetObject|contains:
  - \Control\SafeBoot\Minimal\
  - \Control\SafeBoot\Network\
  TargetObject|endswith: \(Default)
```

## MITRE ATT&CK
- T1564.001

## False Positives
- Unknown

## References
- https://github.com/redcanaryco/atomic-red-team/blob/f339e7da7d05f6057fdfcdd3742bfcf365fee2a9/atomics/T1112/T1112.md#atomic-test-33---windows-add-registry-value-to-load-service-in-safe-mode-without-network
- https://github.com/redcanaryco/atomic-red-team/blob/f339e7da7d05f6057fdfcdd3742bfcf365fee2a9/atomics/T1112/T1112.md#atomic-test-34---windows-add-registry-value-to-load-service-in-safe-mode-with-network

## Metadata
- **Author:** frack113
- **Date:** 2022-04-04
- **Rule ID:** `1547e27c-3974-43e2-a7d7-7f484fb928ec`
- **Source file:** `windows/registry/registry_set/registry_set_add_load_service_in_safe_mode.yml`
