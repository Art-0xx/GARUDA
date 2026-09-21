---
type: detection_rule
title: "Modification of IE Registry Settings"
rule_id: d88d0ab2-e696-4d40-a2ed-9790064e66b3
platform: windows
level: low
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1112]
---

# Modification of IE Registry Settings

## Description
Detects modification of the registry settings used for Internet Explorer and other Windows components that use these settings. An attacker can abuse this registry key to add a domain to the trusted sites Zone or insert JavaScript for persistence

## Log Source
```yaml
category: registry_set
product: windows
```

## Detection Logic
```yaml
condition: selection_domains and not 1 of filter_main_* and not 1 of filter_optional_*
filter_main_binary:
  Details: Binary Data
filter_main_dword:
  Details|startswith: DWORD
filter_main_null:
  Details: null
filter_main_office:
  Details:
  - 'Cookie:'
  - 'Visited:'
  - (Empty)
filter_main_path:
  TargetObject|contains:
  - \Cache
  - \ZoneMap
  - \WpadDecision
filter_optional_accepted_documents:
  TargetObject|contains: \Software\Microsoft\Windows\CurrentVersion\Internet Settings\Accepted
    Documents
selection_domains:
  TargetObject|contains: \Software\Microsoft\Windows\CurrentVersion\Internet Settings
```

## MITRE ATT&CK
- T1112

## False Positives
- Unknown

## References
- https://github.com/redcanaryco/atomic-red-team/blob/f339e7da7d05f6057fdfcdd3742bfcf365fee2a9/atomics/T1112/T1112.md#atomic-test-4---add-domain-to-trusted-sites-zone
- https://github.com/redcanaryco/atomic-red-team/blob/f339e7da7d05f6057fdfcdd3742bfcf365fee2a9/atomics/T1112/T1112.md#atomic-test-5---javascript-in-registry

## Metadata
- **Author:** frack113
- **Date:** 2022-01-22
- **Rule ID:** `d88d0ab2-e696-4d40-a2ed-9790064e66b3`
- **Source file:** `windows/registry/registry_set/registry_set_persistence_ie.yml`
