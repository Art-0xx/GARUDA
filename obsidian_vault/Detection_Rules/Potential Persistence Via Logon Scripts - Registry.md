---
type: detection_rule
title: "Potential Persistence Via Logon Scripts - Registry"
rule_id: 9ace0707-b560-49b8-b6ca-5148b42f39fb
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1037.001]
---

# Potential Persistence Via Logon Scripts - Registry

## Description
Detects creation of "UserInitMprLogonScript" registry value which can be used as a persistence method by malicious actors

## Log Source
```yaml
category: registry_set
product: windows
```

## Detection Logic
```yaml
condition: selection
selection:
  TargetObject|contains: UserInitMprLogonScript
```

## MITRE ATT&CK
- T1037.001

## False Positives
- Investigate the contents of the "UserInitMprLogonScript" value to determine of the added script is legitimate

## References
- https://github.com/redcanaryco/atomic-red-team/blob/f339e7da7d05f6057fdfcdd3742bfcf365fee2a9/atomics/T1037.001/T1037.001.md

## Metadata
- **Author:** Tom Ueltschi (@c_APT_ure)
- **Date:** 2019-01-12
- **Rule ID:** `9ace0707-b560-49b8-b6ca-5148b42f39fb`
- **Source file:** `windows/registry/registry_set/registry_set_persistence_logon_scripts_userinitmprlogonscript.yml`
