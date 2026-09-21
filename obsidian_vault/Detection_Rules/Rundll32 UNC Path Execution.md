---
type: detection_rule
title: "Rundll32 UNC Path Execution"
rule_id: 5cdb711b-5740-4fb2-ba88-f7945027afac
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1021.002, attack.t1218.011]
---

# Rundll32 UNC Path Execution

## Description
Detects rundll32 execution where the DLL is located on a remote location (share).
Threat actors can abuse the rundll32.exe binary to execute remote DLLs from a UNC pathh.

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: all of selection_* and not 1 of filter_main_*
filter_main_cli_pipe:
  CommandLine|contains: \\\\.\\pipe
selection_cli:
  CommandLine|contains:
  - ' \\\\'
  - ' ''\\\\'
  - ' "\\\\'
selection_img:
- Image|endswith: \rundll32.exe
- OriginalFileName: RUNDLL32.EXE
- CommandLine|contains: rundll32
```

## MITRE ATT&CK
- T1021.002
- T1218.011

## False Positives
- Unlikely

## References
- https://www.cybereason.com/blog/rundll32-the-infamous-proxy-for-executing-malicious-code
- https://www.microsoft.com/en-us/security/blog/2026/07/16/acr-stealer-two-observed-intrusion-chains-amid-increased-threat-activity/

## Metadata
- **Author:** Nasreddine Bencherchali (Nextron Systems)
- **Date:** 2022-08-10
- **Rule ID:** `5cdb711b-5740-4fb2-ba88-f7945027afac`
- **Source file:** `windows/process_creation/proc_creation_win_rundll32_unc_path.yml`
