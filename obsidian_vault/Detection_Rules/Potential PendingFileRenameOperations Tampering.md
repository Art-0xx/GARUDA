---
type: detection_rule
title: "Potential PendingFileRenameOperations Tampering"
rule_id: 4eec988f-7bf0-49f1-8675-1e6a510b3a2a
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1036.003]
---

# Potential PendingFileRenameOperations Tampering

## Description
Detect changes to the "PendingFileRenameOperations" registry key from uncommon or suspicious images locations to stage currently used files for rename or deletion after reboot.

## Log Source
```yaml
category: registry_set
product: windows
```

## Detection Logic
```yaml
condition: selection_main and 1 of selection_susp_*
selection_main:
  TargetObject|contains: \CurrentControlSet\Control\Session Manager\PendingFileRenameOperations
selection_susp_images:
  Image|endswith:
  - \reg.exe
  - \regedit.exe
selection_susp_paths:
  Image|contains: \Users\Public\
```

## MITRE ATT&CK
- T1036.003

## False Positives
- Installers and updaters may set currently in use files for rename or deletion after a reboot.

## References
- https://any.run/report/3ecd4763ffc944fdc67a9027e459cd4f448b1a8d1b36147977afaf86bbf2a261/64b0ba45-e7ce-423b-9a1d-5b4ea59521e6
- https://devblogs.microsoft.com/scripting/determine-pending-reboot-statuspowershell-style-part-1/
- https://learn.microsoft.com/en-us/previous-versions/windows/it-pro/windows-2000-server/cc960241(v=technet.10)?redirectedfrom=MSDN
- https://www.trendmicro.com/en_us/research/21/j/purplefox-adds-new-backdoor-that-uses-websockets.html
- https://www.trendmicro.com/en_us/research/19/i/purple-fox-fileless-malware-with-rookit-component-delivered-by-rig-exploit-kit-now-abuses-powershell.html

## Metadata
- **Author:** frack113
- **Date:** 2023-01-27
- **Rule ID:** `4eec988f-7bf0-49f1-8675-1e6a510b3a2a`
- **Source file:** `windows/registry/registry_set/registry_set_susp_pendingfilerenameoperations.yml`
