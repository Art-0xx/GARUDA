---
type: detection_rule
title: "Conhost Spawned By Uncommon Parent Process"
rule_id: cbb9e3d1-2386-4e59-912e-62f1484f7a89
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1059]
---

# Conhost Spawned By Uncommon Parent Process

## Description
Detects when the Console Window Host (conhost.exe) process is spawned by an uncommon parent process, which could be indicative of potential code injection activity.

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: selection and not 1 of filter_main_* and not 1 of filter_optional_*
filter_main_svchost:
  ParentCommandLine|contains:
  - -k apphost -s AppHostSvc
  - -k imgsvc
  - -k localService -p -s RemoteRegistry
  - -k LocalSystemNetworkRestricted -p -s NgcSvc
  - -k NetSvcs -p -s NcaSvc
  - -k netsvcs -p -s NetSetupSvc
  - -k netsvcs -p -s wlidsvc
  - -k NetworkService -p -s DoSvc
  - -k wsappx -p -s AppXSvc
  - -k wsappx -p -s ClipSVC
  - -k wusvcs -p -s WaaSMedicSvc
filter_optional_dropbox:
  ParentCommandLine|contains:
  - C:\Program Files (x86)\Dropbox\Client\
  - C:\Program Files\Dropbox\Client\
selection:
  Image|endswith: \conhost.exe
  ParentImage|endswith:
  - \explorer.exe
  - \lsass.exe
  - \regsvr32.exe
  - \rundll32.exe
  - \services.exe
  - \smss.exe
  - \spoolsv.exe
  - \svchost.exe
  - \userinit.exe
  - \wininit.exe
  - \winlogon.exe
```

## MITRE ATT&CK
- T1059

## False Positives
- Unknown

## References
- https://www.elastic.co/guide/en/security/current/conhost-spawned-by-suspicious-parent-process.html

## Metadata
- **Author:** Tim Rauch, Elastic (idea)
- **Date:** 2022-09-28
- **Rule ID:** `cbb9e3d1-2386-4e59-912e-62f1484f7a89`
- **Source file:** `windows/process_creation/proc_creation_win_conhost_uncommon_parent.yml`
