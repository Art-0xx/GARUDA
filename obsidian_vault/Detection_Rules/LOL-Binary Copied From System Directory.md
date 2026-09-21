---
type: detection_rule
title: "LOL-Binary Copied From System Directory"
rule_id: f5d19838-41b5-476c-98d8-ba8af4929ee2
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1036.003]
---

# LOL-Binary Copied From System Directory

## Description
Detects a suspicious copy operation that tries to copy a known LOLBIN from system (System32, SysWOW64, WinSxS) directories to another on disk in order to bypass detections based on locations.

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: 1 of selection_tools_* and all of selection_target_*
selection_target_lolbin:
  CommandLine|contains:
  - \bitsadmin.exe
  - \calc.exe
  - \certutil.exe
  - \cmdl32.exe
  - \cscript.exe
  - \mshta.exe
  - \rundll32.exe
  - \wscript.exe
  - \ie4uinit.exe
selection_target_path:
  CommandLine|contains:
  - \System32
  - \SysWOW64
  - \WinSxS
selection_tools_cmd:
  CommandLine|contains: 'copy '
  Image|endswith: \cmd.exe
selection_tools_other:
- Image|endswith:
  - \robocopy.exe
  - \xcopy.exe
- OriginalFileName:
  - robocopy.exe
  - XCOPY.EXE
selection_tools_pwsh:
  CommandLine|contains:
  - copy-item
  - ' copy '
  - 'cpi '
  - ' cp '
  Image|endswith:
  - \powershell.exe
  - \pwsh.exe
```

## MITRE ATT&CK
- T1036.003

## False Positives
- Unknown

## References
- https://www.hybrid-analysis.com/sample/8da5b75b6380a41eee3a399c43dfe0d99eeefaa1fd21027a07b1ecaa4cd96fdd?environmentId=120
- https://web.archive.org/web/20180331144337/https://www.fireeye.com/blog/threat-research/2018/03/sanny-malware-delivery-method-updated-in-recently-observed-attacks.html
- https://thedfirreport.com/2023/08/28/html-smuggling-leads-to-domain-wide-ransomware/
- https://www.virustotal.com/gui/file/14e722855605ba78dc1d21153f0e1be90e7528149f2cd2d7d6eba8ef27534bdc/behavior

## Metadata
- **Author:** Nasreddine Bencherchali (Nextron Systems)
- **Date:** 2023-08-29
- **Rule ID:** `f5d19838-41b5-476c-98d8-ba8af4929ee2`
- **Source file:** `windows/process_creation/proc_creation_win_susp_copy_system_dir_lolbin.yml`
