---
type: detection_rule
title: "Root Certificate Installed - PowerShell"
rule_id: 42821614-9264-4761-acfc-5772c3286f76
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1553.004]
---

# Root Certificate Installed - PowerShell

## Description
Adversaries may install a root certificate on a compromised system to avoid warnings when connecting to adversary controlled web servers.

## Log Source
```yaml
category: ps_script
definition: 'Requirements: Script Block Logging must be enabled'
product: windows
```

## Detection Logic
```yaml
condition: 1 of selection*
selection1:
  ScriptBlockText|contains|all:
  - Move-Item
  - Cert:\LocalMachine\Root
selection2:
  ScriptBlockText|contains|all:
  - Import-Certificate
  - Cert:\LocalMachine\Root
```

## MITRE ATT&CK
- T1553.004

## False Positives
- Help Desk or IT may need to manually add a corporate Root CA on occasion. Need to test if GPO push doesn't trigger FP

## References
- https://github.com/redcanaryco/atomic-red-team/blob/f339e7da7d05f6057fdfcdd3742bfcf365fee2a9/atomics/T1553.004/T1553.004.md

## Metadata
- **Author:** oscd.community, @redcanary, Zach Stanford @svch0st
- **Date:** 2020-10-10
- **Rule ID:** `42821614-9264-4761-acfc-5772c3286f76`
- **Source file:** `windows/powershell/powershell_script/posh_ps_root_certificate_installed.yml`
