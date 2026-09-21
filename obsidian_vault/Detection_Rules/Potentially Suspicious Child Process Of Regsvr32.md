---
type: detection_rule
title: "Potentially Suspicious Child Process Of Regsvr32"
rule_id: 6f0947a4-1c5e-4e0d-8ac7-53159b8f23ca
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1218.010]
---

# Potentially Suspicious Child Process Of Regsvr32

## Description
Detects potentially suspicious child processes of "regsvr32.exe".

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: selection and not 1 of filter_main_*
filter_main_werfault:
  CommandLine|contains: ' -u -p '
  Image|endswith: \werfault.exe
selection:
  Image|endswith:
  - \calc.exe
  - \cscript.exe
  - \explorer.exe
  - \mshta.exe
  - \net.exe
  - \net1.exe
  - \nltest.exe
  - \notepad.exe
  - \powershell.exe
  - \pwsh.exe
  - \reg.exe
  - \schtasks.exe
  - \werfault.exe
  - \wscript.exe
  ParentImage|endswith: \regsvr32.exe
```

## MITRE ATT&CK
- T1218.010

## False Positives
- Unlikely, but can rarely occur. Apply additional filters accordingly.

## References
- https://redcanary.com/blog/intelligence-insights-april-2022/
- https://www.echotrail.io/insights/search/regsvr32.exe
- https://www.ired.team/offensive-security/code-execution/t1117-regsvr32-aka-squiblydoo

## Metadata
- **Author:** elhoim, Florian Roth (Nextron Systems), Nasreddine Bencherchali (Nextron Systems)
- **Date:** 2022-05-05
- **Rule ID:** `6f0947a4-1c5e-4e0d-8ac7-53159b8f23ca`
- **Source file:** `windows/process_creation/proc_creation_win_regsvr32_susp_child_process.yml`
