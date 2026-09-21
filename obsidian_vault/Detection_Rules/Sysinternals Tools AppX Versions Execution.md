---
type: detection_rule
title: "Sysinternals Tools AppX Versions Execution"
rule_id: d29a20b2-be4b-4827-81f2-3d8a59eab5fc
platform: windows
level: low
status: test
tags: [detection, sigma, windows]
---

# Sysinternals Tools AppX Versions Execution

## Description
Detects execution of Sysinternals tools via an AppX package.
Attackers could install the Sysinternals Suite to get access to tools such as psexec and procdump to avoid detection based on System paths.

## Log Source
```yaml
product: windows
service: appmodel-runtime
```

## Detection Logic
```yaml
condition: selection
selection:
  EventID: 201
  ImageName:
  - procdump.exe
  - psloglist.exe
  - psexec.exe
  - livekd.exe
  - ADExplorer.exe
```

## False Positives
- Legitimate usage of sysinternals applications from the Windows Store will trigger this. Apply exclusions as needed.

## References
- https://learn.microsoft.com/en-us/sysinternals/downloads/microsoft-store

## Metadata
- **Author:** Nasreddine Bencherchali (Nextron Systems)
- **Date:** 2023-01-16
- **Rule ID:** `d29a20b2-be4b-4827-81f2-3d8a59eab5fc`
- **Source file:** `windows/builtin/appmodel_runtime/win_appmodel_runtime_sysinternals_tools_appx_execution.yml`
