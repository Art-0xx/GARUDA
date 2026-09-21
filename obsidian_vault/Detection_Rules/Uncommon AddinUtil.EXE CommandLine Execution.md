---
type: detection_rule
title: "Uncommon AddinUtil.EXE CommandLine Execution"
rule_id: 4f2cd9b6-4a17-440f-bb2a-687abb65993a
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1218]
---

# Uncommon AddinUtil.EXE CommandLine Execution

## Description
Detects execution of the Add-In deployment cache updating utility (AddInutil.exe) with uncommon Addinroot or Pipelineroot paths. An adversary may execute AddinUtil.exe with uncommon Addinroot/Pipelineroot paths that point to the adversaries Addins.Store payload.

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: all of selection_* and not 1 of filter_main_*
filter_main_addinroot:
  CommandLine|contains:
  - -AddInRoot:"C:\Program Files (x86)\Common Files\Microsoft Shared\VSTA
  - -AddInRoot:C:\Program Files (x86)\Common Files\Microsoft Shared\VSTA
  - -PipelineRoot:"C:\Program Files (x86)\Common Files\Microsoft Shared\VSTA
  - -PipelineRoot:C:\Program Files (x86)\Common Files\Microsoft Shared\VSTA
selection_cli:
  CommandLine|contains:
  - '-AddInRoot:'
  - '-PipelineRoot:'
selection_img:
- Image|endswith: \addinutil.exe
- OriginalFileName: AddInUtil.exe
```

## MITRE ATT&CK
- T1218

## False Positives
- Unknown

## References
- https://www.blue-prints.blog/content/blog/posts/lolbin/addinutil-lolbas.html

## Metadata
- **Author:** Michael McKinley (@McKinleyMike), Tony Latteri (@TheLatteri)
- **Date:** 2023-09-18
- **Rule ID:** `4f2cd9b6-4a17-440f-bb2a-687abb65993a`
- **Source file:** `windows/process_creation/proc_creation_win_addinutil_uncommon_cmdline.yml`
