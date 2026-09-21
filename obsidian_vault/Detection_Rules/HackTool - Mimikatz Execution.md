---
type: detection_rule
title: "HackTool - Mimikatz Execution"
rule_id: a642964e-bead-4bed-8910-1bb4d63e3b4d
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1003.001, attack.t1003.002, attack.t1003.004, attack.t1003.005, attack.t1003.006]
---

# HackTool - Mimikatz Execution

## Description
Detection well-known mimikatz command line arguments

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: 1 of selection_*
selection_function_names:
  CommandLine|contains:
  - ::aadcookie
  - ::detours
  - ::memssp
  - ::mflt
  - ::ncroutemon
  - ::ngcsign
  - ::printnightmare
  - ::skeleton
  - ::preshutdown
  - ::mstsc
  - ::multirdp
selection_module_names:
  CommandLine|contains:
  - 'rpc::'
  - 'token::'
  - 'crypto::'
  - 'dpapi::'
  - 'sekurlsa::'
  - 'kerberos::'
  - 'lsadump::'
  - 'privilege::'
  - 'process::'
  - 'vault::'
selection_tools_name:
  CommandLine|contains:
  - DumpCreds
  - mimikatz
```

## MITRE ATT&CK
- T1003.001
- T1003.002
- T1003.004
- T1003.005
- T1003.006

## False Positives
- Unlikely

## References
- https://www.slideshare.net/heirhabarov/hunting-for-credentials-dumping-in-windows-environment
- https://tools.thehacker.recipes/mimikatz/modules

## Metadata
- **Author:** Teymur Kheirkhabarov, oscd.community, David ANDRE (additional keywords), Tim Shelton
- **Date:** 2019-10-22
- **Rule ID:** `a642964e-bead-4bed-8910-1bb4d63e3b4d`
- **Source file:** `windows/process_creation/proc_creation_win_hktl_mimikatz_command_line.yml`
