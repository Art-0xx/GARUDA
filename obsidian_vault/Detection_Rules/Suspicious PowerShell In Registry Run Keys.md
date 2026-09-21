---
type: detection_rule
title: "Suspicious PowerShell In Registry Run Keys"
rule_id: 8d85cf08-bf97-4260-ba49-986a2a65129c
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1547.001]
---

# Suspicious PowerShell In Registry Run Keys

## Description
Detects potential PowerShell commands or code within registry run keys

## Log Source
```yaml
category: registry_set
product: windows
```

## Detection Logic
```yaml
condition: selection
selection:
  Details|contains:
  - powershell
  - 'pwsh '
  - FromBase64String
  - .DownloadFile(
  - .DownloadString(
  - ' -w hidden '
  - ' -w 1 '
  - -windowstyle hidden
  - -window hidden
  - ' -nop '
  - ' -encodedcommand '
  - -ExecutionPolicy Bypass
  - Invoke-Expression
  - IEX (
  - Invoke-Command
  - ICM -
  - Invoke-WebRequest
  - 'IWR '
  - Invoke-RestMethod
  - 'IRM '
  - ' -noni '
  - ' -noninteractive '
  TargetObject|contains:
  - \Software\Microsoft\Windows\CurrentVersion\Run
  - \Software\WOW6432Node\Microsoft\Windows\CurrentVersion\Run
  - \Software\Microsoft\Windows\CurrentVersion\Policies\Explorer\Run
```

## MITRE ATT&CK
- T1547.001

## False Positives
- Legitimate admin or third party scripts. Baseline according to your environment

## References
- https://github.com/frack113/atomic-red-team/blob/a9051c38de8a5320b31c7039efcbd3b56cf2d65a/atomics/T1547.001/T1547.001.md#atomic-test-9---systembc-malware-as-a-service-registry
- https://www.trendmicro.com/en_us/research/22/j/lv-ransomware-exploits-proxyshell-in-attack.html
- https://github.com/HackTricks-wiki/hacktricks/blob/e4c7b21b8f36c97c35b7c622732b38a189ce18f7/src/windows-hardening/windows-local-privilege-escalation/privilege-escalation-with-autorun-binaries.md

## Metadata
- **Author:** frack113, Florian Roth (Nextron Systems)
- **Date:** 2022-03-17
- **Rule ID:** `8d85cf08-bf97-4260-ba49-986a2a65129c`
- **Source file:** `windows/registry/registry_set/registry_set_powershell_in_run_keys.yml`
