---
type: detection_rule
title: "Suspicious Non PowerShell WSMAN COM Provider"
rule_id: df9a0e0e-fedb-4d6c-8668-d765dfc92aa7
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1059.001, attack.t1021.003]
---

# Suspicious Non PowerShell WSMAN COM Provider

## Description
Detects suspicious use of the WSMAN provider without PowerShell.exe as the host application.

## Log Source
```yaml
product: windows
service: powershell-classic
```

## Detection Logic
```yaml
condition: selection and not 1 of filter_main_* and not 1 of filter_optional_*
filter_main_host_application_null:
  Data|re: HostId=[a-zA-Z0-9-]{36}\s+EngineVersion=
filter_main_ps:
  Data|contains:
  - HostApplication=powershell
  - HostApplication=C:\Windows\System32\WindowsPowerShell\v1.0\powershell
  - HostApplication=C:\Windows\SysWOW64\WindowsPowerShell\v1.0\powershell
  - HostApplication=C:/Windows/System32/WindowsPowerShell/v1.0/powershell
  - HostApplication=C:/Windows/SysWOW64/WindowsPowerShell/v1.0/powershell
filter_optional_hexnode:
  Data|contains: HostApplication=C:\Hexnode\Hexnode Agent\Current\HexnodeAgent.exe
selection:
  Data|contains: ProviderName=WSMan
```

## MITRE ATT&CK
- T1059.001
- T1021.003

## False Positives
- Unknown

## References
- https://twitter.com/chadtilbury/status/1275851297770610688
- https://bohops.com/2020/05/12/ws-management-com-another-approach-for-winrm-lateral-movement/
- https://github.com/bohops/WSMan-WinRM

## Metadata
- **Author:** Roberto Rodriguez (Cyb3rWard0g), OTR (Open Threat Research)
- **Date:** 2020-06-24
- **Rule ID:** `df9a0e0e-fedb-4d6c-8668-d765dfc92aa7`
- **Source file:** `windows/powershell/powershell_classic/posh_pc_wsman_com_provider_no_powershell.yml`
