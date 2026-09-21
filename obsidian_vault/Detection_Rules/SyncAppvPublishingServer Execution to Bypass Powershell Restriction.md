---
type: detection_rule
title: "SyncAppvPublishingServer Execution to Bypass Powershell Restriction"
rule_id: dddfebae-c46f-439c-af7a-fdb6bde90218
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1218]
---

# SyncAppvPublishingServer Execution to Bypass Powershell Restriction

## Description
Detects SyncAppvPublishingServer process execution which usually utilized by adversaries to bypass PowerShell execution restrictions.

## Log Source
```yaml
category: ps_script
definition: 'Requirements: Script Block Logging must be enabled'
product: windows
```

## Detection Logic
```yaml
condition: selection
selection:
  ScriptBlockText|contains: SyncAppvPublishingServer.exe
```

## MITRE ATT&CK
- T1218

## False Positives
- App-V clients

## References
- https://lolbas-project.github.io/lolbas/Binaries/Syncappvpublishingserver/

## Metadata
- **Author:** Ensar Şamil, @sblmsrsn, OSCD Community
- **Date:** 2020-10-05
- **Rule ID:** `dddfebae-c46f-439c-af7a-fdb6bde90218`
- **Source file:** `windows/powershell/powershell_script/posh_ps_syncappvpublishingserver_exe.yml`
