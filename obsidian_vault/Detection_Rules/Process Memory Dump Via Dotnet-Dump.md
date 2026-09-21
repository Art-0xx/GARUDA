---
type: detection_rule
title: "Process Memory Dump Via Dotnet-Dump"
rule_id: 53d8d3e1-ca33-4012-adf3-e05a4d652e34
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1218]
---

# Process Memory Dump Via Dotnet-Dump

## Description
Detects the execution of "dotnet-dump" with the "collect" flag. The execution could indicate potential process dumping of critical processes such as LSASS.

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: all of selection_*
selection_cli:
  CommandLine|contains: collect
selection_img:
- Image|endswith: \dotnet-dump.exe
- OriginalFileName: dotnet-dump.dll
```

## MITRE ATT&CK
- T1218

## False Positives
- Process dumping is the expected behavior of the tool. So false positives are expected in legitimate usage. The PID/Process Name of the process being dumped needs to be investigated

## References
- https://learn.microsoft.com/en-us/dotnet/core/diagnostics/dotnet-dump#dotnet-dump-collect
- https://twitter.com/bohops/status/1635288066909966338

## Metadata
- **Author:** Nasreddine Bencherchali (Nextron Systems)
- **Date:** 2023-03-14
- **Rule ID:** `53d8d3e1-ca33-4012-adf3-e05a4d652e34`
- **Source file:** `windows/process_creation/proc_creation_win_dotnetdump_memory_dump.yml`
