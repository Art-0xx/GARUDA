---
type: detection_rule
title: "Suspicious Reg Add BitLocker"
rule_id: 0e0255bf-2548-47b8-9582-c0955c9283f5
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1486]
---

# Suspicious Reg Add BitLocker

## Description
Detects suspicious addition to BitLocker related registry keys via the reg.exe utility

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: selection
selection:
  CommandLine|contains:
  - EnableBDEWithNoTPM
  - UseAdvancedStartup
  - UseTPM
  - UseTPMKey
  - UseTPMKeyPIN
  - RecoveryKeyMessageSource
  - UseTPMPIN
  - RecoveryKeyMessage
  CommandLine|contains|all:
  - REG
  - ADD
  - \SOFTWARE\Policies\Microsoft\FVE
  - /v
  - /f
```

## MITRE ATT&CK
- T1486

## False Positives
- Unlikely

## References
- https://thedfirreport.com/2021/11/15/exchange-exploit-leads-to-domain-wide-ransomware/

## Metadata
- **Author:** frack113
- **Date:** 2021-11-15
- **Rule ID:** `0e0255bf-2548-47b8-9582-c0955c9283f5`
- **Source file:** `windows/process_creation/proc_creation_win_reg_bitlocker.yml`
