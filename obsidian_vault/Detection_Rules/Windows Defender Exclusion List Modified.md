---
type: detection_rule
title: "Windows Defender Exclusion List Modified"
rule_id: 46a68649-f218-4f86-aea1-16a759d81820
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1685]
---

# Windows Defender Exclusion List Modified

## Description
Detects modifications to the Windows Defender exclusion registry key. This could indicate a potentially suspicious or even malicious activity by an attacker trying to add a new exclusion in order to bypass security.

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
  EventID: 4657
  ObjectName|contains: \Microsoft\Windows Defender\Exclusions\
```

## MITRE ATT&CK
- T1685

## False Positives
- Intended exclusions by administrators

## References
- https://www.bleepingcomputer.com/news/security/gootkit-malware-bypasses-windows-defender-by-setting-path-exclusions/

## Metadata
- **Author:** @BarryShooshooga
- **Date:** 2019-10-26
- **Rule ID:** `46a68649-f218-4f86-aea1-16a759d81820`
- **Source file:** `windows/builtin/security/win_security_windows_defender_exclusions_registry_modified.yml`
