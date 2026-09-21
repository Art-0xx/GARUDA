---
type: detection_rule
title: "Suspicious SysAidServer Child"
rule_id: 60bfeac3-0d35-4302-8efb-1dd16f715bc6
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1210]
---

# Suspicious SysAidServer Child

## Description
Detects suspicious child processes of SysAidServer (as seen in MERCURY threat actor intrusions)

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: selection
selection:
  ParentCommandLine|contains: SysAidServer
  ParentImage|endswith:
  - \java.exe
  - \javaw.exe
```

## MITRE ATT&CK
- T1210

## False Positives
- Unknown

## References
- https://www.microsoft.com/security/blog/2022/08/25/mercury-leveraging-log4j-2-vulnerabilities-in-unpatched-systems-to-target-israeli-organizations/

## Metadata
- **Author:** Florian Roth (Nextron Systems)
- **Date:** 2022-08-26
- **Rule ID:** `60bfeac3-0d35-4302-8efb-1dd16f715bc6`
- **Source file:** `windows/process_creation/proc_creation_win_java_sysaidserver_susp_child_process.yml`
