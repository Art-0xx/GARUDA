---
type: detection_rule
title: "Suspicious Scheduled Task Name As GUID"
rule_id: ff2fff64-4cd6-4a2b-ba7d-e28a30bbe66b
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1053.005]
---

# Suspicious Scheduled Task Name As GUID

## Description
Detects creation of a scheduled task with a GUID like name

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: all of selection_*
selection_end:
  CommandLine|contains:
  - '}"'
  - '}'''
  - '} '
selection_img:
  CommandLine|contains: '/Create '
  Image|endswith: \schtasks.exe
selection_tn:
  CommandLine|contains:
  - /TN "{
  - /TN '{
  - /TN {
```

## MITRE ATT&CK
- T1053.005

## False Positives
- Legitimate software naming their tasks as GUIDs

## References
- https://thedfirreport.com/2022/10/31/follina-exploit-leads-to-domain-compromise/
- https://thedfirreport.com/2022/02/21/qbot-and-zerologon-lead-to-full-domain-compromise/

## Metadata
- **Author:** Nasreddine Bencherchali (Nextron Systems)
- **Date:** 2022-10-31
- **Rule ID:** `ff2fff64-4cd6-4a2b-ba7d-e28a30bbe66b`
- **Source file:** `windows/process_creation/proc_creation_win_schtasks_guid_task_name.yml`
