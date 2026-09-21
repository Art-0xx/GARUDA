---
type: detection_rule
title: "Potential Invoke-Mimikatz PowerShell Script"
rule_id: 189e3b02-82b2-4b90-9662-411eb64486d4
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1003]
---

# Potential Invoke-Mimikatz PowerShell Script

## Description
Detects Invoke-Mimikatz PowerShell script and alike. Mimikatz is a credential dumper capable of obtaining plaintext Windows account logins and passwords.

## Log Source
```yaml
category: ps_script
product: windows
```

## Detection Logic
```yaml
condition: 1 of selection*
selection_1:
  ScriptBlockText|contains|all:
  - DumpCreds
  - DumpCerts
selection_2:
  ScriptBlockText|contains: sekurlsa::logonpasswords
selection_3:
  ScriptBlockText|contains|all:
  - crypto::certificates
  - CERT_SYSTEM_STORE_LOCAL_MACHINE
```

## MITRE ATT&CK
- T1003

## False Positives
- Mimikatz can be useful for testing the security of networks

## References
- https://www.elastic.co/guide/en/security/current/potential-invoke-mimikatz-powershell-script.html#potential-invoke-mimikatz-powershell-script

## Metadata
- **Author:** Tim Rauch, Elastic (idea)
- **Date:** 2022-09-28
- **Rule ID:** `189e3b02-82b2-4b90-9662-411eb64486d4`
- **Source file:** `windows/powershell/powershell_script/posh_ps_potential_invoke_mimikatz.yml`
