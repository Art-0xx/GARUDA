---
type: detection_rule
title: "Suspicious Shim Database Patching Activity"
rule_id: bf344fea-d947-4ef4-9192-34d008315d3a
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1546.011]
---

# Suspicious Shim Database Patching Activity

## Description
Detects installation of new shim databases that try to patch sections of known processes for potential process injection or persistence.

## Log Source
```yaml
category: registry_set
product: windows
```

## Detection Logic
```yaml
condition: selection
selection:
  TargetObject|contains: \SOFTWARE\Microsoft\Windows NT\CurrentVersion\AppCompatFlags\Custom\
  TargetObject|endswith:
  - \csrss.exe
  - \dllhost.exe
  - \explorer.exe
  - \RuntimeBroker.exe
  - \services.exe
  - \sihost.exe
  - \svchost.exe
  - \taskhostw.exe
  - \winlogon.exe
  - \WmiPrvSe.exe
```

## MITRE ATT&CK
- T1546.011

## False Positives
- Unknown

## References
- https://www.trustwave.com/en-us/resources/blogs/spiderlabs-blog/pillowmint-fin7s-monkey-thief/
- https://www.fireeye.com/blog/threat-research/2017/05/fin7-shim-databases-persistence.html

## Metadata
- **Author:** Nasreddine Bencherchali (Nextron Systems)
- **Date:** 2023-08-01
- **Rule ID:** `bf344fea-d947-4ef4-9192-34d008315d3a`
- **Source file:** `windows/registry/registry_set/registry_set_persistence_shim_database_susp_application.yml`
