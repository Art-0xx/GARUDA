---
type: detection_rule
title: "Remote PowerShell Sessions Network Connections (WinRM)"
rule_id: 13acf386-b8c6-4fe0-9a6e-c4756b974698
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1059.001]
---

# Remote PowerShell Sessions Network Connections (WinRM)

## Description
Detects basic PowerShell Remoting (WinRM) by monitoring for network inbound connections to ports 5985 OR 5986

## Log Source
```yaml
product: windows
service: security
```

## Detection Logic
```yaml
condition: selection
selection:
  DestPort:
  - 5985
  - 5986
  EventID: 5156
  LayerRTID: 44
```

## MITRE ATT&CK
- T1059.001

## False Positives
- Legitimate use of remote PowerShell execution

## References
- https://threathunterplaybook.com/hunts/windows/190511-RemotePwshExecution/notebook.html

## Metadata
- **Author:** Roberto Rodriguez @Cyb3rWard0g
- **Date:** 2019-09-12
- **Rule ID:** `13acf386-b8c6-4fe0-9a6e-c4756b974698`
- **Source file:** `windows/builtin/security/win_security_remote_powershell_session.yml`
