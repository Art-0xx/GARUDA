---
type: detection_rule
title: "Shell Process Spawned by Java.EXE"
rule_id: dff1e1cc-d3fd-47c8-bfc2-aeb878a754c0
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
---

# Shell Process Spawned by Java.EXE

## Description
Detects shell spawned from Java host process, which could be a sign of exploitation (e.g. log4j exploitation)

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: selection and not 1 of filter_main_*
filter_main_build:
  CommandLine|contains: build
  ParentImage|contains: build
selection:
  Image|endswith:
  - \bash.exe
  - \cmd.exe
  - \powershell.exe
  - \pwsh.exe
  ParentImage|endswith: \java.exe
```

## False Positives
- Legitimate calls to system binaries
- Company specific internal usage

## References
- https://web.archive.org/web/20231230220738/https://www.lunasec.io/docs/blog/log4j-zero-day/

## Metadata
- **Author:** Andreas Hunkeler (@Karneades), Nasreddine Bencherchali
- **Date:** 2021-12-17
- **Rule ID:** `dff1e1cc-d3fd-47c8-bfc2-aeb878a754c0`
- **Source file:** `windows/process_creation/proc_creation_win_java_susp_child_process_2.yml`
