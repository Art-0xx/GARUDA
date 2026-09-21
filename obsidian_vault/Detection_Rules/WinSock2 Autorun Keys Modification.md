---
type: detection_rule
title: "WinSock2 Autorun Keys Modification"
rule_id: d6c2ce7e-afb5-4337-9ca4-4b5254ed0565
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1547.001]
---

# WinSock2 Autorun Keys Modification

## Description
Detects modification of autostart extensibility point (ASEP) in registry.

## Log Source
```yaml
category: registry_set
product: windows
```

## Detection Logic
```yaml
condition: winsock_parameters_base and winsock_parameters and not filter
filter:
- Details: (Empty)
- Image: C:\Windows\System32\MsiExec.exe
- Image: C:\Windows\syswow64\MsiExec.exe
winsock_parameters:
  TargetObject|contains:
  - \Protocol_Catalog9\Catalog_Entries
  - \NameSpace_Catalog5\Catalog_Entries
winsock_parameters_base:
  TargetObject|contains: \System\CurrentControlSet\Services\WinSock2\Parameters
```

## MITRE ATT&CK
- T1547.001

## False Positives
- Legitimate software automatically (mostly, during installation) sets up autorun keys for legitimate reason
- Legitimate administrator sets up autorun keys for legitimate reason

## References
- https://github.com/redcanaryco/atomic-red-team/blob/f339e7da7d05f6057fdfcdd3742bfcf365fee2a9/atomics/T1547.001/T1547.001.md
- https://learn.microsoft.com/en-us/sysinternals/downloads/autoruns
- https://gist.github.com/GlebSukhodolskiy/0fc5fa5f482903064b448890db1eaf9d

## Metadata
- **Author:** Victor Sergeev, Daniil Yugoslavskiy, Gleb Sukhodolskiy, Timur Zinniatullin, oscd.community, Tim Shelton, frack113 (split)
- **Date:** 2019-10-25
- **Rule ID:** `d6c2ce7e-afb5-4337-9ca4-4b5254ed0565`
- **Source file:** `windows/registry/registry_set/registry_set_asep_reg_keys_modification_winsock2.yml`
