---
type: detection_rule
title: "Modify Group Policy Settings - ScriptBlockLogging"
rule_id: b7216a7d-687e-4c8d-82b1-3080b2ad961f
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1484.001]
---

# Modify Group Policy Settings - ScriptBlockLogging

## Description
Detect malicious GPO modifications can be used to implement many other malicious behaviors.

## Log Source
```yaml
category: ps_script
definition: 'Requirements: Script Block Logging must be enabled'
product: windows
```

## Detection Logic
```yaml
condition: all of selection_*
selection_key:
  ScriptBlockText|contains:
  - GroupPolicyRefreshTimeDC
  - GroupPolicyRefreshTimeOffsetDC
  - GroupPolicyRefreshTime
  - GroupPolicyRefreshTimeOffset
  - EnableSmartScreen
  - ShellSmartScreenLevel
selection_path:
  ScriptBlockText|contains: \SOFTWARE\Policies\Microsoft\Windows\System
```

## MITRE ATT&CK
- T1484.001

## False Positives
- Legitimate use

## References
- https://github.com/redcanaryco/atomic-red-team/blob/40b77d63808dd4f4eafb83949805636735a1fd15/atomics/T1484.001/T1484.001.md

## Metadata
- **Author:** frack113
- **Date:** 2022-08-19
- **Rule ID:** `b7216a7d-687e-4c8d-82b1-3080b2ad961f`
- **Source file:** `windows/powershell/powershell_script/posh_ps_modify_group_policy_settings.yml`
