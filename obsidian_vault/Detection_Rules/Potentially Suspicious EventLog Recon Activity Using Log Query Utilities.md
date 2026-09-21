---
type: detection_rule
title: "Potentially Suspicious EventLog Recon Activity Using Log Query Utilities"
rule_id: beaa66d6-aa1b-4e3c-80f5-e0145369bfaf
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1552, attack.t1087]
---

# Potentially Suspicious EventLog Recon Activity Using Log Query Utilities

## Description
Detects execution of different log query utilities and commands to search and dump the content of specific event logs or look for specific event IDs.
This technique is used by threat actors in order to extract sensitive information from events logs such as usernames, IP addresses, hostnames, etc.

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: 1 of selection_logs_* and (selection_wmi or all of selection_wevtutil_*
  or all of selection_wmic_* or selection_cmdlet)
selection_cmdlet:
  CommandLine|contains:
  - 'Get-WinEvent '
  - 'get-eventlog '
selection_logs_eid:
  CommandLine|contains:
  - -InstanceId 462?
  - .eventid -eq 462?
  - .ID -eq 462?
  - EventCode=?462?
  - EventIdentifier=?462?
  - System[EventID=462?]
  - -InstanceId 4778
  - .eventid -eq 4778
  - .ID -eq 4778
  - EventCode=?4778?
  - EventIdentifier=?4778?
  - System[EventID=4778]
  - -InstanceId 25
  - .eventid -eq 25
  - .ID -eq 25
  - EventCode=?25?
  - EventIdentifier=?25?
  - System[EventID=25]
  - -InstanceId 1149
  - .eventid -eq 1149
  - .ID -eq 1149
  - EventCode=?1149?
  - EventIdentifier=?1149?
  - System[EventID=1149]
  - -InstanceId 21
  - .eventid -eq 21
  - .ID -eq 21
  - EventCode=?21?
  - EventIdentifier=?21?
  - System[EventID=21]
  - -InstanceId 22
  - .eventid -eq 22
  - .ID -eq 22
  - EventCode=?22?
  - EventIdentifier=?22?
  - System[EventID=22]
selection_logs_name:
  CommandLine|contains:
  - Microsoft-Windows-PowerShell
  - Microsoft-Windows-Security-Auditing
  - Microsoft-Windows-TerminalServices-LocalSessionManager
  - Microsoft-Windows-TerminalServices-RemoteConnectionManager
  - Microsoft-Windows-Windows Defender
  - PowerShellCore
  - Security
  - Windows PowerShell
selection_wevtutil_cli:
  CommandLine|contains:
  - ' qe '
  - ' query-events '
selection_wevtutil_img:
- Image|endswith: \wevtutil.exe
- OriginalFileName: wevtutil.exe
selection_wmi:
  CommandLine|contains|all:
  - Select
  - Win32_NTLogEvent
selection_wmic_cli:
  CommandLine|contains: ' ntevent'
selection_wmic_img:
- Image|endswith: \wmic.exe
- OriginalFileName: wmic.exe
```

## MITRE ATT&CK
- T1552
- T1087

## False Positives
- Legitimate usage of the utility by administrators to query the event log

## References
- http://blog.talosintelligence.com/2022/09/lazarus-three-rats.html
- https://thedfirreport.com/2023/10/30/netsupport-intrusion-results-in-domain-compromise/
- https://www.cisa.gov/news-events/cybersecurity-advisories/aa23-144a
- https://www.group-ib.com/blog/apt41-world-tour-2021/
- https://labs.withsecure.com/content/dam/labs/docs/f-secureLABS-tlp-white-lazarus-threat-intel-report2.pdf

## Metadata
- **Author:** Nasreddine Bencherchali (Nextron Systems), X__Junior (Nextron Systems)
- **Date:** 2022-09-09
- **Rule ID:** `beaa66d6-aa1b-4e3c-80f5-e0145369bfaf`
- **Source file:** `windows/process_creation/proc_creation_win_susp_eventlog_content_recon.yml`
