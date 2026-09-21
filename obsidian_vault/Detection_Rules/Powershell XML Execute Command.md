---
type: detection_rule
title: "Powershell XML Execute Command"
rule_id: 6c6c6282-7671-4fe9-a0ce-a2dcebdc342b
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1059.001]
---

# Powershell XML Execute Command

## Description
Adversaries may abuse PowerShell commands and scripts for execution.
PowerShell is a powerful interactive command-line interface and scripting environment included in the Windows operating system. (Citation: TechNet PowerShell)
Adversaries can use PowerShell to perform a number of actions, including discovery of information and execution of code

## Log Source
```yaml
category: ps_script
definition: 'Requirements: Script Block Logging must be enabled'
product: windows
```

## Detection Logic
```yaml
condition: all of selection_*
selection_exec:
  ScriptBlockText|contains:
  - 'IEX '
  - 'Invoke-Expression '
  - 'Invoke-Command '
  - ICM -
selection_xml:
  ScriptBlockText|contains|all:
  - New-Object
  - System.Xml.XmlDocument
  - .Load
```

## MITRE ATT&CK
- T1059.001

## False Positives
- Legitimate administrative script

## References
- https://github.com/redcanaryco/atomic-red-team/blob/f339e7da7d05f6057fdfcdd3742bfcf365fee2a9/atomics/T1059.001/T1059.001.md#atomic-test-8---powershell-xml-requests

## Metadata
- **Author:** frack113
- **Date:** 2022-01-19
- **Rule ID:** `6c6c6282-7671-4fe9-a0ce-a2dcebdc342b`
- **Source file:** `windows/powershell/powershell_script/posh_ps_xml_iex.yml`
