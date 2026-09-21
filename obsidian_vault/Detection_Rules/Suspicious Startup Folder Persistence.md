---
type: detection_rule
title: "Suspicious Startup Folder Persistence"
rule_id: 28208707-fe31-437f-9a7f-4b1108b94d2e
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1204.002, attack.t1547.001]
---

# Suspicious Startup Folder Persistence

## Description
Detects the creation of potentially malicious script and executable files in Windows startup folders, which is a common persistence technique used by threat actors.
These files (.ps1, .vbs, .js, .bat, etc.) are automatically executed when a user logs in, making the Startup folder an attractive target for attackers.
This technique is frequently observed in malvertising campaigns and malware distribution where attackers attempt to maintain long-term access to compromised systems.

## Log Source
```yaml
category: file_event
product: windows
```

## Detection Logic
```yaml
condition: selection
selection:
  TargetFilename|contains: \Windows\Start Menu\Programs\Startup\
  TargetFilename|endswith:
  - .bat
  - .cmd
  - .dll
  - .hta
  - .jar
  - .js
  - .jse
  - .msi
  - .ps1
  - .psd1
  - .psm1
  - .scr
  - .url
  - .vba
  - .vbe
  - .vbs
  - .wsf
```

## MITRE ATT&CK
- T1204.002
- T1547.001

## False Positives
- Rare legitimate usage of some of the extensions mentioned in the rule

## References
- https://github.com/last-byte/PersistenceSniper
- https://www.microsoft.com/en-us/security/blog/2025/03/06/malvertising-campaign-leads-to-info-stealers-hosted-on-github/
- https://github.com/redcanaryco/atomic-red-team/blob/5ede8f21e42ebe37e0a6eff757dba60bcfa85859/atomics/T1547.001/T1547.001.md

## Metadata
- **Author:** Nasreddine Bencherchali (Nextron Systems), Swachchhanda Shrawan Poudel (Nextron Systems)
- **Date:** 2022-08-10
- **Rule ID:** `28208707-fe31-437f-9a7f-4b1108b94d2e`
- **Source file:** `windows/file/file_event/file_event_win_susp_startup_folder_persistence.yml`
