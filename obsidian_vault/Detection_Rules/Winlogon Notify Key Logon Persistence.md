---
type: detection_rule
title: "Winlogon Notify Key Logon Persistence"
rule_id: bbf59793-6efb-4fa1-95ca-a7d288e52c88
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1547.004]
---

# Winlogon Notify Key Logon Persistence

## Description
Adversaries may abuse features of Winlogon to execute DLLs and/or executables when a user logs in.
Winlogon.exe is a Windows component responsible for actions at logon/logoff as well as the secure attention sequence (SAS) triggered by Ctrl-Alt-Delete.

## Log Source
```yaml
category: registry_set
product: windows
```

## Detection Logic
```yaml
condition: selection
selection:
  Details|endswith: .dll
  TargetObject|endswith: \SOFTWARE\Microsoft\Windows NT\CurrentVersion\Winlogon\Notify\logon
```

## MITRE ATT&CK
- T1547.004

## False Positives
- Unknown

## References
- https://github.com/redcanaryco/atomic-red-team/blob/f339e7da7d05f6057fdfcdd3742bfcf365fee2a9/atomics/T1547.004/T1547.004.md#atomic-test-3---winlogon-notify-key-logon-persistence---powershell

## Metadata
- **Author:** frack113
- **Date:** 2021-12-30
- **Rule ID:** `bbf59793-6efb-4fa1-95ca-a7d288e52c88`
- **Source file:** `windows/registry/registry_set/registry_set_winlogon_notify_key.yml`
