---
type: detection_rule
title: "Windows Defender Exclusion Registry Key - Write Access Requested"
rule_id: e9c8808f-4cfb-4ba9-97d4-e5f3beaa244d
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1685]
---

# Windows Defender Exclusion Registry Key - Write Access Requested

## Description
Detects write access requests to the Windows Defender exclusions registry keys. This could be an indication of an attacker trying to request a handle or access the object to write new exclusions in order to bypass security.

## Log Source
```yaml
definition: 'Requirements: Audit Policy : Security Settings/Local Policies/Audit Policy,
  Registry System Access Control (SACL): Auditing/User'
product: windows
service: security
```

## Detection Logic
```yaml
condition: selection
selection:
  AccessList|contains:
  - '%%4417'
  - '%%4418'
  EventID:
  - 4656
  - 4663
  ObjectName|contains: \Microsoft\Windows Defender\Exclusions\
```

## MITRE ATT&CK
- T1685

## False Positives
- Unknown

## References
- https://www.bleepingcomputer.com/news/security/gootkit-malware-bypasses-windows-defender-by-setting-path-exclusions/

## Metadata
- **Author:** @BarryShooshooga, Nasreddine Bencherchali (Nextron Systems)
- **Date:** 2019-10-26
- **Rule ID:** `e9c8808f-4cfb-4ba9-97d4-e5f3beaa244d`
- **Source file:** `windows/builtin/security/win_security_windows_defender_exclusions_write_access.yml`
