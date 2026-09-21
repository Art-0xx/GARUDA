---
type: detection_rule
title: "Windows Network Access Suspicious desktop.ini Action"
rule_id: 35bc7e28-ee6b-492f-ab04-da58fcf6402e
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1547.009]
---

# Windows Network Access Suspicious desktop.ini Action

## Description
Detects unusual processes accessing desktop.ini remotely over network share, which can be leveraged to alter how Explorer displays a folder's content (i.e. renaming files) without changing them on disk.

## Log Source
```yaml
product: windows
service: security
```

## Detection Logic
```yaml
condition: selection
selection:
  AccessList|contains:
  - WriteData
  - DELETE
  - WriteDAC
  - AppendData
  - AddSubdirectory
  EventID: 5145
  ObjectType: File
  RelativeTargetName|endswith: \desktop.ini
```

## MITRE ATT&CK
- T1547.009

## False Positives
- Read only access list authority

## References
- https://isc.sans.edu/forums/diary/Desktopini+as+a+postexploitation+tool/25912/

## Metadata
- **Author:** Tim Shelton (HAWK.IO)
- **Date:** 2021-12-06
- **Rule ID:** `35bc7e28-ee6b-492f-ab04-da58fcf6402e`
- **Source file:** `windows/builtin/security/win_security_net_share_obj_susp_desktop_ini.yml`
