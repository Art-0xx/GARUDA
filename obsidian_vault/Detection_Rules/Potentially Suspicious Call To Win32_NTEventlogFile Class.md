---
type: detection_rule
title: "Potentially Suspicious Call To Win32_NTEventlogFile Class"
rule_id: caf201a9-c2ce-4a26-9c3a-2b9525413711
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
---

# Potentially Suspicious Call To Win32_NTEventlogFile Class

## Description
Detects usage of the WMI class "Win32_NTEventlogFile" in a potentially suspicious way (delete, backup, change permissions, etc.) from a PowerShell script

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: all of selection_*
selection_class:
  CommandLine|contains: Win32_NTEventlogFile
selection_function:
  CommandLine|contains:
  - .BackupEventlog(
  - .ChangeSecurityPermissions(
  - .ChangeSecurityPermissionsEx(
  - .ClearEventLog(
  - .Delete(
  - .DeleteEx(
  - .Rename(
  - .TakeOwnerShip(
  - .TakeOwnerShipEx(
```

## False Positives
- Unknown

## References
- https://learn.microsoft.com/en-us/previous-versions/windows/desktop/legacy/aa394225(v=vs.85)

## Metadata
- **Author:** Nasreddine Bencherchali (Nextron Systems)
- **Date:** 2023-07-13
- **Rule ID:** `caf201a9-c2ce-4a26-9c3a-2b9525413711`
- **Source file:** `windows/process_creation/proc_creation_win_susp_nteventlogfile_usage.yml`
