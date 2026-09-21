---
type: detection_rule
title: "Potential Dropper Script Execution Via WScript/CScript/MSHTA"
rule_id: cea72823-df4d-4567-950c-0b579eaf0846
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1059.005, attack.t1059.007]
---

# Potential Dropper Script Execution Via WScript/CScript/MSHTA

## Description
Detects wscript/cscript/mshta executions of scripts located in user directories

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: all of selection_*
selection_exec:
  Image|endswith:
  - \wscript.exe
  - \cscript.exe
  - \mshta.exe
selection_ext:
  CommandLine|contains:
  - .hta
  - .js
  - .jse
  - .vba
  - .vbe
  - .vbs
  - .wsf
  - .wsh
selection_paths:
  CommandLine|contains:
  - :\Perflogs\
  - :\Temp\
  - :\Tmp\
  - :\Users\Public\
  - :\Windows\Temp\
  - \AppData\Local\Temp\
  - \AppData\Roaming\Temp\
  - \Start Menu\Programs\Startup\
  - \Temporary Internet
  - \Windows\Temp
  - '%LocalAppData%\Temp\'
  - '%TEMP%'
  - '%TMP%'
```

## MITRE ATT&CK
- T1059.005
- T1059.007

## False Positives
- Some installers might generate a similar behavior. An initial baseline is required

## References
- https://thedfirreport.com/2023/10/30/netsupport-intrusion-results-in-domain-compromise/
- https://redcanary.com/blog/gootloader/
- https://www.microsoft.com/en-us/security/blog/2025/03/06/malvertising-campaign-leads-to-info-stealers-hosted-on-github/

## Metadata
- **Author:** Margaritis Dimitrios (idea), Florian Roth (Nextron Systems), oscd.community, Nasreddine Bencherchali (Nextron Systems), Dave Johnson
- **Date:** 2019-01-16
- **Rule ID:** `cea72823-df4d-4567-950c-0b579eaf0846`
- **Source file:** `windows/process_creation/proc_creation_win_wscript_cscript_mshta_dropper.yml`
