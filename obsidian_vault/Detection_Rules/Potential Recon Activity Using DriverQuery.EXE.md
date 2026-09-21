---
type: detection_rule
title: "Potential Recon Activity Using DriverQuery.EXE"
rule_id: 9fc3072c-dc8f-4bf7-b231-18950000fadd
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
---

# Potential Recon Activity Using DriverQuery.EXE

## Description
Detect usage of the "driverquery" utility to perform reconnaissance on installed drivers

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: all of selection_*
selection_img:
- Image|endswith: driverquery.exe
- OriginalFileName: drvqry.exe
selection_parent:
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
```

## False Positives
- Legitimate usage by some scripts might trigger this as well

## References
- https://thedfirreport.com/2023/01/09/unwrapping-ursnifs-gifts/
- https://www.vmray.com/cyber-security-blog/analyzing-ursnif-behavior-malware-sandbox/
- https://www.fireeye.com/blog/threat-research/2020/01/saigon-mysterious-ursnif-fork.html

## Metadata
- **Author:** Nasreddine Bencherchali (Nextron Systems)
- **Date:** 2023-01-19
- **Rule ID:** `9fc3072c-dc8f-4bf7-b231-18950000fadd`
- **Source file:** `windows/process_creation/proc_creation_win_driverquery_recon.yml`
