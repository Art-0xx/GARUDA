---
type: detection_rule
title: "Process Execution From A Potentially Suspicious Folder"
rule_id: 3dfd06d2-eaf4-4532-9555-68aca59f57c4
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1036]
---

# Process Execution From A Potentially Suspicious Folder

## Description
Detects a potentially suspicious execution from an uncommon folder.

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: selection and not 1 of filter_optional_*
filter_optional_citrix:
  Image|endswith: \CitrixReceiverUpdater.exe
  Image|startswith: C:\Windows\SysWOW64\config\systemprofile\Citrix\UpdaterBinaries\
filter_optional_ibm:
  Image|startswith: C:\Users\Public\IBM\ClientSolutions\Start_Programs\
selection:
  Image|contains:
  - :\Perflogs\
  - :\Users\All Users\
  - :\Users\Default\
  - :\Users\NetworkService\
  - :\Windows\addins\
  - :\Windows\debug\
  - :\Windows\Fonts\
  - :\Windows\Help\
  - :\Windows\IME\
  - :\Windows\Media\
  - :\Windows\repair\
  - :\Windows\security\
  - :\Windows\System32\Tasks\
  - :\Windows\Tasks\
  - $Recycle.bin
  - \config\systemprofile\
  - \Intel\Logs\
  - \RSA\MachineKeys\
```

## MITRE ATT&CK
- T1036

## False Positives
- Unknown

## References
- https://github.com/mbevilacqua/appcompatprocessor/blob/6c847937c5a836e2ce2fe2b915f213c345a3c389/AppCompatSearch.txt
- https://www.secureworks.com/research/bronze-butler-targets-japanese-businesses
- https://www.crowdstrike.com/resources/reports/2019-crowdstrike-global-threat-report/
- https://github.com/ThreatHuntingProject/ThreatHunting/blob/cb22598bb70651f88e0285abc8d835757d2cb596/hunts/suspicious_process_creation_via_windows_event_logs.md

## Metadata
- **Author:** Florian Roth (Nextron Systems), Tim Shelton
- **Date:** 2019-01-16
- **Rule ID:** `3dfd06d2-eaf4-4532-9555-68aca59f57c4`
- **Source file:** `windows/process_creation/proc_creation_win_susp_execution_path.yml`
