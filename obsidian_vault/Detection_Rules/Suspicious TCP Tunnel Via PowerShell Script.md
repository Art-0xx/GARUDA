---
type: detection_rule
title: "Suspicious TCP Tunnel Via PowerShell Script"
rule_id: bd33d2aa-497e-4651-9893-5c5364646595
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1090]
---

# Suspicious TCP Tunnel Via PowerShell Script

## Description
Detects powershell scripts that creates sockets/listeners which could be indicative of tunneling activity

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
  ScriptBlockText|contains|all:
  - '[System.Net.HttpWebRequest]'
  - System.Net.Sockets.TcpListener
  - AcceptTcpClient
```

## MITRE ATT&CK
- T1090

## False Positives
- Unknown

## References
- https://github.com/Arno0x/PowerShellScripts/blob/a6b7d5490fbf0b20f91195838f3a11156724b4f7/proxyTunnel.ps1

## Metadata
- **Author:** Nasreddine Bencherchali (Nextron Systems)
- **Date:** 2022-07-08
- **Rule ID:** `bd33d2aa-497e-4651-9893-5c5364646595`
- **Source file:** `windows/powershell/powershell_script/posh_ps_susp_proxy_scripts.yml`
