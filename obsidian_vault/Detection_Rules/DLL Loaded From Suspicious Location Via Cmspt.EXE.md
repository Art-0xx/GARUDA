---
type: detection_rule
title: "DLL Loaded From Suspicious Location Via Cmspt.EXE"
rule_id: 75e508f7-932d-4ebc-af77-269237a84ce1
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1218.003]
---

# DLL Loaded From Suspicious Location Via Cmspt.EXE

## Description
Detects cmstp loading "dll" or "ocx" files from suspicious locations

## Log Source
```yaml
category: image_load
product: windows
```

## Detection Logic
```yaml
condition: selection
selection:
  ImageLoaded|contains:
  - \PerfLogs\
  - \ProgramData\
  - \Users\
  - \Windows\Temp\
  - C:\Temp\
  ImageLoaded|endswith:
  - .dll
  - .ocx
  Image|endswith: \cmstp.exe
```

## MITRE ATT&CK
- T1218.003

## False Positives
- Unikely

## References
- https://github.com/vadim-hunter/Detection-Ideas-Rules/blob/02bcbfc2bfb8b4da601bb30de0344ae453aa1afe/TTPs/Defense%20Evasion/T1218%20-%20Signed%20Binary%20Proxy%20Execution/T1218.003%20-%20CMSTP/Procedures.yaml

## Metadata
- **Author:** Nasreddine Bencherchali (Nextron Systems)
- **Date:** 2022-08-30
- **Rule ID:** `75e508f7-932d-4ebc-af77-269237a84ce1`
- **Source file:** `windows/image_load/image_load_cmstp_load_dll_from_susp_location.yml`
