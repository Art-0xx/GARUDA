---
type: detection_rule
title: "Response File Execution Via Odbcconf.EXE"
rule_id: 5f03babb-12db-4eec-8c82-7b4cb5580868
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1218.008]
---

# Response File Execution Via Odbcconf.EXE

## Description
Detects execution of "odbcconf" with the "-f" flag in order to load a response file which might contain a malicious action.

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: all of selection_*
selection_cli:
  CommandLine|contains|windash: ' -f '
selection_img:
- Image|endswith: \odbcconf.exe
- OriginalFileName: odbcconf.exe
selection_rsp_ext:
  CommandLine|contains: .rsp
```

## MITRE ATT&CK
- T1218.008

## False Positives
- The rule is looking for any usage of response file, which might generate false positive when this function is used legitimately. Investigate the contents of the ".rsp" file to determine if it is malicious and apply additional filters if necessary.

## References
- https://learn.microsoft.com/en-us/sql/odbc/odbcconf-exe?view=sql-server-ver16
- https://lolbas-project.github.io/lolbas/Binaries/Odbcconf/
- https://www.cybereason.com/blog/threat-analysis-report-bumblebee-loader-the-high-road-to-enterprise-domain-control
- https://www.hexacorn.com/blog/2020/08/23/odbcconf-lolbin-trifecta/

## Metadata
- **Author:** Kirill Kiryanov, Beyu Denis, Daniil Yugoslavskiy, oscd.community, Nasreddine Bencherchali (Nextron Systems)
- **Date:** 2023-05-22
- **Rule ID:** `5f03babb-12db-4eec-8c82-7b4cb5580868`
- **Source file:** `windows/process_creation/proc_creation_win_odbcconf_response_file.yml`
