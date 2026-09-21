---
type: detection_rule
title: "WebDav Client Execution Via Rundll32.EXE"
rule_id: 2dbd9d3d-9e27-42a8-b8df-f13825c6c3d5
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1048.003]
---

# WebDav Client Execution Via Rundll32.EXE

## Description
Detects "svchost.exe" spawning "rundll32.exe" with command arguments like "C:\windows\system32\davclnt.dll,DavSetCookie".
This could be an indicator of exfiltration or use of WebDav to launch code (hosted on a WebDav server).

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: all of selection_*
selection_cli:
  CommandLine|contains: C:\windows\system32\davclnt.dll,DavSetCookie
selection_img:
- Image|endswith: \rundll32.exe
- OriginalFileName: RUNDLL32.EXE
selection_parent:
  ParentImage|endswith: \svchost.exe
```

## MITRE ATT&CK
- T1048.003

## False Positives
- Unknown

## References
- https://github.com/OTRF/detection-hackathon-apt29/issues/17
- https://github.com/OTRF/ThreatHunter-Playbook/blob/2d4257f630f4c9770f78d0c1df059f891ffc3fec/docs/evals/apt29/detections/7.B.4_C10730EA-6345-4934-AA0F-B0EFCA0C4BA6.md

## Metadata
- **Author:** Roberto Rodriguez (Cyb3rWard0g), OTR (Open Threat Research)
- **Date:** 2020-05-02
- **Rule ID:** `2dbd9d3d-9e27-42a8-b8df-f13825c6c3d5`
- **Source file:** `windows/process_creation/proc_creation_win_rundll32_webdav_client_execution.yml`
