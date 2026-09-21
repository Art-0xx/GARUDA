---
type: detection_rule
title: "Silence.EDA Detection"
rule_id: 3ceb2083-a27f-449a-be33-14ec1b7cc973
platform: windows
level: critical
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1059.001, attack.t1071.004, attack.t1572, attack.t1529]
---

# Silence.EDA Detection

## Description
Detects Silence EmpireDNSAgent as described in the Group-IP report

## Log Source
```yaml
category: ps_script
definition: 'Requirements: Script Block Logging must be enabled'
product: windows
```

## Detection Logic
```yaml
condition: empire and dnscat
dnscat:
  ScriptBlockText|contains|all:
  - set type=$LookupType`nserver
  - $Command | nslookup 2>&1 | Out-String
  - New-RandomDNSField
  - '[Convert]::ToString($SYNOptions, 16)'
  - $Session.Dead = $True
  - $Session["Driver"] -eq
empire:
  ScriptBlockText|contains|all:
  - System.Diagnostics.Process
  - Stop-Computer
  - Restart-Computer
  - Exception in execution
  - $cmdargs
  - Close-Dnscat2Tunnel
```

## MITRE ATT&CK
- T1059.001
- T1071.004
- T1572
- T1529

## False Positives
- Unknown

## References
- https://www.group-ib.com/resources/threat-research/silence_2.0.going_global.pdf

## Metadata
- **Author:** Alina Stepchenkova, Group-IB, oscd.community
- **Date:** 2019-11-01
- **Rule ID:** `3ceb2083-a27f-449a-be33-14ec1b7cc973`
- **Source file:** `windows/powershell/powershell_script/posh_ps_apt_silence_eda.yml`
