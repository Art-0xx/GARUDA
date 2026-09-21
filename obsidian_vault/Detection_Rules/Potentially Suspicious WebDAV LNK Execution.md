---
type: detection_rule
title: "Potentially Suspicious WebDAV LNK Execution"
rule_id: 1412aa78-a24c-4abd-83df-767dfb2c5bbe
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1059.001, attack.t1204]
---

# Potentially Suspicious WebDAV LNK Execution

## Description
Detects possible execution via LNK file accessed on a WebDAV server.

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: selection
selection:
  CommandLine|contains: \DavWWWRoot\
  Image|endswith:
  - \cmd.exe
  - \cscript.exe
  - \mshta.exe
  - \powershell.exe
  - \pwsh.exe
  - \wscript.exe
  ParentImage|endswith: \explorer.exe
```

## MITRE ATT&CK
- T1059.001
- T1204

## False Positives
- Unknown

## References
- https://www.trellix.com/en-us/about/newsroom/stories/research/beyond-file-search-a-novel-method.html
- https://micahbabinski.medium.com/search-ms-webdav-and-chill-99c5b23ac462

## Metadata
- **Author:** Micah Babinski
- **Date:** 2023-08-21
- **Rule ID:** `1412aa78-a24c-4abd-83df-767dfb2c5bbe`
- **Source file:** `windows/process_creation/proc_creation_win_webdav_lnk_execution.yml`
