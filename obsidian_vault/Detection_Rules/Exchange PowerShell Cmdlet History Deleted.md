---
type: detection_rule
title: "Exchange PowerShell Cmdlet History Deleted"
rule_id: a55349d8-9588-4c5a-8e3b-1925fe2a4ffe
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1070]
---

# Exchange PowerShell Cmdlet History Deleted

## Description
Detects the deletion of the Exchange PowerShell cmdlet History logs which may indicate an attempt to destroy forensic evidence

## Log Source
```yaml
category: file_delete
product: windows
```

## Detection Logic
```yaml
condition: selection
selection:
  TargetFilename|contains: _Cmdlet_
  TargetFilename|startswith: \Logging\CmdletInfra\LocalPowerShell\Cmdlet\
```

## MITRE ATT&CK
- T1070

## False Positives
- Possible FP during log rotation

## References
- https://m365internals.com/2022/10/07/hunting-in-on-premises-exchange-server-logs/

## Metadata
- **Author:** Nasreddine Bencherchali (Nextron Systems)
- **Date:** 2022-10-26
- **Rule ID:** `a55349d8-9588-4c5a-8e3b-1925fe2a4ffe`
- **Source file:** `windows/file/file_delete/file_delete_win_delete_exchange_powershell_logs.yml`
