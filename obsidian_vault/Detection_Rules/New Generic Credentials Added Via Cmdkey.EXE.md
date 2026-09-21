---
type: detection_rule
title: "New Generic Credentials Added Via Cmdkey.EXE"
rule_id: b1ec66c6-f4d1-4b5c-96dd-af28ccae7727
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1003.005]
---

# New Generic Credentials Added Via Cmdkey.EXE

## Description
Detects usage of "cmdkey.exe" to add generic credentials.
As an example, this can be used before connecting to an RDP session via command line interface.

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: all of selection_*
selection_cli_generic:
  CommandLine|contains|windash: ' -g'
selection_cli_password:
  CommandLine|contains|windash: ' -p'
selection_cli_user:
  CommandLine|contains|windash: ' -u'
selection_img:
- Image|endswith: \cmdkey.exe
- OriginalFileName: cmdkey.exe
```

## MITRE ATT&CK
- T1003.005

## False Positives
- Legitimate usage for administration purposes

## References
- https://github.com/redcanaryco/atomic-red-team/blob/f339e7da7d05f6057fdfcdd3742bfcf365fee2a9/atomics/T1021.001/T1021.001.md#t1021001---remote-desktop-protocol

## Metadata
- **Author:** frack113, Nasreddine Bencherchali (Nextron Systems)
- **Date:** 2023-02-03
- **Rule ID:** `b1ec66c6-f4d1-4b5c-96dd-af28ccae7727`
- **Source file:** `windows/process_creation/proc_creation_win_cmdkey_adding_generic_creds.yml`
