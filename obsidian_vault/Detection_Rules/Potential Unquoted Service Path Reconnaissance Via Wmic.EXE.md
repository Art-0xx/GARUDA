---
type: detection_rule
title: "Potential Unquoted Service Path Reconnaissance Via Wmic.EXE"
rule_id: 68bcd73b-37ef-49cb-95fc-edc809730be6
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1047]
---

# Potential Unquoted Service Path Reconnaissance Via Wmic.EXE

## Description
Detects known WMI recon method to look for unquoted service paths using wmic. Often used by pentester and attacker enumeration scripts

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: all of selection_*
selection_cli:
  CommandLine|contains|all:
  - ' service get '
  - name,displayname,pathname,startmode
selection_img:
- OriginalFileName: wmic.exe
- Image|endswith: \WMIC.exe
```

## MITRE ATT&CK
- T1047

## False Positives
- Unknown

## References
- https://github.com/nccgroup/redsnarf/blob/35949b30106ae543dc6f2bc3f1be10c6d9a8d40e/redsnarf.py
- https://github.com/S3cur3Th1sSh1t/Creds/blob/eac23d67f7f90c7fc8e3130587d86158c22aa398/PowershellScripts/jaws-enum.ps1
- https://www.absolomb.com/2018-01-26-Windows-Privilege-Escalation-Guide/

## Metadata
- **Author:** Nasreddine Bencherchali (Nextron Systems)
- **Date:** 2022-06-20
- **Rule ID:** `68bcd73b-37ef-49cb-95fc-edc809730be6`
- **Source file:** `windows/process_creation/proc_creation_win_wmic_recon_unquoted_service_search.yml`
