---
type: detection_rule
title: "Suspicious SSL Connection"
rule_id: 195626f3-5f1b-4403-93b7-e6cfd4d6a078
platform: windows
level: low
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1573]
---

# Suspicious SSL Connection

## Description
Adversaries may employ a known encryption algorithm to conceal command and control traffic rather than relying on any inherent protections provided by a communication protocol.

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
  - System.Net.Security.SslStream
  - Net.Security.RemoteCertificateValidationCallback
  - .AuthenticateAsClient
```

## MITRE ATT&CK
- T1573

## False Positives
- Legitimate administrative script

## References
- https://github.com/redcanaryco/atomic-red-team/blob/f339e7da7d05f6057fdfcdd3742bfcf365fee2a9/atomics/T1573/T1573.md#atomic-test-1---openssl-c2
- https://medium.com/walmartglobaltech/openssl-server-reverse-shell-from-windows-client-aee2dbfa0926

## Metadata
- **Author:** frack113
- **Date:** 2022-01-23
- **Rule ID:** `195626f3-5f1b-4403-93b7-e6cfd4d6a078`
- **Source file:** `windows/powershell/powershell_script/posh_ps_susp_ssl_keyword.yml`
