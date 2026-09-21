---
type: detection_rule
title: "Regsvr32 DLL Execution With Uncommon Extension"
rule_id: 50919691-7302-437f-8e10-1fe088afa145
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1574]
---

# Regsvr32 DLL Execution With Uncommon Extension

## Description
Detects a "regsvr32" execution where the DLL doesn't contain a common file extension.

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: selection and not 1 of filter_main_* and not 1 of filter_optional_*
filter_main_empty_4688:
  CommandLine: ''
filter_main_legit_ext:
  CommandLine|contains:
  - .ax
  - .cpl
  - .dll
  - .ocx
filter_main_null_4688:
  CommandLine: null
filter_optional_avg:
  CommandLine|contains: .bav
filter_optional_pascal:
  CommandLine|contains: .ppl
selection:
- Image|endswith: \regsvr32.exe
- OriginalFileName: REGSVR32.EXE
```

## MITRE ATT&CK
- T1574

## False Positives
- Other legitimate extensions currently not in the list either from third party or specific Windows components.

## References
- https://app.any.run/tasks/34221348-072d-4b70-93f3-aa71f6ebecad/

## Metadata
- **Author:** Florian Roth (Nextron Systems)
- **Date:** 2019-07-17
- **Rule ID:** `50919691-7302-437f-8e10-1fe088afa145`
- **Source file:** `windows/process_creation/proc_creation_win_regsvr32_uncommon_extension.yml`
