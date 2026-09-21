---
type: detection_rule
title: "Potentially Suspicious Call To Win32_NTEventlogFile Class - PSScript"
rule_id: e2812b49-bae0-4b21-b366-7c142eafcde2
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
---

# Potentially Suspicious Call To Win32_NTEventlogFile Class - PSScript

## Description
Detects usage of the WMI class "Win32_NTEventlogFile" in a potentially suspicious way (delete, backup, change permissions, etc.) from a PowerShell script

## Log Source
```yaml
category: ps_script
definition: bade5735-5ab0-4aa7-a642-a11be0e40872
product: windows
```

## Detection Logic
```yaml
condition: all of selection_*
selection_class:
  ScriptBlockText|contains: Win32_NTEventlogFile
selection_function:
  ScriptBlockText|contains:
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
- Legitimate administration and backup scripts

## References
- https://learn.microsoft.com/en-us/previous-versions/windows/desktop/legacy/aa394225(v=vs.85)

## Metadata
- **Author:** Nasreddine Bencherchali (Nextron Systems)
- **Date:** 2023-07-13
- **Rule ID:** `e2812b49-bae0-4b21-b366-7c142eafcde2`
- **Source file:** `windows/powershell/powershell_script/posh_ps_win32_nteventlogfile_usage.yml`
