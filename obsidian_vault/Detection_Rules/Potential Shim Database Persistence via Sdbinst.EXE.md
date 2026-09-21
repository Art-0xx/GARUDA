---
type: detection_rule
title: "Potential Shim Database Persistence via Sdbinst.EXE"
rule_id: 517490a7-115a-48c6-8862-1a481504d5a8
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1546.011]
---

# Potential Shim Database Persistence via Sdbinst.EXE

## Description
Detects installation of a new shim using sdbinst.exe.
Adversaries may establish persistence and/or elevate privileges by executing malicious content triggered by application shims

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: all of selection_* and not 1 of filter_optional_*
filter_optional_iis:
  CommandLine|contains:
  - :\Program Files (x86)\IIS Express\iisexpressshim.sdb
  - :\Program Files\IIS Express\iisexpressshim.sdb
  ParentImage|endswith: \msiexec.exe
selection_cli:
  CommandLine|contains: .sdb
selection_img:
- Image|endswith: \sdbinst.exe
- OriginalFileName: sdbinst.exe
```

## MITRE ATT&CK
- T1546.011

## False Positives
- Unknown

## References
- https://www.mandiant.com/resources/blog/fin7-shim-databases-persistence

## Metadata
- **Author:** Markus Neis
- **Date:** 2019-01-16
- **Rule ID:** `517490a7-115a-48c6-8862-1a481504d5a8`
- **Source file:** `windows/process_creation/proc_creation_win_sdbinst_shim_persistence.yml`
