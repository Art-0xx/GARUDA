---
type: detection_rule
title: "Suspicious Diantz Download and Compress Into a CAB File"
rule_id: 185d7418-f250-42d0-b72e-0c8b70661e93
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1105]
---

# Suspicious Diantz Download and Compress Into a CAB File

## Description
Download and compress a remote file and store it in a cab file on local machine.

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: selection
selection:
  CommandLine|contains|all:
  - diantz.exe
  - ' \\\\'
  - .cab
```

## MITRE ATT&CK
- T1105

## False Positives
- Unknown

## References
- https://lolbas-project.github.io/lolbas/Binaries/Diantz/

## Metadata
- **Author:** frack113
- **Date:** 2021-11-26
- **Rule ID:** `185d7418-f250-42d0-b72e-0c8b70661e93`
- **Source file:** `windows/process_creation/proc_creation_win_lolbin_diantz_remote_cab.yml`
