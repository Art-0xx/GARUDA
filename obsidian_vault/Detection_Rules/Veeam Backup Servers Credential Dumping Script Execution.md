---
type: detection_rule
title: "Veeam Backup Servers Credential Dumping Script Execution"
rule_id: 976d6e6f-a04b-4900-9713-0134a353e38b
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
---

# Veeam Backup Servers Credential Dumping Script Execution

## Description
Detects execution of a PowerShell script that contains calls to the "Veeam.Backup" class, in order to dump stored credentials.

## Log Source
```yaml
category: ps_script
definition: bade5735-5ab0-4aa7-a642-a11be0e40872
product: windows
```

## Detection Logic
```yaml
condition: selection
selection:
  ScriptBlockText|contains|all:
  - '[Credentials]'
  - '[Veeam.Backup.Common.ProtectedStorage]::GetLocalString'
  - Invoke-Sqlcmd
  - Veeam Backup and Replication
```

## False Positives
- Administrators backup scripts (must be investigated)

## References
- https://www.pwndefend.com/2021/02/15/retrieving-passwords-from-veeam-backup-servers/
- https://labs.withsecure.com/publications/fin7-target-veeam-servers

## Metadata
- **Author:** Nasreddine Bencherchali (Nextron Systems)
- **Date:** 2023-05-04
- **Rule ID:** `976d6e6f-a04b-4900-9713-0134a353e38b`
- **Source file:** `windows/powershell/powershell_script/posh_ps_veeam_credential_dumping_script.yml`
