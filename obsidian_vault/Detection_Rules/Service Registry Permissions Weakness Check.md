---
type: detection_rule
title: "Service Registry Permissions Weakness Check"
rule_id: 95afc12e-3cbb-40c3-9340-84a032e596a3
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1574.011]
---

# Service Registry Permissions Weakness Check

## Description
Adversaries may execute their own malicious payloads by hijacking the Registry entries used by services.
Adversaries may use flaws in the permissions for registry to redirect from the originally specified executable to one that they control, in order to launch their own code at Service start.
Windows stores local service configuration information in the Registry under HKLM\SYSTEM\CurrentControlSet\Services

## Log Source
```yaml
category: ps_script
definition: 'Requirements: Script Block Logging must be enabled'
product: windows
```

## Detection Logic
```yaml
condition: selection
selection:
  ScriptBlockText|contains|all:
  - get-acl
  - REGISTRY::HKLM\SYSTEM\CurrentControlSet\Services\
```

## MITRE ATT&CK
- T1574.011

## False Positives
- Legitimate administrative script

## References
- https://github.com/redcanaryco/atomic-red-team/blob/f339e7da7d05f6057fdfcdd3742bfcf365fee2a9/atomics/T1574.011/T1574.011.md#atomic-test-1---service-registry-permissions-weakness
- https://learn.microsoft.com/en-us/powershell/module/microsoft.powershell.security/get-acl?view=powershell-7.4

## Metadata
- **Author:** frack113
- **Date:** 2021-12-30
- **Rule ID:** `95afc12e-3cbb-40c3-9340-84a032e596a3`
- **Source file:** `windows/powershell/powershell_script/posh_ps_get_acl_service.yml`
