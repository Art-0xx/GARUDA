---
type: detection_rule
title: "Macro Enabled In A Potentially Suspicious Document"
rule_id: a166f74e-bf44-409d-b9ba-ea4b2dd8b3cd
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1112]
---

# Macro Enabled In A Potentially Suspicious Document

## Description
Detects registry changes to Office trust records where the path is located in a potentially suspicious location

## Log Source
```yaml
category: registry_set
product: windows
```

## Detection Logic
```yaml
condition: all of selection_*
selection_paths:
  TargetObject|contains:
  - /AppData/Local/Microsoft/Windows/INetCache/
  - /AppData/Local/Temp/
  - /PerfLogs/
  - C:/Users/Public/
  - file:///D:/
  - file:///E:/
selection_value:
  TargetObject|contains: \Security\Trusted Documents\TrustRecords
```

## MITRE ATT&CK
- T1112

## False Positives
- Unlikely

## References
- https://twitter.com/inversecos/status/1494174785621819397
- Internal Research

## Metadata
- **Author:** Nasreddine Bencherchali (Nextron Systems)
- **Date:** 2023-06-21
- **Rule ID:** `a166f74e-bf44-409d-b9ba-ea4b2dd8b3cd`
- **Source file:** `windows/registry/registry_set/registry_set_office_trust_record_susp_location.yml`
