---
type: detection_rule
title: "Potential Hidden Directory Creation Via NTFS INDEX_ALLOCATION Stream"
rule_id: a8f866e1-bdd4-425e-a27a-37619238d9c7
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1564.004]
---

# Potential Hidden Directory Creation Via NTFS INDEX_ALLOCATION Stream

## Description
Detects the creation of hidden file/folder with the "::$index_allocation" stream. Which can be used as a technique to prevent access to folder and files from tooling such as "explorer.exe" and "powershell.exe"

## Log Source
```yaml
category: file_event
product: windows
```

## Detection Logic
```yaml
condition: selection
selection:
  TargetFilename|contains: ::$index_allocation
```

## MITRE ATT&CK
- T1564.004

## False Positives
- Unlikely

## References
- https://twitter.com/pfiatde/status/1681977680688738305
- https://soroush.me/blog/2010/12/a-dotty-salty-directory-a-secret-place-in-ntfs-for-secret-files/
- https://sec-consult.com/blog/detail/pentesters-windows-ntfs-tricks-collection/
- https://github.com/redcanaryco/atomic-red-team/blob/5c3b23002d2bbede3c07e7307165fc2a235a427d/atomics/T1564.004/T1564.004.md#atomic-test-5---create-hidden-directory-via-index_allocation
- https://learn.microsoft.com/en-us/openspecs/windows_protocols/ms-fscc/c54dec26-1551-4d3a-a0ea-4fa40f848eb3

## Metadata
- **Author:** Scoubi (@ScoubiMtl)
- **Date:** 2023-10-09
- **Rule ID:** `a8f866e1-bdd4-425e-a27a-37619238d9c7`
- **Source file:** `windows/file/file_event/file_event_win_susp_hidden_dir_index_allocation.yml`
