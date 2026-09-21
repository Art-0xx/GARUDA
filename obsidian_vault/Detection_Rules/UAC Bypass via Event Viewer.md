---
type: detection_rule
title: "UAC Bypass via Event Viewer"
rule_id: 7c81fec3-1c1d-43b0-996a-46753041b1b6
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1548.002]
---

# UAC Bypass via Event Viewer

## Description
Detects UAC bypass method using Windows event viewer

## Log Source
```yaml
category: registry_set
product: windows
```

## Detection Logic
```yaml
condition: selection
selection:
  TargetObject|endswith: \mscfile\shell\open\command
```

## MITRE ATT&CK
- T1548.002

## False Positives
- Unknown

## References
- https://enigma0x3.net/2016/08/15/fileless-uac-bypass-using-eventvwr-exe-and-registry-hijacking/
- https://www.hybrid-analysis.com/sample/e122bc8bf291f15cab182a5d2d27b8db1e7019e4e96bb5cdbd1dfe7446f3f51f?environmentId=100

## Metadata
- **Author:** Florian Roth (Nextron Systems)
- **Date:** 2017-03-19
- **Rule ID:** `7c81fec3-1c1d-43b0-996a-46753041b1b6`
- **Source file:** `windows/registry/registry_set/registry_set_uac_bypass_eventvwr.yml`
