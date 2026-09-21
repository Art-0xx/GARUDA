---
type: detection_rule
title: "File Creation In Suspicious Directory By Msdt.EXE"
rule_id: 318557a5-150c-4c8d-b70e-a9910e199857
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1547.001]
---

# File Creation In Suspicious Directory By Msdt.EXE

## Description
Detects msdt.exe creating files in suspicious directories which could be a sign of exploitation of either Follina or Dogwalk vulnerabilities

## Log Source
```yaml
category: file_event
product: windows
```

## Detection Logic
```yaml
condition: selection
selection:
  Image|endswith: \msdt.exe
  TargetFilename|contains:
  - \Desktop\
  - \Start Menu\Programs\Startup\
  - C:\PerfLogs\
  - C:\ProgramData\
  - C:\Users\Public\
```

## MITRE ATT&CK
- T1547.001

## False Positives
- Unknown

## References
- https://irsl.medium.com/the-trouble-with-microsofts-troubleshooters-6e32fc80b8bd
- https://msrc-blog.microsoft.com/2022/05/30/guidance-for-cve-2022-30190-microsoft-support-diagnostic-tool-vulnerability/

## Metadata
- **Author:** Vadim Varganov, Florian Roth (Nextron Systems)
- **Date:** 2022-08-24
- **Rule ID:** `318557a5-150c-4c8d-b70e-a9910e199857`
- **Source file:** `windows/file/file_event/file_event_win_msdt_susp_directories.yml`
