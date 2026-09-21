---
type: detection_rule
title: "PowerShell Download Via Net.WebClient - PowerShell Classic"
rule_id: 3236fcd0-b7e3-4433-b4f8-86ad61a9af2d
platform: windows
level: low
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1059.001, attack.t1105]
---

# PowerShell Download Via Net.WebClient - PowerShell Classic

## Description
Detects PowerShell download activity, via the .DownloadFile() or .DownloadString() methods of the Net.WebClient class.
This technique is often abused by attackers to download additional payloads.

## Log Source
```yaml
category: ps_classic_start
product: windows
```

## Detection Logic
```yaml
condition: all of selection_*
selection_download:
  Data|contains:
  - .DownloadFile(
  - .DownloadString(
selection_webclient:
  Data|contains: Net.WebClient
```

## MITRE ATT&CK
- T1059.001
- T1105

## False Positives
- This activity may be used by legitimate software, such as patch management tools or software updaters. Investigate any such activity and apply the necessary filter.

## References
- https://www.trendmicro.com/en_us/research/22/j/lv-ransomware-exploits-proxyshell-in-attack.html

## Metadata
- **Author:** Florian Roth (Nextron Systems)
- **Date:** 2017-03-05
- **Rule ID:** `3236fcd0-b7e3-4433-b4f8-86ad61a9af2d`
- **Source file:** `windows/powershell/powershell_classic/posh_pc_download_via_webclient.yml`
