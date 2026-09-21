---
type: detection_rule
title: "UAC Bypass via Windows Firewall Snap-In Hijack"
rule_id: e52cb31c-10ed-4aea-bcb7-593c9f4a315b
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1548]
---

# UAC Bypass via Windows Firewall Snap-In Hijack

## Description
Detects attempts to bypass User Account Control (UAC) by hijacking the Microsoft Management Console (MMC) Windows Firewall snap-in

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: selection and not filter
filter:
  Image|endswith: \WerFault.exe
selection:
  ParentCommandLine|contains: WF.msc
  ParentImage|endswith: \mmc.exe
```

## MITRE ATT&CK
- T1548

## False Positives
- Unknown

## References
- https://www.elastic.co/guide/en/security/current/uac-bypass-via-windows-firewall-snap-in-hijack.html#uac-bypass-via-windows-firewall-snap-in-hijack

## Metadata
- **Author:** Tim Rauch, Elastic (idea)
- **Date:** 2022-09-27
- **Rule ID:** `e52cb31c-10ed-4aea-bcb7-593c9f4a315b`
- **Source file:** `windows/process_creation/proc_creation_win_uac_bypass_hijacking_firwall_snap_in.yml`
