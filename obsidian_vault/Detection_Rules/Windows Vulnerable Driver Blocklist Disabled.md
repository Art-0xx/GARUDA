---
type: detection_rule
title: "Windows Vulnerable Driver Blocklist Disabled"
rule_id: d526c60a-e236-4011-b165-831ffa52ab70
platform: windows
level: high
status: experimental
tags: [detection, sigma, windows]
mitre_tags: [attack.t1685]
---

# Windows Vulnerable Driver Blocklist Disabled

## Description
Detects when the Windows Vulnerable Driver Blocklist is set to disabled. This setting is crucial for preventing the loading of known vulnerable drivers,
and its modification may indicate an attempt to bypass security controls. It is often targeted by threat actors to facilitate the installation of malicious or vulnerable drivers,
particularly in scenarios involving Endpoint Detection and Response (EDR) bypass techniques.
This rule applies to systems that support the Vulnerable Driver Blocklist feature, including Windows 10 version 1903 and later, and Windows Server 2022 and later.
Note that this change will require a reboot to take effect, and this rule only detects the registry modification action.

## Log Source
```yaml
category: registry_set
product: windows
```

## Detection Logic
```yaml
condition: selection
selection:
  Details: DWORD (0x00000000)
  TargetObject|endswith: \Control\CI\Config\VulnerableDriverBlocklistEnable
```

## MITRE ATT&CK
- T1685

## False Positives
- Unlikely and should be investigated immediately.

## References
- https://docs.microsoft.com/en-us/windows/security/threat-protection/windows-defender-application-control/microsoft-recommended-driver-block-rules
- https://www.sophos.com/en-us/blog/sharpening-the-knife-gold-blades-strategic-evolution
- https://learn.microsoft.com/en-us/windows/security/application-security/application-control/app-control-for-business/design/microsoft-recommended-driver-block-rules

## Metadata
- **Author:** Swachchhanda Shrawan Poudel (Nextron Systems)
- **Date:** 2026-01-26
- **Rule ID:** `d526c60a-e236-4011-b165-831ffa52ab70`
- **Source file:** `windows/registry/registry_set/registry_set_vulnerable_driver_blocklist_disable.yml`
