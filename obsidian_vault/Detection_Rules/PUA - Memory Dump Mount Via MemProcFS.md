---
type: detection_rule
title: "PUA - Memory Dump Mount Via MemProcFS"
rule_id: 8a1b2c3d-4e5f-6789-abcd-ef1234567890
platform: windows
level: high
status: experimental
tags: [detection, sigma, windows]
mitre_tags: [attack.t1003, attack.t1003.001, attack.t1003.004, attack.t1003.002]
---

# PUA - Memory Dump Mount Via MemProcFS

## Description
Detects execution of MemProcFS a memory forensics tool with the '-device' parameter.
MemProcFS mounts physical memory as a virtual file system, allowing direct access to process memory and system structures.
Threat actors were seen abusing this utility to mount memory dumps and then extract sensitive information from processes like LSASS or extract registry hives to obtain credentials, LSA secrets, SAM data, and cached domain credentials.
MemProcFS usage that is not part of authorized forensic analysis should be treated as suspicious and warrants further investigation.

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: all of selection_*
selection_cli:
  CommandLine|contains: -device
selection_img:
- Image|endswith: \MemProcFS.exe
- OriginalFileName: MemProcFS.exe
- Description: MemProcFS
```

## MITRE ATT&CK
- T1003
- T1003.001
- T1003.004
- T1003.002

## False Positives
- Legitimate use during memory forensics; if not part of authorized analysis, warrants urgent investigation

## References
- https://github.com/ufrisk/MemProcFS
- https://0xdf.gitlab.io/2024/10/05/htb-freelancer.html#
- https://www.huntress.com/blog/curling-for-data-a-dive-into-a-threat-actors-malicious-ttps

## Metadata
- **Author:** Swachchhanda Shrawan Poudel (Nextron Systems)
- **Date:** 2026-04-27
- **Rule ID:** `8a1b2c3d-4e5f-6789-abcd-ef1234567890`
- **Source file:** `windows/process_creation/proc_creation_win_pua_memprocfs.yml`
