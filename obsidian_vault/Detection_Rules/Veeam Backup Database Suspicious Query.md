---
type: detection_rule
title: "Veeam Backup Database Suspicious Query"
rule_id: 696bfb54-227e-4602-ac5b-30d9d2053312
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1005]
---

# Veeam Backup Database Suspicious Query

## Description
Detects potentially suspicious SQL queries using SQLCmd targeting the Veeam backup databases in order to steal information.

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: all of selection_*
selection_db:
  CommandLine|contains:
  - BackupRepositories
  - Backups
  - Credentials
  - HostCreds
  - SmbFileShares
  - Ssh_creds
  - VSphereInfo
selection_sql:
  CommandLine|contains|all:
  - VeeamBackup
  - 'From '
  Image|endswith: \sqlcmd.exe
```

## MITRE ATT&CK
- T1005

## False Positives
- Unknown

## References
- https://labs.withsecure.com/publications/fin7-target-veeam-servers

## Metadata
- **Author:** Nasreddine Bencherchali (Nextron Systems)
- **Date:** 2023-05-04
- **Rule ID:** `696bfb54-227e-4602-ac5b-30d9d2053312`
- **Source file:** `windows/process_creation/proc_creation_win_sqlcmd_veeam_db_recon.yml`
