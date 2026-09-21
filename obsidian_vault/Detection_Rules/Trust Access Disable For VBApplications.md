---
type: detection_rule
title: "Trust Access Disable For VBApplications"
rule_id: 1a5c46e9-f32f-42f7-b2bc-6e9084db7fbf
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1112]
---

# Trust Access Disable For VBApplications

## Description
Detects registry changes to Microsoft Office "AccessVBOM" to a value of "1" which disables trust access for VBA on the victim machine and lets attackers execute malicious macros without any Microsoft Office warnings.

## Log Source
```yaml
category: registry_set
product: windows
```

## Detection Logic
```yaml
condition: selection
selection:
  Details: DWORD (0x00000001)
  TargetObject|endswith: \Security\AccessVBOM
```

## MITRE ATT&CK
- T1112

## False Positives
- Unlikely

## References
- https://twitter.com/inversecos/status/1494174785621819397
- https://www.mcafee.com/blogs/other-blogs/mcafee-labs/zloader-with-a-new-infection-technique/
- https://securelist.com/scarcruft-surveilling-north-korean-defectors-and-human-rights-activists/105074/

## Metadata
- **Author:** Trent Liffick (@tliffick), Nasreddine Bencherchali (Nextron Systems)
- **Date:** 2020-05-22
- **Rule ID:** `1a5c46e9-f32f-42f7-b2bc-6e9084db7fbf`
- **Source file:** `windows/registry/registry_set/registry_set_office_access_vbom_tamper.yml`
