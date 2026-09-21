---
type: detection_rule
title: "PUA - Wsudo Suspicious Execution"
rule_id: bdeeabc9-ff2a-4a51-be59-bb253aac7891
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1059]
---

# PUA - Wsudo Suspicious Execution

## Description
Detects usage of wsudo (Windows Sudo Utility). Which is a tool that let the user execute programs with different permissions (System, Trusted Installer, Administrator...etc)

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: 1 of selection_*
selection_cli:
  CommandLine|contains:
  - -u System
  - -uSystem
  - -u TrustedInstaller
  - -uTrustedInstaller
  - ' --ti '
selection_metadata:
- Image|endswith: \wsudo.exe
- OriginalFileName: wsudo.exe
- Description: Windows sudo utility
- ParentImage|endswith: \wsudo-bridge.exe
```

## MITRE ATT&CK
- T1059

## False Positives
- Unknown

## References
- https://github.com/M2Team/Privexec/

## Metadata
- **Author:** Nasreddine Bencherchali (Nextron Systems)
- **Date:** 2022-12-02
- **Rule ID:** `bdeeabc9-ff2a-4a51-be59-bb253aac7891`
- **Source file:** `windows/process_creation/proc_creation_win_pua_wsudo_susp_execution.yml`
