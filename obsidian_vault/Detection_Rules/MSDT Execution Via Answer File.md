---
type: detection_rule
title: "MSDT Execution Via Answer File"
rule_id: 9c8c7000-3065-44a8-a555-79bcba5d9955
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1218]
---

# MSDT Execution Via Answer File

## Description
Detects execution of "msdt.exe" using an answer file which is simulating the legitimate way of calling msdt via "pcwrun.exe" (For example from the compatibility tab).

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: selection and not 1 of filter_main_*
filter_main_pcwrun:
  ParentImage|endswith: \pcwrun.exe
selection:
  CommandLine|contains: \WINDOWS\diagnostics\index\PCWDiagnostic.xml
  CommandLine|contains|windash: ' -af '
  Image|endswith: \msdt.exe
```

## MITRE ATT&CK
- T1218

## False Positives
- Possible undocumented parents of "msdt" other than "pcwrun".

## References
- https://lolbas-project.github.io/lolbas/Binaries/Msdt/

## Metadata
- **Author:** Nasreddine Bencherchali (Nextron Systems)
- **Date:** 2022-06-13
- **Rule ID:** `9c8c7000-3065-44a8-a555-79bcba5d9955`
- **Source file:** `windows/process_creation/proc_creation_win_msdt_answer_file_exec.yml`
