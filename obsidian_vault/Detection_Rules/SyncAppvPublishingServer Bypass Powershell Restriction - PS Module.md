---
type: detection_rule
title: "SyncAppvPublishingServer Bypass Powershell Restriction - PS Module"
rule_id: fe5ce7eb-dad8-467c-84a9-31ec23bd644a
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1218]
---

# SyncAppvPublishingServer Bypass Powershell Restriction - PS Module

## Description
Detects SyncAppvPublishingServer process execution which usually utilized by adversaries to bypass PowerShell execution restrictions.

## Log Source
```yaml
category: ps_module
definition: 0ad03ef1-f21b-4a79-8ce8-e6900c54b65b
product: windows
```

## Detection Logic
```yaml
condition: selection
selection:
  ContextInfo|contains: SyncAppvPublishingServer.exe
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
- **Rule ID:** `fe5ce7eb-dad8-467c-84a9-31ec23bd644a`
- **Source file:** `windows/powershell/powershell_module/posh_pm_syncappvpublishingserver_exe.yml`
