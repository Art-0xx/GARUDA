---
type: detection_rule
title: "SyncAppvPublishingServer Execute Arbitrary PowerShell Code"
rule_id: fbd7c32d-db2a-4418-b92c-566eb8911133
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1218]
---

# SyncAppvPublishingServer Execute Arbitrary PowerShell Code

## Description
Executes arbitrary PowerShell code using SyncAppvPublishingServer.exe.

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: all of selection_*
selection_cli:
  CommandLine|contains: '"n; '
selection_img:
- Image|endswith: \SyncAppvPublishingServer.exe
- OriginalFileName: syncappvpublishingserver.exe
```

## MITRE ATT&CK
- T1218

## False Positives
- App-V clients

## References
- https://github.com/redcanaryco/atomic-red-team/blob/f339e7da7d05f6057fdfcdd3742bfcf365fee2a9/atomics/T1218/T1218.md
- https://lolbas-project.github.io/lolbas/Binaries/Syncappvpublishingserver/

## Metadata
- **Author:** frack113
- **Date:** 2021-07-12
- **Rule ID:** `fbd7c32d-db2a-4418-b92c-566eb8911133`
- **Source file:** `windows/process_creation/proc_creation_win_lolbin_syncappvpublishingserver_execute_psh.yml`
