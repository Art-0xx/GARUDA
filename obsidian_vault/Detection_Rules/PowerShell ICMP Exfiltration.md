---
type: detection_rule
title: "PowerShell ICMP Exfiltration"
rule_id: 4c4af3cd-2115-479c-8193-6b8bfce9001c
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1048.003]
---

# PowerShell ICMP Exfiltration

## Description
Detects Exfiltration Over Alternative Protocol - ICMP. Adversaries may steal data by exfiltrating it over an un-encrypted network protocol other than that of the existing command and control channel.

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
  - System.Net.NetworkInformation.Ping
  - .Send(
```

## MITRE ATT&CK
- T1048.003

## False Positives
- Legitimate usage of System.Net.NetworkInformation.Ping class

## References
- https://github.com/redcanaryco/atomic-red-team/blob/f339e7da7d05f6057fdfcdd3742bfcf365fee2a9/atomics/T1048.003/T1048.003.md#atomic-test-2---exfiltration-over-alternative-protocol---icmp

## Metadata
- **Author:** Bartlomiej Czyz @bczyz1, oscd.community
- **Date:** 2020-10-10
- **Rule ID:** `4c4af3cd-2115-479c-8193-6b8bfce9001c`
- **Source file:** `windows/powershell/powershell_script/posh_ps_icmp_exfiltration.yml`
