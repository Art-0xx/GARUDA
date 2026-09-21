---
type: detection_rule
title: "Suspicious Usage Of Active Directory Diagnostic Tool (ntdsutil.exe)"
rule_id: a58353df-af43-4753-bad0-cd83ef35eef5
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1003.003]
---

# Suspicious Usage Of Active Directory Diagnostic Tool (ntdsutil.exe)

## Description
Detects execution of ntdsutil.exe to perform different actions such as restoring snapshots...etc.

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: all of selection_*
selection_cli:
- CommandLine|contains|all:
  - snapshot
  - 'mount '
- CommandLine|contains|all:
  - ac
  - ' i'
  - ' ntds'
selection_img:
- Image|endswith: \ntdsutil.exe
- OriginalFileName: ntdsutil.exe
```

## MITRE ATT&CK
- T1003.003

## False Positives
- Legitimate usage to restore snapshots
- Legitimate admin activity

## References
- https://learn.microsoft.com/en-us/previous-versions/windows/it-pro/windows-server-2012-r2-and-2012/cc731620(v=ws.11)
- https://symantec-enterprise-blogs.security.com/blogs/threat-intelligence/espionage-asia-governments

## Metadata
- **Author:** Nasreddine Bencherchali (Nextron Systems)
- **Date:** 2022-09-14
- **Rule ID:** `a58353df-af43-4753-bad0-cd83ef35eef5`
- **Source file:** `windows/process_creation/proc_creation_win_ntdsutil_susp_usage.yml`
