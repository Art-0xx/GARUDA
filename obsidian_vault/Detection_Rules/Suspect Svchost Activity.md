---
type: detection_rule
title: "Suspect Svchost Activity"
rule_id: 16c37b52-b141-42a5-a3ea-bbe098444397
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1055]
---

# Suspect Svchost Activity

## Description
It is extremely abnormal for svchost.exe to spawn without any CLI arguments and is normally observed when a malicious process spawns the process and injects code into the process memory space.

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: selection and not filter
filter:
- ParentImage|endswith:
  - \rpcnet.exe
  - \rpcnetp.exe
- CommandLine: null
selection:
  CommandLine|endswith: svchost.exe
  Image|endswith: \svchost.exe
```

## MITRE ATT&CK
- T1055

## False Positives
- Rpcnet.exe / rpcnetp.exe which is a lojack style software. https://www.blackhat.com/docs/us-14/materials/us-14-Kamlyuk-Kamluk-Computrace-Backdoor-Revisited.pdf

## References
- https://web.archive.org/web/20180718061628/https://securitybytes.io/blue-team-fundamentals-part-two-windows-processes-759fe15965e2

## Metadata
- **Author:** David Burkett, @signalblur
- **Date:** 2019-12-28
- **Rule ID:** `16c37b52-b141-42a5-a3ea-bbe098444397`
- **Source file:** `windows/process_creation/proc_creation_win_svchost_execution_with_no_cli_flags.yml`
