---
type: detection_rule
title: "Suspicious AddinUtil.EXE CommandLine Execution"
rule_id: 631b22a4-70f4-4e2f-9ea8-42f84d9df6d8
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1218]
---

# Suspicious AddinUtil.EXE CommandLine Execution

## Description
Detects execution of the Add-In deployment cache updating utility (AddInutil.exe) with suspicious Addinroot or Pipelineroot paths. An adversary may execute AddinUtil.exe with uncommon Addinroot/Pipelineroot paths that point to the adversaries Addins.Store payload.

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: selection_img and (all of selection_susp_1_* or selection_susp_2)
selection_img:
- Image|endswith: \addinutil.exe
- OriginalFileName: AddInUtil.exe
selection_susp_1_flags:
  CommandLine|contains:
  - '-AddInRoot:'
  - '-PipelineRoot:'
selection_susp_1_paths:
  CommandLine|contains:
  - \AppData\Local\Temp\
  - \Desktop\
  - \Downloads\
  - \Users\Public\
  - \Windows\Temp\
selection_susp_2:
  CommandLine|contains:
  - -AddInRoot:.
  - -AddInRoot:"."
  - -PipelineRoot:.
  - -PipelineRoot:"."
  CurrentDirectory|contains:
  - \AppData\Local\Temp\
  - \Desktop\
  - \Downloads\
  - \Users\Public\
  - \Windows\Temp\
```

## MITRE ATT&CK
- T1218

## False Positives
- Unknown

## References
- https://www.blue-prints.blog/content/blog/posts/lolbin/addinutil-lolbas.html

## Metadata
- **Author:** Nasreddine Bencherchali (Nextron Systems), Michael McKinley (@McKinleyMike), Tony Latteri (@TheLatteri)
- **Date:** 2023-09-18
- **Rule ID:** `631b22a4-70f4-4e2f-9ea8-42f84d9df6d8`
- **Source file:** `windows/process_creation/proc_creation_win_addinutil_suspicious_cmdline.yml`
