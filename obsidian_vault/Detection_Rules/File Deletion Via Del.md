---
type: detection_rule
title: "File Deletion Via Del"
rule_id: 379fa130-190e-4c3f-b7bc-6c8e834485f3
platform: windows
level: low
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1070.004]
---

# File Deletion Via Del

## Description
Detects execution of the builtin "del"/"erase" commands in order to delete files.
Adversaries may delete files left behind by the actions of their intrusion activity.
Malware, tools, or other non-native files dropped or created on a system by an adversary may leave traces to indicate to what was done within a network and how.
Removal of these files can occur during an intrusion, or as part of a post-intrusion process to minimize the adversary's footprint.

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: all of selection_*
selection_del:
  CommandLine|contains:
  - 'del '
  - 'erase '
selection_flags:
  CommandLine|contains|windash:
  - ' -f'
  - ' -s'
  - ' -q'
selection_img:
- Image|endswith: \cmd.exe
- OriginalFileName: Cmd.Exe
```

## MITRE ATT&CK
- T1070.004

## False Positives
- False positives levels will differ Depending on the environment. You can use a combination of ParentImage and other keywords from the CommandLine field to filter legitimate activity

## References
- https://github.com/redcanaryco/atomic-red-team/blob/f339e7da7d05f6057fdfcdd3742bfcf365fee2a9/atomics/T1070.004/T1070.004.md
- https://learn.microsoft.com/en-us/windows-server/administration/windows-commands/erase

## Metadata
- **Author:** frack113
- **Date:** 2022-01-15
- **Rule ID:** `379fa130-190e-4c3f-b7bc-6c8e834485f3`
- **Source file:** `windows/process_creation/proc_creation_win_cmd_del_execution.yml`
