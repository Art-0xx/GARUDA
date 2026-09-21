---
type: detection_rule
title: "Uncommon Child Process Spawned By Odbcconf.EXE"
rule_id: 8e3c7994-131e-4ba5-b6ea-804d49113a26
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1218.008]
---

# Uncommon Child Process Spawned By Odbcconf.EXE

## Description
Detects an uncommon child process of "odbcconf.exe" binary which normally shouldn't have any child processes.

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: selection
selection:
  ParentImage|endswith: \odbcconf.exe
```

## MITRE ATT&CK
- T1218.008

## False Positives
- In rare occurrences where "odbcconf" crashes. It might spawn a "werfault" process
- Other child processes will depend on the DLL being registered by actions like "regsvr". In case where the DLLs have external calls (which should be rare). Other child processes might spawn and additional filters need to be applied.

## References
- https://learn.microsoft.com/en-us/sql/odbc/odbcconf-exe?view=sql-server-ver16
- https://lolbas-project.github.io/lolbas/Binaries/Odbcconf/
- https://medium.com/@cyberjyot/t1218-008-dll-execution-using-odbcconf-exe-803fa9e08dac

## Metadata
- **Author:** Harjot Singh @cyb3rjy0t
- **Date:** 2023-05-22
- **Rule ID:** `8e3c7994-131e-4ba5-b6ea-804d49113a26`
- **Source file:** `windows/process_creation/proc_creation_win_odbcconf_uncommon_child_process.yml`
