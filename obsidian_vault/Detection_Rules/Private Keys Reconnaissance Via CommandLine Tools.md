---
type: detection_rule
title: "Private Keys Reconnaissance Via CommandLine Tools"
rule_id: 213d6a77-3d55-4ce8-ba74-fcfef741974e
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1552.004]
---

# Private Keys Reconnaissance Via CommandLine Tools

## Description
Adversaries may search for private key certificate files on compromised systems for insecurely stored credential

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: selection_ext and (all of selection_cmd_* or all of selection_pwsh_* or
  selection_findstr)
selection_cmd_cli:
  CommandLine|contains: 'dir '
selection_cmd_img:
- Image|endswith: \cmd.exe
- OriginalFileName: Cmd.Exe
selection_ext:
  CommandLine|contains:
  - .key
  - .pgp
  - .gpg
  - .ppk
  - .p12
  - .pem
  - .pfx
  - .cer
  - .p7b
  - .asc
selection_findstr:
- Image|endswith: \findstr.exe
- OriginalFileName: FINDSTR.EXE
selection_pwsh_cli:
  CommandLine|contains: 'Get-ChildItem '
selection_pwsh_img:
- Image|endswith:
  - \powershell.exe
  - \pwsh.exe
- OriginalFileName:
  - PowerShell.EXE
  - pwsh.dll
```

## MITRE ATT&CK
- T1552.004

## False Positives
- Unknown

## References
- https://github.com/redcanaryco/atomic-red-team/blob/f339e7da7d05f6057fdfcdd3742bfcf365fee2a9/atomics/T1552.004/T1552.004.md

## Metadata
- **Author:** frack113, Nasreddine Bencherchali (Nextron Systems)
- **Date:** 2021-07-20
- **Rule ID:** `213d6a77-3d55-4ce8-ba74-fcfef741974e`
- **Source file:** `windows/process_creation/proc_creation_win_susp_private_keys_recon.yml`
