---
type: detection_rule
title: "Windows Defender Disabled Via SystemSettingsAdminFlows.EXE"
rule_id: da92713f-ca2d-4fab-8320-098013d3f43a
platform: windows
level: high
status: experimental
tags: [detection, sigma, windows]
mitre_tags: [attack.t1685]
---

# Windows Defender Disabled Via SystemSettingsAdminFlows.EXE

## Description
Detects the usage of SystemSettingsAdminFlows.exe to disable Windows Defender.
SystemSettingsAdminFlows.exe is a legitimate Windows component used for administrative configuration tasks.
However, attackers may abuse it to disable Windows Defender as part of their attack chain, especially in the context of ransomware or other malware campaigns.

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: all of selection_ssaf_* and (all of selection_cli_enable_* or all of selection_cli_disable_*)
selection_cli_disable_opt:
  CommandLine|contains:
  - 'SubmitSamplesConsent '
  - 'SpyNetReporting '
  - 'DisableCDPUserAuthPolicy '
selection_cli_disable_value:
  CommandLine|contains: '0'
selection_cli_enable_opt:
  CommandLine|contains:
  - 'RTP '
  - 'RealTimeProtection '
  - 'DisableEnhancedNotifications '
selection_cli_enable_value:
  CommandLine|contains: '1'
selection_ssaf_cli:
  CommandLine|contains: defender
selection_ssaf_img:
- Image|endswith: \SystemSettingsAdminFlows.exe
- OriginalFileName: SystemSettingsAdminFlows.EXE
```

## MITRE ATT&CK
- T1685

## False Positives
- Legitimate turn off of Windows Defender by the technical users or administrators for troubleshooting or other purposes.

## References
- https://thedfirreport.com/2026/02/23/apache-activemq-exploit-leads-to-lockbit-ransomware/
- https://www.huntress.com/blog/lolbin-to-inc-ransomware

## Metadata
- **Author:** Chirag Damani (KPMG India), Swachchhanda Shrawan Poudel (Nextron Systems)
- **Date:** 2026-07-01
- **Rule ID:** `da92713f-ca2d-4fab-8320-098013d3f43a`
- **Source file:** `windows/process_creation/proc_creation_win_systemsettingsadminflows_defender_disable.yml`
