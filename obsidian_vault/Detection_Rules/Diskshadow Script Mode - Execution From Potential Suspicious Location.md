---
type: detection_rule
title: "Diskshadow Script Mode - Execution From Potential Suspicious Location"
rule_id: fa1a7e52-3d02-435b-81b8-00da14dd66c1
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1218]
---

# Diskshadow Script Mode - Execution From Potential Suspicious Location

## Description
Detects execution of "Diskshadow.exe" in script mode using the "/s" flag where the script is located in a potentially suspicious location.

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: all of selection_*
selection_cli:
  CommandLine|contains|windash: '-s '
selection_img:
- OriginalFileName: diskshadow.exe
- Image|endswith: \diskshadow.exe
selection_paths:
  CommandLine|contains:
  - :\Temp\
  - :\Windows\Temp\
  - \AppData\Local\
  - \AppData\Roaming\
  - \ProgramData\
  - \Users\Public\
```

## MITRE ATT&CK
- T1218

## False Positives
- False positives may occur if you execute the script from one of the paths mentioned in the rule. Apply additional filters that fits your org needs.

## References
- https://bohops.com/2018/03/26/diskshadow-the-return-of-vss-evasion-persistence-and-active-directory-database-extraction/
- https://www.ired.team/offensive-security/credential-access-and-credential-dumping/ntds.dit-enumeration
- https://medium.com/@cyberjyot/lolbin-execution-via-diskshadow-f6ff681a27a4
- https://learn.microsoft.com/en-us/windows-server/administration/windows-commands/diskshadow
- https://www.lifars.com/wp-content/uploads/2022/01/GriefRansomware_Whitepaper-2.pdf

## Metadata
- **Author:** Nasreddine Bencherchali (Nextron Systems)
- **Date:** 2023-09-15
- **Rule ID:** `fa1a7e52-3d02-435b-81b8-00da14dd66c1`
- **Source file:** `windows/process_creation/proc_creation_win_diskshadow_script_mode_susp_location.yml`
