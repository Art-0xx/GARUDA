---
type: detection_rule
title: "Potential SMB Relay Attack Tool Execution"
rule_id: 5589ab4f-a767-433c-961d-c91f3f704db1
platform: windows
level: critical
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1557.001]
---

# Potential SMB Relay Attack Tool Execution

## Description
Detects different hacktools used for relay attacks on Windows for privilege escalation

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: 1 of selection_* and not 1 of filter_*
filter_hotpotatoes:
  Image|contains:
  - HotPotatoes6
  - HotPotatoes7
  - 'HotPotatoes '
selection_juicypotato_enum:
  CommandLine|contains: .exe -c "{
  CommandLine|endswith: '}" -z'
selection_pe:
  Image|contains:
  - PetitPotam
  - RottenPotato
  - HotPotato
  - JuicyPotato
  - \just_dce_
  - Juicy Potato
  - \temp\rot.exe
  - \Potato.exe
  - \SpoolSample.exe
  - \Responder.exe
  - \smbrelayx
  - \ntlmrelayx
  - \LocalPotato
selection_script:
  CommandLine|contains:
  - Invoke-Tater
  - ' smbrelay'
  - ' ntlmrelay'
  - 'cme smb '
  - ' /ntlm:NTLMhash '
  - Invoke-PetitPotam
  - '.exe -t * -p '
```

## MITRE ATT&CK
- T1557.001

## False Positives
- Legitimate files with these rare hacktool names

## References
- https://foxglovesecurity.com/2016/09/26/rotten-potato-privilege-escalation-from-service-accounts-to-system/
- https://pentestlab.blog/2017/04/13/hot-potato/
- https://github.com/ohpe/juicy-potato
- https://hunter2.gitbook.io/darthsidious/other/war-stories/domain-admin-in-30-minutes
- https://hunter2.gitbook.io/darthsidious/execution/responder-with-ntlm-relay-and-empire

## Metadata
- **Author:** Florian Roth (Nextron Systems)
- **Date:** 2021-07-24
- **Rule ID:** `5589ab4f-a767-433c-961d-c91f3f704db1`
- **Source file:** `windows/process_creation/proc_creation_win_hktl_relay_attacks_tools.yml`
