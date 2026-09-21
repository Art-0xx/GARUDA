---
type: detection_rule
title: "Potentially Suspicious CMD Shell Output Redirect"
rule_id: 8e0bb260-d4b2-4fff-bb8d-3f82118e6892
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1218]
---

# Potentially Suspicious CMD Shell Output Redirect

## Description
Detects inline Windows shell commands redirecting output via the ">" symbol to a suspicious location.
This technique is sometimes used by malicious actors in order to redirect the output of reconnaissance commands such as "hostname" and "dir" to files for future exfiltration.

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: selection_img and 1 of selection_cli_*
selection_cli_1:
  CommandLine|contains:
  - '>?%APPDATA%\'
  - '>?%TEMP%\'
  - '>?%TMP%\'
  - '>?%USERPROFILE%\'
  - '>?C:\ProgramData\'
  - '>?C:\Temp\'
  - '>?C:\Users\Public\'
  - '>?C:\Windows\Temp\'
selection_cli_2:
  CommandLine|contains:
  - ' >'
  - '">'
  - '''>'
  CommandLine|contains|all:
  - C:\Users\
  - \AppData\Local\
selection_img:
- Image|endswith: \cmd.exe
- OriginalFileName: Cmd.Exe
```

## MITRE ATT&CK
- T1218

## False Positives
- Legitimate admin or third party scripts used for diagnostic collection might generate some false positives

## References
- https://thedfirreport.com/2022/07/11/select-xmrig-from-sqlserver/

## Metadata
- **Author:** Nasreddine Bencherchali (Nextron Systems)
- **Date:** 2022-07-12
- **Rule ID:** `8e0bb260-d4b2-4fff-bb8d-3f82118e6892`
- **Source file:** `windows/process_creation/proc_creation_win_cmd_redirection_susp_folder.yml`
