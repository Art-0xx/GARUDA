---
type: detection_rule
title: "Suspicious MsiExec Embedding Parent"
rule_id: 4a2a2c3e-209f-4d01-b513-4155a540b469
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1218.007]
---

# Suspicious MsiExec Embedding Parent

## Description
Adversaries may abuse msiexec.exe to proxy the execution of malicious payloads

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: selection and not 1 of filter*
filter_splunk_ufw:
  CommandLine|contains: C:\Program Files\SplunkUniversalForwarder\bin\
  Image|endswith: :\Windows\System32\cmd.exe
filter_vs:
- CommandLine|contains: \DismFoDInstall.cmd
- ParentCommandLine|contains|all:
  - '\MsiExec.exe -Embedding '
  - Global\MSI0000
selection:
  Image|endswith:
  - \powershell.exe
  - \pwsh.exe
  - \cmd.exe
  ParentCommandLine|contains|all:
  - MsiExec.exe
  - '-Embedding '
```

## MITRE ATT&CK
- T1218.007

## False Positives
- Unknown

## References
- https://github.com/redcanaryco/atomic-red-team/blob/f339e7da7d05f6057fdfcdd3742bfcf365fee2a9/atomics/T1218.007/T1218.007.md

## Metadata
- **Author:** frack113
- **Date:** 2022-04-16
- **Rule ID:** `4a2a2c3e-209f-4d01-b513-4155a540b469`
- **Source file:** `windows/process_creation/proc_creation_win_msiexec_embedding.yml`
