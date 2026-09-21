---
type: detection_rule
title: "Service Reconnaissance Via Wmic.EXE"
rule_id: 76f55eaa-d27f-4213-9d45-7b0e4b60bbae
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1047]
---

# Service Reconnaissance Via Wmic.EXE

## Description
An adversary might use WMI to check if a certain remote service is running on a remote device.
When the test completes, a service information will be displayed on the screen if it exists.
A common feedback message is that "No instance(s) Available" if the service queried is not running.
A common error message is "Node - (provided IP or default) ERROR Description =The RPC server is unavailable" if the provided remote host is unreachable

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: all of selection_* and not 1 of filter_main_*
filter_main_manipulation:
  CommandLine|contains:
  - stopservice
  - startservice
filter_main_win32_methods:
  CommandLine|contains:
  - Change
  - Create
  - Delete
  - PauseService
  - ResumeService
  - SetSecurityDescriptor
  - StartService
  - StopService
  - UserControlService
selection_cli:
  CommandLine|contains: service
selection_img:
- Image|endswith: \WMIC.exe
- OriginalFileName: wmic.exe
```

## MITRE ATT&CK
- T1047

## False Positives
- Unknown

## References
- https://github.com/redcanaryco/atomic-red-team/blob/f339e7da7d05f6057fdfcdd3742bfcf365fee2a9/atomics/T1047/T1047.md
- https://learn.microsoft.com/en-us/windows-server/administration/windows-commands/wmic
- https://learn.microsoft.com/en-us/windows/win32/cimwin32prov/win32-service

## Metadata
- **Author:** frack113, Nasreddine Bencherchali (Nextron Systems)
- **Date:** 2023-02-14
- **Rule ID:** `76f55eaa-d27f-4213-9d45-7b0e4b60bbae`
- **Source file:** `windows/process_creation/proc_creation_win_wmic_recon_service.yml`
