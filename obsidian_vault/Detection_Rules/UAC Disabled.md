---
type: detection_rule
title: "UAC Disabled"
rule_id: 48437c39-9e5f-47fb-af95-3d663c3f2919
platform: windows
level: medium
status: stable
tags: [detection, sigma, windows]
mitre_tags: [attack.t1548.002]
---

# UAC Disabled

## Description
Detects when an attacker tries to disable User Account Control (UAC) by setting the registry value "EnableLUA" to 0.

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
  TargetObject|contains: \Microsoft\Windows\CurrentVersion\Policies\System\EnableLUA
```

## MITRE ATT&CK
- T1548.002

## False Positives
- Unknown

## References
- https://github.com/redcanaryco/atomic-red-team/blob/7e11e9b79583545f208a6dc3fa062f2ed443d999/atomics/T1548.002/T1548.002.md

## Metadata
- **Author:** frack113
- **Date:** 2022-01-05
- **Rule ID:** `48437c39-9e5f-47fb-af95-3d663c3f2919`
- **Source file:** `windows/registry/registry_set/registry_set_uac_disable.yml`
