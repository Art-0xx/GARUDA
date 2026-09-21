---
type: detection_rule
title: "Script Event Consumer Spawning Process"
rule_id: f6d1dd2f-b8ce-40ca-bc23-062efb686b34
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1047]
---

# Script Event Consumer Spawning Process

## Description
Detects a suspicious child process of Script Event Consumer (scrcons.exe).

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: selection
selection:
  Image|endswith:
  - \svchost.exe
  - \dllhost.exe
  - \powershell.exe
  - \pwsh.exe
  - \wscript.exe
  - \cscript.exe
  - \schtasks.exe
  - \regsvr32.exe
  - \mshta.exe
  - \rundll32.exe
  - \msiexec.exe
  - \msbuild.exe
  ParentImage|endswith: \scrcons.exe
```

## MITRE ATT&CK
- T1047

## False Positives
- Unknown

## References
- https://redcanary.com/blog/child-processes/
- https://docs.paloaltonetworks.com/cortex/cortex-xdr/cortex-xdr-analytics-alert-reference/cortex-xdr-analytics-alert-reference/scrcons-exe-rare-child-process.html

## Metadata
- **Author:** Sittikorn S
- **Date:** 2021-06-21
- **Rule ID:** `f6d1dd2f-b8ce-40ca-bc23-062efb686b34`
- **Source file:** `windows/process_creation/proc_creation_win_scrcons_susp_child_process.yml`
