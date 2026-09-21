---
type: detection_rule
title: "Remote Thread Creation In Mstsc.Exe From Suspicious Location"
rule_id: c0aac16a-b1e7-4330-bab0-3c27bb4987c7
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
---

# Remote Thread Creation In Mstsc.Exe From Suspicious Location

## Description
Detects remote thread creation in the "mstsc.exe" process by a process located in a potentially suspicious location.
This technique is often used by attackers in order to hook some APIs used by DLLs loaded by "mstsc.exe" during RDP authentications in order to steal credentials.

## Log Source
```yaml
category: create_remote_thread
product: windows
```

## Detection Logic
```yaml
condition: selection
selection:
  SourceImage|contains:
  - :\Temp\
  - :\Users\Public\
  - :\Windows\PerfLogs\
  - :\Windows\Tasks\
  - :\Windows\Temp\
  - \AppData\Local\Temp\
  TargetImage|endswith: \mstsc.exe
```

## False Positives
- Unknown

## References
- https://github.com/S12cybersecurity/RDPCredentialStealer/blob/1b8947cdd065a06c1b62e80967d3c7af895fcfed/APIHookInjectorBin/APIHookInjectorBin/Inject.h#L25

## Metadata
- **Author:** Nasreddine Bencherchali (Nextron Systems)
- **Date:** 2023-07-28
- **Rule ID:** `c0aac16a-b1e7-4330-bab0-3c27bb4987c7`
- **Source file:** `windows/create_remote_thread/create_remote_thread_win_mstsc_susp_location.yml`
