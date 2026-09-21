---
type: detection_rule
title: "Dllhost.EXE Execution Anomaly"
rule_id: e7888eb1-13b0-4616-bd99-4bc0c2b054b9
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1055]
---

# Dllhost.EXE Execution Anomaly

## Description
Detects a "dllhost" process spawning with no commandline arguments which is very rare to happen and could indicate process injection activity or malware mimicking similar system processes.

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: selection and not 1 of filter_main_*
filter_main_null:
  CommandLine: null
selection:
  CommandLine:
  - dllhost.exe
  - dllhost
  Image|endswith: \dllhost.exe
```

## MITRE ATT&CK
- T1055

## False Positives
- Unlikely

## References
- https://redcanary.com/blog/child-processes/
- https://nasbench.medium.com/what-is-the-dllhost-exe-process-actually-running-ef9fe4c19c08
- https://www.ncsc.gov.uk/static-assets/documents/malware-analysis-reports/goofy-guineapig/NCSC-MAR-Goofy-Guineapig.pdf

## Metadata
- **Author:** Nasreddine Bencherchali (Nextron Systems)
- **Date:** 2022-06-27
- **Rule ID:** `e7888eb1-13b0-4616-bd99-4bc0c2b054b9`
- **Source file:** `windows/process_creation/proc_creation_win_dllhost_no_cli_execution.yml`
