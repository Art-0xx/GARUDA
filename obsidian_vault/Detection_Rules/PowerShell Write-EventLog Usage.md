---
type: detection_rule
title: "PowerShell Write-EventLog Usage"
rule_id: 35f41cd7-c98e-469f-8a02-ec4ba0cc7a7e
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
---

# PowerShell Write-EventLog Usage

## Description
Detects usage of the "Write-EventLog" cmdlet with 'RawData' flag. The cmdlet can be levreage to write malicious payloads to the EventLog and then retrieve them later for later use

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
  - Write-EventLog
  - '-RawData '
```

## False Positives
- Legitimate applications writing events via this cmdlet. Investigate alerts to determine if the action is benign

## References
- https://www.blackhillsinfosec.com/windows-event-logs-for-red-teams/

## Metadata
- **Author:** Nasreddine Bencherchali (Nextron Systems)
- **Date:** 2022-08-16
- **Rule ID:** `35f41cd7-c98e-469f-8a02-ec4ba0cc7a7e`
- **Source file:** `windows/powershell/powershell_script/posh_ps_susp_write_eventlog.yml`
