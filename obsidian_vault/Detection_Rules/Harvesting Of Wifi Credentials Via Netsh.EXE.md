---
type: detection_rule
title: "Harvesting Of Wifi Credentials Via Netsh.EXE"
rule_id: 42b1a5b8-353f-4f10-b256-39de4467faff
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1040]
---

# Harvesting Of Wifi Credentials Via Netsh.EXE

## Description
Detect the harvesting of wifi credentials using netsh.exe

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: all of selection_*
selection_cli:
  CommandLine|contains|all:
  - wlan
  - ' s'
  - ' p'
  - ' k'
  - =clear
selection_img:
- Image|endswith: \netsh.exe
- OriginalFileName: netsh.exe
```

## MITRE ATT&CK
- T1040

## False Positives
- Unknown

## References
- https://blog.malwarebytes.com/threat-analysis/2020/04/new-agenttesla-variant-steals-wifi-credentials/

## Metadata
- **Author:** Andreas Hunkeler (@Karneades), oscd.community
- **Date:** 2020-04-20
- **Rule ID:** `42b1a5b8-353f-4f10-b256-39de4467faff`
- **Source file:** `windows/process_creation/proc_creation_win_netsh_wifi_credential_harvesting.yml`
