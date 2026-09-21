---
type: detection_rule
title: "Renamed PAExec Execution"
rule_id: c4e49831-1496-40cf-8ce1-b53f942b02f9
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1202]
---

# Renamed PAExec Execution

## Description
Detects execution of renamed version of PAExec. Often used by attackers

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: selection and not 1 of filter_main_*
filter_main_known_location:
- Image|endswith: \paexec.exe
- Image|startswith: C:\Windows\PAExec-
selection:
- Description: PAExec Application
- OriginalFileName: PAExec.exe
- Product|contains: PAExec
- Hashes|contains:
  - IMPHASH=11D40A7B7876288F919AB819CC2D9802
  - IMPHASH=6444f8a34e99b8f7d9647de66aabe516
  - IMPHASH=dfd6aa3f7b2b1035b76b718f1ddc689f
  - IMPHASH=1a6cca4d5460b1710a12dea39e4a592c
```

## MITRE ATT&CK
- T1202

## False Positives
- Weird admins that rename their tools
- Software companies that bundle PAExec with their software and rename it, so that it is less embarrassing
- When executed with the "-s" flag. PAExec will copy itself to the "C:\Windows\" directory with a different name. Usually like this "PAExec-[XXXXX]-[ComputerName]"

## References
- https://www.poweradmin.com/paexec/
- https://summit.fireeye.com/content/dam/fireeye-www/summit/cds-2018/presentations/cds18-technical-s05-att&cking-fin7.pdf

## Metadata
- **Author:** Florian Roth (Nextron Systems), Jason Lynch
- **Date:** 2021-05-22
- **Rule ID:** `c4e49831-1496-40cf-8ce1-b53f942b02f9`
- **Source file:** `windows/process_creation/proc_creation_win_renamed_paexec.yml`
