---
type: detection_rule
title: "Suspicious Copy From or To System Directory"
rule_id: fff9d2b7-e11c-4a69-93d3-40ef66189767
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1036.003]
---

# Suspicious Copy From or To System Directory

## Description
Detects a suspicious copy operation that tries to copy a program from system (System32, SysWOW64, WinSxS) directories to another on disk.
Often used to move LOLBINs such as 'certutil' or 'desktopimgdownldr' to a different location with a different name in order to bypass detections based on locations.

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: 1 of selection_img_* and selection_target and not 1 of filter_optional_*
filter_optional_avira:
  CommandLine|contains:
  - C:\Program Files\Avira\
  - C:\Program Files (x86)\Avira\
  CommandLine|contains|all:
  - /c copy
  - \Temp\
  - \avira_system_speedup.exe
  Image|endswith: \cmd.exe
selection_img_cmd:
  CommandLine|contains: 'copy '
  Image|endswith: \cmd.exe
selection_img_other:
- Image|endswith:
  - \robocopy.exe
  - \xcopy.exe
- OriginalFileName:
  - robocopy.exe
  - XCOPY.EXE
selection_img_pwsh:
  CommandLine|contains:
  - copy-item
  - ' copy '
  - 'cpi '
  - ' cp '
  Image|endswith:
  - \powershell.exe
  - \pwsh.exe
selection_target:
  CommandLine|re|i: \s['"]?C:\\Windows\\(?:System32|SysWOW64|WinSxS)
```

## MITRE ATT&CK
- T1036.003

## False Positives
- Depend on scripts and administrative tools used in the monitored environment (For example an admin scripts like https://www.itexperience.net/sccm-batch-files-and-32-bits-processes-on-64-bits-os/)
- When cmd.exe and xcopy.exe are called directly
- When the command contains the keywords but not in the correct order

## References
- https://www.hybrid-analysis.com/sample/8da5b75b6380a41eee3a399c43dfe0d99eeefaa1fd21027a07b1ecaa4cd96fdd?environmentId=120
- https://web.archive.org/web/20180331144337/https://www.fireeye.com/blog/threat-research/2018/03/sanny-malware-delivery-method-updated-in-recently-observed-attacks.html
- https://thedfirreport.com/2023/08/28/html-smuggling-leads-to-domain-wide-ransomware/

## Metadata
- **Author:** Florian Roth (Nextron Systems), Markus Neis, Tim Shelton (HAWK.IO), Nasreddine Bencherchali (Nextron Systems)
- **Date:** 2020-07-03
- **Rule ID:** `fff9d2b7-e11c-4a69-93d3-40ef66189767`
- **Source file:** `windows/process_creation/proc_creation_win_susp_copy_system_dir.yml`
