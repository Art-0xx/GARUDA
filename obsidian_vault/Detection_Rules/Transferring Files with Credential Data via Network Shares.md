---
type: detection_rule
title: "Transferring Files with Credential Data via Network Shares"
rule_id: 910ab938-668b-401b-b08c-b596e80fdca5
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1003.002, attack.t1003.001, attack.t1003.003]
---

# Transferring Files with Credential Data via Network Shares

## Description
Transferring files with well-known filenames (sensitive files with credential data) using network shares

## Log Source
```yaml
product: windows
service: security
```

## Detection Logic
```yaml
condition: all of selection_*
selection_eid:
  EventID: 5145
selection_object:
- RelativeTargetName|contains:
  - \mimidrv
  - \lsass
  - \windows\minidump\
  - \hiberfil
  - \sqldmpr
- RelativeTargetName:
  - Windows\NTDS\ntds.dit
  - Windows\System32\config\SAM
  - Windows\System32\config\SECURITY
  - Windows\System32\config\SYSTEM
```

## MITRE ATT&CK
- T1003.002
- T1003.001
- T1003.003

## False Positives
- Transferring sensitive files for legitimate administration work by legitimate administrator

## References
- https://www.slideshare.net/heirhabarov/hunting-for-credentials-dumping-in-windows-environment

## Metadata
- **Author:** Teymur Kheirkhabarov, oscd.community
- **Date:** 2019-10-22
- **Rule ID:** `910ab938-668b-401b-b08c-b596e80fdca5`
- **Source file:** `windows/builtin/security/win_security_transf_files_with_cred_data_via_network_shares.yml`
