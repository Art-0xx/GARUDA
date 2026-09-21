---
type: detection_rule
title: "Suspicious File Execution From Internet Hosted WebDav Share"
rule_id: f0507c0f-a3a2-40f5-acc6-7f543c334993
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1059.001]
---

# Suspicious File Execution From Internet Hosted WebDav Share

## Description
Detects the execution of the "net use" command to mount a WebDAV server and then immediately execute some content in it. As seen being used in malicious LNK files

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: all of selection_*
selection_base:
  CommandLine|contains|all:
  - ' net use http'
  - '& start /b '
  - \DavWWWRoot\
selection_ext:
  CommandLine|contains:
  - '.exe '
  - '.dll '
  - '.bat '
  - '.vbs '
  - '.ps1 '
selection_img:
- Image|contains: \cmd.exe
- OriginalFileName: Cmd.EXE
```

## MITRE ATT&CK
- T1059.001

## False Positives
- Unknown

## References
- https://twitter.com/ShadowChasing1/status/1552595370961944576
- https://www.virustotal.com/gui/file/a63376ee1dba76361df73338928e528ca5b20171ea74c24581605366dcaa0104/behavior

## Metadata
- **Author:** pH-T (Nextron Systems)
- **Date:** 2022-09-01
- **Rule ID:** `f0507c0f-a3a2-40f5-acc6-7f543c334993`
- **Source file:** `windows/process_creation/proc_creation_win_cmd_net_use_and_exec_combo.yml`
