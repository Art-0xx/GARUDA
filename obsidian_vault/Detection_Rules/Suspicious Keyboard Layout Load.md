---
type: detection_rule
title: "Suspicious Keyboard Layout Load"
rule_id: 34aa0252-6039-40ff-951f-939fd6ce47d8
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1588.002]
---

# Suspicious Keyboard Layout Load

## Description
Detects the keyboard preload installation with a suspicious keyboard layout, e.g. Chinese, Iranian or Vietnamese layout load in user session on systems maintained by US staff only

## Log Source
```yaml
category: registry_set
definition: 'Requirements: Sysmon config that monitors \Keyboard Layout\Preload subkey
  of the HKLU hives - see https://github.com/SwiftOnSecurity/sysmon-config/pull/92/files'
product: windows
```

## Detection Logic
```yaml
condition: selection_registry
selection_registry:
  Details|contains:
  - 00000429
  - 00050429
  - 0000042a
  TargetObject|contains:
  - \Keyboard Layout\Preload\
  - \Keyboard Layout\Substitutes\
```

## MITRE ATT&CK
- T1588.002

## False Positives
- Administrators or users that actually use the selected keyboard layouts (heavily depends on the organisation's user base)

## References
- https://renenyffenegger.ch/notes/Windows/registry/tree/HKEY_CURRENT_USER/Keyboard-Layout/Preload/index
- https://github.com/SwiftOnSecurity/sysmon-config/pull/92/files

## Metadata
- **Author:** Florian Roth (Nextron Systems)
- **Date:** 2019-10-12
- **Rule ID:** `34aa0252-6039-40ff-951f-939fd6ce47d8`
- **Source file:** `windows/registry/registry_set/registry_set_susp_keyboard_layout_load.yml`
