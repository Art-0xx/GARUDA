---
type: detection_rule
title: "Sysmon Configuration Update"
rule_id: 87911521-7098-470b-a459-9a57fc80bdfd
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1685]
---

# Sysmon Configuration Update

## Description
Detects updates to Sysmon's configuration. Attackers might update or replace the Sysmon configuration with a bare bone one to avoid monitoring without shutting down the service completely

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: all of selection_*
selection_cli:
  CommandLine|contains|windash: -c
selection_pe:
- Image|endswith:
  - \Sysmon64.exe
  - \Sysmon64a.exe
  - \Sysmon.exe
- Description: System activity monitor
```

## MITRE ATT&CK
- T1685

## False Positives
- Legitimate administrators might use this command to update Sysmon configuration.

## References
- https://learn.microsoft.com/en-us/sysinternals/downloads/sysmon

## Metadata
- **Author:** Nasreddine Bencherchali (Nextron Systems)
- **Date:** 2023-03-09
- **Rule ID:** `87911521-7098-470b-a459-9a57fc80bdfd`
- **Source file:** `windows/process_creation/proc_creation_win_sysinternals_sysmon_config_update.yml`
