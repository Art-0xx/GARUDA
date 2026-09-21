---
type: detection_rule
title: "Local Accounts Discovery"
rule_id: 502b42de-4306-40b4-9596-6f590c81f073
platform: windows
level: low
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1033, attack.t1087.001]
---

# Local Accounts Discovery

## Description
Local accounts, System Owner/User discovery using operating systems utilities

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: (selection_cmd and not filter_cmd) or (selection_net and not filter_net)
  or 1 of selection_other_*
filter_cmd:
  CommandLine|contains: ' rmdir '
filter_net:
  CommandLine|contains:
  - /domain
  - /add
  - /delete
  - /active
  - /expires
  - /passwordreq
  - /scriptpath
  - /times
  - /workstations
selection_cmd:
  CommandLine|contains|all:
  - ' /c'
  - 'dir '
  - \Users\
  Image|endswith: \cmd.exe
selection_net:
  CommandLine|contains: user
  Image|endswith:
  - \net.exe
  - \net1.exe
selection_other_cmdkey:
  CommandLine|contains: ' /l'
  Image|endswith: \cmdkey.exe
selection_other_img:
- Image|endswith:
  - \whoami.exe
  - \quser.exe
  - \qwinsta.exe
- OriginalFileName:
  - whoami.exe
  - quser.exe
  - qwinsta.exe
selection_other_wmi:
  CommandLine|contains|all:
  - useraccount
  - get
  Image|endswith: \wmic.exe
```

## MITRE ATT&CK
- T1033
- T1087.001

## False Positives
- Legitimate administrator or user enumerates local users for legitimate reason

## References
- https://github.com/redcanaryco/atomic-red-team/blob/f339e7da7d05f6057fdfcdd3742bfcf365fee2a9/atomics/T1033/T1033.md

## Metadata
- **Author:** Timur Zinniatullin, Daniil Yugoslavskiy, oscd.community
- **Date:** 2019-10-21
- **Rule ID:** `502b42de-4306-40b4-9596-6f590c81f073`
- **Source file:** `windows/process_creation/proc_creation_win_susp_local_system_owner_account_discovery.yml`
