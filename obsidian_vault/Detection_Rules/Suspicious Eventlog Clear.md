---
type: detection_rule
title: "Suspicious Eventlog Clear"
rule_id: 0f017df3-8f5a-414f-ad6b-24aff1128278
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1685.005]
---

# Suspicious Eventlog Clear

## Description
Detects usage of known powershell cmdlets such as "Clear-EventLog" to clear the Windows event logs

## Log Source
```yaml
category: ps_script
definition: 'Requirements: Script Block Logging must be enabled'
product: windows
```

## Detection Logic
```yaml
condition: selection
selection:
- ScriptBlockText|contains:
  - 'Clear-EventLog '
  - 'Remove-EventLog '
  - 'Limit-EventLog '
  - 'Clear-WinEvent '
- ScriptBlockText|contains|all:
  - Eventing.Reader.EventLogSession
  - ClearLog
- ScriptBlockText|contains|all:
  - Diagnostics.EventLog
  - Clear
```

## MITRE ATT&CK
- T1685.005

## False Positives
- Rare need to clear logs before doing something. Sometimes used by installers or cleaner scripts. The script should be investigated to determine if it's legitimate

## References
- https://twitter.com/oroneequalsone/status/1568432028361830402
- https://github.com/redcanaryco/atomic-red-team/blob/f339e7da7d05f6057fdfcdd3742bfcf365fee2a9/atomics/T1070.001/T1070.001.md
- https://eqllib.readthedocs.io/en/latest/analytics/5b223758-07d6-4100-9e11-238cfdd0fe97.html
- https://stackoverflow.com/questions/66011412/how-to-clear-a-event-log-in-powershell-7
- https://learn.microsoft.com/en-us/dotnet/api/system.diagnostics.eventing.reader.eventlogsession.clearlog?view=windowsdesktop-9.0&viewFallbackFrom=dotnet-plat-ext-5.0#System_Diagnostics_Eventing_Reader_EventLogSession_ClearLog_System_String_

## Metadata
- **Author:** Nasreddine Bencherchali (Nextron Systems), Swachchhanda Shrawan Poudel (Nextron Systems)
- **Date:** 2022-09-12
- **Rule ID:** `0f017df3-8f5a-414f-ad6b-24aff1128278`
- **Source file:** `windows/powershell/powershell_script/posh_ps_susp_clear_eventlog.yml`
