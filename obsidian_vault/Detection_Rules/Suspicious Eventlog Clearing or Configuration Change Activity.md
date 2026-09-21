---
type: detection_rule
title: "Suspicious Eventlog Clearing or Configuration Change Activity"
rule_id: cc36992a-4671-4f21-a91d-6c2b72a2edf5
platform: windows
level: high
status: stable
tags: [detection, sigma, windows]
mitre_tags: [attack.t1685.005, attack.t1685.001]
---

# Suspicious Eventlog Clearing or Configuration Change Activity

## Description
Detects the clearing or configuration tampering of EventLog using utilities such as "wevtutil", "powershell" and "wmic".
This technique were seen used by threat actors and ransomware strains in order to evade defenses.

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: ((all of selection_wevtutil_*) or (all of selection_other_ps_*) or selection_other_wmi)
  and not 1 of filter_main_*
filter_main_msiexec:
  CommandLine|contains: ' sl '
  ParentImage:
  - C:\Windows\SysWOW64\msiexec.exe
  - C:\Windows\System32\msiexec.exe
selection_other_ps_cmd:
- CommandLine|contains:
  - 'Clear-EventLog '
  - 'Remove-EventLog '
  - 'Limit-EventLog '
  - 'Clear-WinEvent '
- CommandLine|contains|all:
  - Eventing.Reader.EventLogSession
  - ClearLog
- CommandLine|contains|all:
  - Diagnostics.EventLog
  - Clear
selection_other_ps_img:
  Image|endswith:
  - \powershell.exe
  - \powershell_ise.exe
  - \pwsh.exe
selection_other_wmi:
  CommandLine|contains: ClearEventLog
  Image|endswith:
  - \powershell.exe
  - \powershell_ise.exe
  - \pwsh.exe
  - \wmic.exe
selection_wevtutil_cmd:
  CommandLine|contains:
  - 'clear-log '
  - ' cl '
  - 'set-log '
  - ' sl '
  - 'lfn:'
selection_wevtutil_img:
- Image|endswith: \wevtutil.exe
- OriginalFileName: wevtutil.exe
```

## MITRE ATT&CK
- T1685.005
- T1685.001

## False Positives
- Admin activity
- Scripts and administrative tools used in the monitored environment
- Maintenance activity

## References
- https://github.com/redcanaryco/atomic-red-team/blob/f339e7da7d05f6057fdfcdd3742bfcf365fee2a9/atomics/T1070.001/T1070.001.md
- https://eqllib.readthedocs.io/en/latest/analytics/5b223758-07d6-4100-9e11-238cfdd0fe97.html
- https://learn.microsoft.com/en-us/windows-server/administration/windows-commands/wevtutil
- https://gist.github.com/fovtran/ac0624983c7722e80a8f5a4babb170ee
- https://jdhnet.wordpress.com/2017/12/19/changing-the-location-of-the-windows-event-logs/

## Metadata
- **Author:** Ecco, Daniil Yugoslavskiy, oscd.community, D3F7A5105, Swachchhanda Shrawan Poudel (Nextron Systems)
- **Date:** 2019-09-26
- **Rule ID:** `cc36992a-4671-4f21-a91d-6c2b72a2edf5`
- **Source file:** `windows/process_creation/proc_creation_win_susp_eventlog_clear.yml`
