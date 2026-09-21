---
type: detection_rule
title: "Renamed Powershell Under Powershell Channel"
rule_id: 30a8cb77-8eb3-4cfb-8e79-ad457c5a4592
platform: windows
level: low
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1059.001, attack.t1036.003]
---

# Renamed Powershell Under Powershell Channel

## Description
Detects a renamed Powershell execution, which is a common technique used to circumvent security controls and bypass detection logic that's dependent on process names and process paths.

## Log Source
```yaml
category: ps_classic_start
product: windows
```

## Detection Logic
```yaml
condition: selection and not 1 of filter_main_*
filter_main_host_application_null:
  Data|re: HostId=[a-zA-Z0-9-]{36}\s+EngineVersion=
filter_main_ps:
  Data|contains:
  - HostApplication=powershell
  - HostApplication=C:\Windows\System32\WindowsPowerShell\v1.0\powershell
  - HostApplication=C:\Windows\SysWOW64\WindowsPowerShell\v1.0\powershell
  - HostApplication=C:/Windows/System32/WindowsPowerShell/v1.0/powershell
  - HostApplication=C:/Windows/SysWOW64/WindowsPowerShell/v1.0/powershell
  - HostApplication=C:\\\\WINDOWS\\\\system32\\\\WindowsPowerShell\\\\v1.0\\\\powershell.exe
  - HostApplication=C:\\\\WINDOWS\\\\SysWOW64\\\\WindowsPowerShell\\\\v1.0\\\\powershell.exe
selection:
  Data|contains: HostName=ConsoleHost
```

## MITRE ATT&CK
- T1059.001
- T1036.003

## False Positives
- Unknown

## References
- https://speakerdeck.com/heirhabarov/hunting-for-powershell-abuse

## Metadata
- **Author:** Harish Segar, frack113
- **Date:** 2020-06-29
- **Rule ID:** `30a8cb77-8eb3-4cfb-8e79-ad457c5a4592`
- **Source file:** `windows/powershell/powershell_classic/posh_pc_renamed_powershell.yml`
