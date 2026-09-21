---
type: detection_rule
title: "Scheduled Cron Task/Job - MacOs"
rule_id: 7c3b43d8-d794-47d2-800a-d277715aa460
platform: macos
level: medium
status: test
tags: [detection, sigma, macos]
mitre_tags: [attack.t1053.003]
---

# Scheduled Cron Task/Job - MacOs

## Description
Detects abuse of the cron utility to perform task scheduling for initial or recurring execution of malicious code. Detection will focus on crontab jobs uploaded from the tmp folder.

## Log Source
```yaml
category: process_creation
product: macos
```

## Detection Logic
```yaml
condition: selection
selection:
  CommandLine|contains: /tmp/
  Image|endswith: /crontab
```

## MITRE ATT&CK
- T1053.003

## False Positives
- Legitimate administration activities

## References
- https://github.com/redcanaryco/atomic-red-team/blob/f339e7da7d05f6057fdfcdd3742bfcf365fee2a9/atomics/T1053.003/T1053.003.md

## Metadata
- **Author:** Alejandro Ortuno, oscd.community
- **Date:** 2020-10-06
- **Rule ID:** `7c3b43d8-d794-47d2-800a-d277715aa460`
- **Source file:** `macos/process_creation/proc_creation_macos_schedule_task_job_cron.yml`
