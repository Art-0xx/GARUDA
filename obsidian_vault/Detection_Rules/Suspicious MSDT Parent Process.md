---
type: detection_rule
title: "Suspicious MSDT Parent Process"
rule_id: 7a74da6b-ea76-47db-92cc-874ad90df734
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1036, attack.t1218]
---

# Suspicious MSDT Parent Process

## Description
Detects msdt.exe executed by a suspicious parent as seen in CVE-2022-30190 / Follina exploitation

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: all of selection_*
selection_msdt:
- Image|endswith: \msdt.exe
- OriginalFileName: msdt.exe
selection_parent:
  ParentImage|endswith:
  - \cmd.exe
  - \cscript.exe
  - \mshta.exe
  - \powershell.exe
  - \pwsh.exe
  - \regsvr32.exe
  - \rundll32.exe
  - \schtasks.exe
  - \wmic.exe
  - \wscript.exe
  - \wsl.exe
```

## MITRE ATT&CK
- T1036
- T1218

## False Positives
- Unknown

## References
- https://twitter.com/nao_sec/status/1530196847679401984
- https://app.any.run/tasks/713f05d2-fe78-4b9d-a744-f7c133e3fafb/

## Metadata
- **Author:** Nextron Systems
- **Date:** 2022-06-01
- **Rule ID:** `7a74da6b-ea76-47db-92cc-874ad90df734`
- **Source file:** `windows/process_creation/proc_creation_win_msdt_susp_parent.yml`
