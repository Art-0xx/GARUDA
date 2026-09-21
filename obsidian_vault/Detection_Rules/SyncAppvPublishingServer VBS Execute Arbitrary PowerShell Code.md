---
type: detection_rule
title: "SyncAppvPublishingServer VBS Execute Arbitrary PowerShell Code"
rule_id: 36475a7d-0f6d-4dce-9b01-6aeb473bbaf1
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1218, attack.t1216]
---

# SyncAppvPublishingServer VBS Execute Arbitrary PowerShell Code

## Description
Executes arbitrary PowerShell code using SyncAppvPublishingServer.vbs

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: selection
selection:
  CommandLine|contains|all:
  - \SyncAppvPublishingServer.vbs
  - ;
```

## MITRE ATT&CK
- T1218
- T1216

## False Positives
- Unknown

## References
- https://github.com/redcanaryco/atomic-red-team/blob/f339e7da7d05f6057fdfcdd3742bfcf365fee2a9/atomics/T1216/T1216.md
- https://lolbas-project.github.io/lolbas/Binaries/Syncappvpublishingserver/

## Metadata
- **Author:** frack113
- **Date:** 2021-07-16
- **Rule ID:** `36475a7d-0f6d-4dce-9b01-6aeb473bbaf1`
- **Source file:** `windows/process_creation/proc_creation_win_lolbin_syncappvpublishingserver_vbs_execute_psh.yml`
