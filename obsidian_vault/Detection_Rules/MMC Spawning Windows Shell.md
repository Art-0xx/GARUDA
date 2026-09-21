---
type: detection_rule
title: "MMC Spawning Windows Shell"
rule_id: 05a2ab7e-ce11-4b63-86db-ab32e763e11d
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1021.003]
---

# MMC Spawning Windows Shell

## Description
Detects a Windows command line executable started from MMC

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: all of selection*
selection1:
  ParentImage|endswith: \mmc.exe
selection2:
- Image|endswith:
  - \cmd.exe
  - \powershell.exe
  - \pwsh.exe
  - \wscript.exe
  - \cscript.exe
  - \sh.exe
  - \bash.exe
  - \reg.exe
  - \regsvr32.exe
- Image|contains: \BITSADMIN
```

## MITRE ATT&CK
- T1021.003

## References
- https://enigma0x3.net/2017/01/05/lateral-movement-using-the-mmc20-application-com-object/

## Metadata
- **Author:** Karneades, Swisscom CSIRT
- **Date:** 2019-08-05
- **Rule ID:** `05a2ab7e-ce11-4b63-86db-ab32e763e11d`
- **Source file:** `windows/process_creation/proc_creation_win_mmc_susp_child_process.yml`
