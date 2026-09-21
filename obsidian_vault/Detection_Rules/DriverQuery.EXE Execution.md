---
type: detection_rule
title: "DriverQuery.EXE Execution"
rule_id: a20def93-0709-4eae-9bd2-31206e21e6b2
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
---

# DriverQuery.EXE Execution

## Description
Detect usage of the "driverquery" utility. Which can be used to perform reconnaissance on installed drivers

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: selection and not 1 of filter_main_*
filter_main_other:
- ParentImage|endswith:
  - \cscript.exe
  - \mshta.exe
  - \regsvr32.exe
  - \rundll32.exe
  - \wscript.exe
- ParentImage|contains:
  - \AppData\Local\
  - \Users\Public\
  - \Windows\Temp\
selection:
- Image|endswith: driverquery.exe
- OriginalFileName: drvqry.exe
```

## False Positives
- Legitimate use by third party tools in order to investigate installed drivers

## References
- https://thedfirreport.com/2023/01/09/unwrapping-ursnifs-gifts/
- https://www.vmray.com/cyber-security-blog/analyzing-ursnif-behavior-malware-sandbox/
- https://www.fireeye.com/blog/threat-research/2020/01/saigon-mysterious-ursnif-fork.html

## Metadata
- **Author:** Nasreddine Bencherchali (Nextron Systems)
- **Date:** 2023-01-19
- **Rule ID:** `a20def93-0709-4eae-9bd2-31206e21e6b2`
- **Source file:** `windows/process_creation/proc_creation_win_driverquery_usage.yml`
