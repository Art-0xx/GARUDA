---
type: detection_rule
title: "Powershell MsXml COM Object"
rule_id: 78aa1347-1517-4454-9982-b338d6df8343
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1059.001]
---

# Powershell MsXml COM Object

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
condition: selection
selection:
  ScriptBlockText|contains|all:
  - New-Object
  - -ComObject
  - MsXml2.
  - XmlHttp
```

## MITRE ATT&CK
- T1059.001

## False Positives
- Legitimate administrative script

## References
- https://github.com/redcanaryco/atomic-red-team/blob/f339e7da7d05f6057fdfcdd3742bfcf365fee2a9/atomics/T1059.001/T1059.001.md#atomic-test-7---powershell-msxml-com-object---with-prompt
- https://learn.microsoft.com/en-us/previous-versions/windows/desktop/ms766431(v=vs.85)
- https://www.trendmicro.com/en_id/research/22/e/uncovering-a-kingminer-botnet-attack-using-trend-micro-managed-x.html

## Metadata
- **Author:** frack113, MatilJ
- **Date:** 2022-01-19
- **Rule ID:** `78aa1347-1517-4454-9982-b338d6df8343`
- **Source file:** `windows/powershell/powershell_script/posh_ps_msxml_com.yml`
