---
type: detection_rule
title: "Security Software Discovery Via Powershell Script"
rule_id: 904e8e61-8edf-4350-b59c-b905fc8e810c
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1518.001]
---

# Security Software Discovery Via Powershell Script

## Description
Detects calls to "get-process" where the output is piped to a "where-object" filter to search for security solution processes.
Adversaries may attempt to get a listing of security software, configurations, defensive tools, and sensors that are installed on a system or in a cloud environment. This may include things such as firewall rules and anti-virus

## Log Source
```yaml
category: ps_script
definition: 'Requirements: Script Block Logging must be enabled'
product: windows
```

## Detection Logic
```yaml
condition: all of selection_*
selection_cmdlet:
  ScriptBlockText|contains:
  - get-process | \?
  - get-process | where
  - gps | \?
  - gps | where
selection_field:
  ScriptBlockText|contains:
  - Company -like
  - Description -like
  - Name -like
  - Path -like
  - Product -like
selection_keywords:
  ScriptBlockText|contains:
  - \*avira\*
  - \*carbonblack\*
  - \*cylance\*
  - \*defender\*
  - \*kaspersky\*
  - \*malware\*
  - \*sentinel\*
  - \*symantec\*
  - \*virus\*
```

## MITRE ATT&CK
- T1518.001

## False Positives
- False positives might occur due to the nature of the ScriptBlock being ingested as a big blob. Initial tuning is required.
- As the "selection_cmdlet" is common in scripts the matching engine might slow down the search. Change into regex or a more accurate string to avoid heavy resource consumption if experienced

## References
- https://github.com/redcanaryco/atomic-red-team/blob/f339e7da7d05f6057fdfcdd3742bfcf365fee2a9/atomics/T1518.001/T1518.001.md#atomic-test-2---security-software-discovery---powershell

## Metadata
- **Author:** frack113, Anish Bogati, Nasreddine Bencherchali (Nextron Systems)
- **Date:** 2021-12-16
- **Rule ID:** `904e8e61-8edf-4350-b59c-b905fc8e810c`
- **Source file:** `windows/powershell/powershell_script/posh_ps_get_process_security_software_discovery.yml`
