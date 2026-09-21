---
type: detection_rule
title: "LOLBIN Execution From Abnormal Drive"
rule_id: d4ca7c59-e9e4-42d8-bf57-91a776efcb87
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
---

# LOLBIN Execution From Abnormal Drive

## Description
Detects LOLBINs executing from an abnormal or uncommon drive such as a mounted ISO.

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: selection and not 1 of filter_main_*
filter_main_currentdirectory:
  CurrentDirectory|contains: C:\
filter_main_empty:
  CurrentDirectory: ''
filter_main_null:
  CurrentDirectory: null
selection:
- Image|endswith:
  - \calc.exe
  - \certutil.exe
  - \cmstp.exe
  - \cscript.exe
  - \installutil.exe
  - \mshta.exe
  - \regsvr32.exe
  - \rundll32.exe
  - \wscript.exe
- OriginalFileName:
  - CALC.EXE
  - CertUtil.exe
  - CMSTP.EXE
  - cscript.exe
  - installutil.exe
  - MSHTA.EXE
  - REGSVR32.EXE
  - RUNDLL32.EXE
  - wscript.exe
```

## False Positives
- Rare false positives could occur on servers with multiple drives.

## References
- https://thedfirreport.com/2021/12/13/diavol-ransomware/
- https://www.scythe.io/library/threat-emulation-qakbot
- https://sec-consult.com/blog/detail/bumblebee-hunting-with-a-velociraptor/

## Metadata
- **Author:** Christopher Peacock '@securepeacock', SCYTHE '@scythe_io', Angelo Violetti - SEC Consult '@angelo_violetti', Aaron Herman
- **Date:** 2022-01-25
- **Rule ID:** `d4ca7c59-e9e4-42d8-bf57-91a776efcb87`
- **Source file:** `windows/process_creation/proc_creation_win_susp_lolbin_exec_from_non_c_drive.yml`
