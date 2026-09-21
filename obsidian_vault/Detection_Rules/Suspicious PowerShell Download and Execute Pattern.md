---
type: detection_rule
title: "Suspicious PowerShell Download and Execute Pattern"
rule_id: e6c54d94-498c-4562-a37c-b469d8e9a275
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1059.001]
---

# Suspicious PowerShell Download and Execute Pattern

## Description
Detects suspicious PowerShell download patterns that are often used in malicious scripts, stagers or downloaders (make sure that your backend applies the strings case-insensitive)

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: selection
selection:
  CommandLine|contains:
  - IEX ((New-Object Net.WebClient).DownloadString
  - IEX (New-Object Net.WebClient).DownloadString
  - IEX((New-Object Net.WebClient).DownloadString
  - IEX(New-Object Net.WebClient).DownloadString
  - ' -command (New-Object System.Net.WebClient).DownloadFile('
  - ' -c (New-Object System.Net.WebClient).DownloadFile('
```

## MITRE ATT&CK
- T1059.001

## False Positives
- Software installers that pull packages from remote systems and execute them

## References
- https://gist.github.com/jivoi/c354eaaf3019352ce32522f916c03d70
- https://www.trendmicro.com/en_us/research/22/j/lv-ransomware-exploits-proxyshell-in-attack.html

## Metadata
- **Author:** Florian Roth (Nextron Systems)
- **Date:** 2022-02-28
- **Rule ID:** `e6c54d94-498c-4562-a37c-b469d8e9a275`
- **Source file:** `windows/process_creation/proc_creation_win_powershell_susp_download_patterns.yml`
