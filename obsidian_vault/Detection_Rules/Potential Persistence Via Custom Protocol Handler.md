---
type: detection_rule
title: "Potential Persistence Via Custom Protocol Handler"
rule_id: fdbf0b9d-0182-4c43-893b-a1eaab92d085
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1112]
---

# Potential Persistence Via Custom Protocol Handler

## Description
Detects potential persistence activity via the registering of a new custom protocole handlers. While legitimate applications register protocole handlers often times during installation. And attacker can abuse this by setting a custom handler to be used as a persistence mechanism.

## Log Source
```yaml
category: registry_set
product: windows
```

## Detection Logic
```yaml
condition: selection and not 1 of filter_main_*
filter_main_generic_locations:
  Image|startswith:
  - C:\Program Files (x86)
  - C:\Program Files\
  - C:\Windows\System32\
  - C:\Windows\SysWOW64\
filter_main_ms_trusted:
  Details|startswith: URL:ms-
selection:
  Details|startswith: 'URL:'
  TargetObject|startswith: HKCR\
```

## MITRE ATT&CK
- T1112

## False Positives
- Many legitimate applications can register a new custom protocol handler. Additional filters needs to applied according to your environment.

## References
- https://ladydebug.com/blog/2019/06/21/custom-protocol-handler-cph/

## Metadata
- **Author:** Nasreddine Bencherchali (Nextron Systems)
- **Date:** 2022-05-30
- **Rule ID:** `fdbf0b9d-0182-4c43-893b-a1eaab92d085`
- **Source file:** `windows/registry/registry_set/registry_set_persistence_custom_protocol_handler.yml`
