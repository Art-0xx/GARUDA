---
type: detection_rule
title: "Data Export From MSSQL Table Via BCP.EXE"
rule_id: c615d676-f655-46b9-b913-78729021e5d7
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1048]
---

# Data Export From MSSQL Table Via BCP.EXE

## Description
Detects the execution of the BCP utility in order to export data from the database.
Attackers were seen saving their malware to a database column or table and then later extracting it via "bcp.exe" into a file.

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: all of selection_*
selection_cli:
  CommandLine|contains:
  - ' out '
  - ' queryout '
selection_img:
- Image|endswith: \bcp.exe
- OriginalFileName: BCP.exe
```

## MITRE ATT&CK
- T1048

## False Positives
- Legitimate data export operations.

## References
- https://docs.microsoft.com/en-us/sql/tools/bcp-utility
- https://asec.ahnlab.com/en/61000/
- https://asec.ahnlab.com/en/78944/
- https://www.huntress.com/blog/attacking-mssql-servers
- https://www.huntress.com/blog/attacking-mssql-servers-pt-ii

## Metadata
- **Author:** Omar Khaled (@beacon_exe), MahirAli Khan (in/mahiralikhan), Nasreddine Bencherchali (Nextron Systems)
- **Date:** 2024-08-20
- **Rule ID:** `c615d676-f655-46b9-b913-78729021e5d7`
- **Source file:** `windows/process_creation/proc_creation_win_bcp_export_data.yml`
