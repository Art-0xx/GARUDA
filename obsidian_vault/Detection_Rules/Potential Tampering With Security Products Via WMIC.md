---
type: detection_rule
title: "Potential Tampering With Security Products Via WMIC"
rule_id: 847d5ff3-8a31-4737-a970-aeae8fe21765
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1685]
---

# Potential Tampering With Security Products Via WMIC

## Description
Detects uninstallation or termination of security products using the WMIC utility

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: 1 of selection_cli_* and selection_product
selection_cli_1:
  CommandLine|contains|all:
  - wmic
  - 'product '
  - uninstall
  CommandLine|contains|windash: /nointeractive
selection_cli_2:
  CommandLine|contains:
  - call delete
  - call terminate
  CommandLine|contains|all:
  - wmic
  - 'caption like '
selection_cli_3:
  CommandLine|contains|all:
  - 'process '
  - 'where '
  - delete
selection_product:
  CommandLine|contains:
  - '%carbon%'
  - '%cylance%'
  - '%endpoint%'
  - '%eset%'
  - '%malware%'
  - '%Sophos%'
  - '%symantec%'
  - Antivirus
  - 'AVG '
  - Carbon Black
  - CarbonBlack
  - Cb Defense Sensor 64-bit
  - Crowdstrike Sensor
  - 'Cylance '
  - Dell Threat Defense
  - DLP Endpoint
  - Endpoint Detection
  - Endpoint Protection
  - Endpoint Security
  - Endpoint Sensor
  - ESET File Security
  - LogRhythm System Monitor Service
  - Malwarebytes
  - McAfee Agent
  - Microsoft Security Client
  - Sophos Anti-Virus
  - Sophos AutoUpdate
  - Sophos Credential Store
  - Sophos Management Console
  - Sophos Management Database
  - Sophos Management Server
  - Sophos Remote Management System
  - Sophos Update Manager
  - Threat Protection
  - VirusScan
  - Webroot SecureAnywhere
  - Windows Defender
```

## MITRE ATT&CK
- T1685

## False Positives
- Legitimate administration

## References
- https://twitter.com/cglyer/status/1355171195654709249
- https://thedfirreport.com/2021/10/18/icedid-to-xinglocker-ransomware-in-24-hours/
- https://www.mandiant.com/resources/unc2165-shifts-to-evade-sanctions
- https://research.nccgroup.com/2022/08/19/back-in-black-unlocking-a-lockbit-3-0-ransomware-attack/
- https://www.trendmicro.com/en_us/research/23/a/vice-society-ransomware-group-targets-manufacturing-companies.html

## Metadata
- **Author:** Florian Roth (Nextron Systems), Nasreddine Bencherchali (Nextron Systems)
- **Date:** 2021-01-30
- **Rule ID:** `847d5ff3-8a31-4737-a970-aeae8fe21765`
- **Source file:** `windows/process_creation/proc_creation_win_wmic_uninstall_security_products.yml`
