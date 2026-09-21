---
type: detection_rule
title: "ManageEngine Endpoint Central Dctask64.EXE Potential Abuse"
rule_id: 6345b048-8441-43a7-9bed-541133633d7a
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1055.001]
---

# ManageEngine Endpoint Central Dctask64.EXE Potential Abuse

## Description
Detects the execution of "dctask64.exe", a signed binary by ZOHO Corporation part of ManageEngine Endpoint Central.
This binary can be abused for DLL injection, arbitrary command and process execution.

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: all of selection_*
selection_cli:
  CommandLine|contains:
  - ' executecmd64 '
  - ' invokeexe '
  - ' injectDll '
selection_img:
- Image|endswith: \dctask64.exe
- Hashes|contains:
  - IMPHASH=6834B1B94E49701D77CCB3C0895E1AFD
  - IMPHASH=1BB6F93B129F398C7C4A76BB97450BBA
  - IMPHASH=FAA2AC19875FADE461C8D89DCF2710A3
  - IMPHASH=F1039CED4B91572AB7847D26032E6BBF
```

## MITRE ATT&CK
- T1055.001

## False Positives
- Unknown

## References
- https://twitter.com/gN3mes1s/status/1222088214581825540
- https://twitter.com/gN3mes1s/status/1222095963789111296
- https://twitter.com/gN3mes1s/status/1222095371175911424

## Metadata
- **Author:** Florian Roth (Nextron Systems), Nasreddine Bencherchali (Nextron Systems)
- **Date:** 2020-01-28
- **Rule ID:** `6345b048-8441-43a7-9bed-541133633d7a`
- **Source file:** `windows/process_creation/proc_creation_win_dctask64_arbitrary_command_and_dll_execution.yml`
