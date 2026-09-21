---
type: detection_rule
title: "PUA - Restic Backup Tool Execution"
rule_id: 6ddff2e8-ea1a-45d0-8938-93dfc1d67ae7
platform: windows
level: high
status: experimental
tags: [detection, sigma, windows]
mitre_tags: [attack.t1048, attack.t1567.002]
---

# PUA - Restic Backup Tool Execution

## Description
Detects the execution of the Restic backup tool, which can be used for data exfiltration.
Threat actors may leverage Restic to back up and exfiltrate sensitive data to remote storage locations, including cloud services.
If not legitimately used in the enterprise environment, its presence may indicate malicious activity.

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: 1 of selection_*
selection_restic:
  CommandLine|contains:
  - 'sftp:'
  - rest:http
  - s3:s3.
  - s3.http
  - 'azure:'
  - ' gs:'
  - 'rclone:'
  - 'swift:'
  - ' b2:'
  CommandLine|contains|all:
  - ' init '
  - ' -r '
selection_specific:
- CommandLine|contains|all:
  - --password-file
  - init
  - ' -r '
- CommandLine|contains|all:
  - --use-fs-snapshot
  - backup
  - ' -r '
```

## MITRE ATT&CK
- T1048
- T1567.002

## False Positives
- Legitimate use of Restic for backup purposes within the organization.

## References
- https://thedfirreport.com/2024/09/30/nitrogen-campaign-drops-sliver-and-ends-with-blackcat-ransomware/#exfiltration
- https://restic.net/
- https://restic.readthedocs.io/en/stable/030_preparing_a_new_repo.html

## Metadata
- **Author:** Nounou Mbeiri, Swachchhanda Shrawan Poudel (Nextron Systems)
- **Date:** 2025-10-17
- **Rule ID:** `6ddff2e8-ea1a-45d0-8938-93dfc1d67ae7`
- **Source file:** `windows/process_creation/proc_creation_win_pua_restic.yml`
