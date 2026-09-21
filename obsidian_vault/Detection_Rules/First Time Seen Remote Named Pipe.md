---
type: detection_rule
title: "First Time Seen Remote Named Pipe"
rule_id: 52d8b0c6-53d6-439a-9e41-52ad442ad9ad
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1021.002]
---

# First Time Seen Remote Named Pipe

## Description
This detection excludes known namped pipes accessible remotely and notify on newly observed ones, may help to detect lateral movement and remote exec using named pipes

## Log Source
```yaml
definition: The advanced audit policy setting "Object Access > Audit Detailed File
  Share" must be configured for Success/Failure
product: windows
service: security
```

## Detection Logic
```yaml
condition: selection1 and not false_positives
false_positives:
  RelativeTargetName:
  - atsvc
  - samr
  - lsarpc
  - lsass
  - winreg
  - netlogon
  - srvsvc
  - protected_storage
  - wkssvc
  - browser
  - netdfs
  - svcctl
  - spoolss
  - ntsvcs
  - LSM_API_service
  - HydraLsPipe
  - TermSrv_API_service
  - MsFteWds
  - sql\query
  - eventlog
selection1:
  EventID: 5145
  ShareName: \\\\\*\\IPC$
```

## MITRE ATT&CK
- T1021.002

## False Positives
- Update the excluded named pipe to filter out any newly observed legit named pipe

## References
- https://twitter.com/menasec1/status/1104489274387451904

## Metadata
- **Author:** Samir Bousseaden
- **Date:** 2019-04-03
- **Rule ID:** `52d8b0c6-53d6-439a-9e41-52ad442ad9ad`
- **Source file:** `windows/builtin/security/win_security_lm_namedpipe.yml`
