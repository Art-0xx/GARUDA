---
type: detection_rule
title: "Suspicious GetTypeFromCLSID ShellExecute"
rule_id: 8bc063d5-3a3a-4f01-a140-bc15e55e8437
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1546.015]
---

# Suspicious GetTypeFromCLSID ShellExecute

## Description
Detects suspicious Powershell code that execute COM Objects

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
  - ::GetTypeFromCLSID(
  - .ShellExecute(
```

## MITRE ATT&CK
- T1546.015

## False Positives
- Legitimate PowerShell scripts

## References
- https://github.com/redcanaryco/atomic-red-team/blob/f339e7da7d05f6057fdfcdd3742bfcf365fee2a9/atomics/T1546.015/T1546.015.md#atomic-test-2---powershell-execute-com-object

## Metadata
- **Author:** frack113
- **Date:** 2022-04-02
- **Rule ID:** `8bc063d5-3a3a-4f01-a140-bc15e55e8437`
- **Source file:** `windows/powershell/powershell_script/posh_ps_susp_gettypefromclsid.yml`
