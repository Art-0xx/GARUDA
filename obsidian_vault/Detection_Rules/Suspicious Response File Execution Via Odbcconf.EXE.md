---
type: detection_rule
title: "Suspicious Response File Execution Via Odbcconf.EXE"
rule_id: 2d32dd6f-3196-4093-b9eb-1ad8ab088ca5
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1218.008]
---

# Suspicious Response File Execution Via Odbcconf.EXE

## Description
Detects execution of "odbcconf" with the "-f" flag in order to load a response file with a non-".rsp" extension.

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: all of selection_* and not 1 of filter_main_*
filter_main_rsp_ext:
  CommandLine|contains: .rsp
filter_main_runonce_odbc:
  CommandLine|contains: .exe /E /F "C:\WINDOWS\system32\odbcconf.tmp"
  Image: C:\Windows\System32\odbcconf.exe
  ParentImage: C:\Windows\System32\runonce.exe
selection_cli:
  CommandLine|contains|windash: ' -f '
selection_img:
- Image|endswith: \odbcconf.exe
- OriginalFileName: odbcconf.exe
```

## MITRE ATT&CK
- T1218.008

## False Positives
- Unlikely

## References
- https://learn.microsoft.com/en-us/sql/odbc/odbcconf-exe?view=sql-server-ver16
- https://lolbas-project.github.io/lolbas/Binaries/Odbcconf/
- https://www.trendmicro.com/en_us/research/17/h/backdoor-carrying-emails-set-sights-on-russian-speaking-businesses.html

## Metadata
- **Author:** Nasreddine Bencherchali (Nextron Systems)
- **Date:** 2023-05-22
- **Rule ID:** `2d32dd6f-3196-4093-b9eb-1ad8ab088ca5`
- **Source file:** `windows/process_creation/proc_creation_win_odbcconf_response_file_susp.yml`
