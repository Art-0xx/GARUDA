---
type: detection_rule
title: "Verclsid.exe Runs COM Object"
rule_id: d06be4b9-8045-428b-a567-740a26d9db25
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1218]
---

# Verclsid.exe Runs COM Object

## Description
Detects when verclsid.exe is used to run COM object via GUID

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: all of selection_* and not 1 of filter_main_*
filter_main_runtimebroker:
  CommandLine|contains|all:
  - verclsid.exe" /S /C {
  - '} /I {'
  ParentImage|endswith: C:\Windows\System32\RuntimeBroker.exe
selection_cli:
  CommandLine|contains|all:
  - /S
  - /C
selection_img:
- Image|endswith: \verclsid.exe
- OriginalFileName: verclsid.exe
```

## MITRE ATT&CK
- T1218

## False Positives
- Unknown

## References
- https://lolbas-project.github.io/lolbas/Binaries/Verclsid/
- https://gist.github.com/NickTyrer/0598b60112eaafe6d07789f7964290d5
- https://bohops.com/2018/08/18/abusing-the-com-registry-structure-part-2-loading-techniques-for-evasion-and-persistence/

## Metadata
- **Author:** Victor Sergeev, oscd.community
- **Date:** 2020-10-09
- **Rule ID:** `d06be4b9-8045-428b-a567-740a26d9db25`
- **Source file:** `windows/process_creation/proc_creation_win_verclsid_runs_com.yml`
