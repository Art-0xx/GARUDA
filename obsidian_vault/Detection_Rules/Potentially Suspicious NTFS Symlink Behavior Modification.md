---
type: detection_rule
title: "Potentially Suspicious NTFS Symlink Behavior Modification"
rule_id: c0b2768a-dd06-4671-8339-b16ca8d1f27f
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1059, attack.t1222.001]
---

# Potentially Suspicious NTFS Symlink Behavior Modification

## Description
Detects the modification of NTFS symbolic link behavior using fsutil, which could be used to enable remote to local or remote to remote symlinks for potential attacks.

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: all of selection_*
selection_fsutil_cli:
  CommandLine|contains|all:
  - fsutil
  - behavior
  - set
  - SymlinkEvaluation
selection_img_proxy:
- Image|endswith:
  - \cmd.exe
  - \powershell.exe
  - \pwsh.exe
- OriginalFileName:
  - Cmd.Exe
  - PowerShell.EXE
  - pwsh.dll
selection_symlink_params:
  CommandLine|contains:
  - R2L:1
  - R2R:1
  - L2L:1
```

## MITRE ATT&CK
- T1059
- T1222.001

## False Positives
- Legitimate usage, investigate the parent process and context to determine if benign.

## References
- https://www.cybereason.com/blog/cybereason-vs.-blackcat-ransomware
- https://learn.microsoft.com/fr-fr/windows-server/administration/windows-commands/fsutil-behavior
- https://thedfirreport.com/2025/06/30/hide-your-rdp-password-spray-leads-to-ransomhub-deployment/

## Metadata
- **Author:** frack113, The DFIR Report
- **Date:** 2022-03-02
- **Rule ID:** `c0b2768a-dd06-4671-8339-b16ca8d1f27f`
- **Source file:** `windows/process_creation/proc_creation_win_fsutil_symlinkevaluation.yml`
