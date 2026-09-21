---
type: detection_rule
title: "Suspicious PowerShell Invocations - Specific - ProcessCreation"
rule_id: 536e2947-3729-478c-9903-745aaffe60d2
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
---

# Suspicious PowerShell Invocations - Specific - ProcessCreation

## Description
Detects suspicious PowerShell invocation command parameters

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: 1 of selection_* and not 1 of filter_*
filter_chocolatey:
  CommandLine|contains:
  - (New-Object System.Net.WebClient).DownloadString('https://community.chocolatey.org/install.ps1
  - Write-ChocolateyWarning
selection_convert_b64:
  CommandLine|contains|all:
  - -nop
  - ' -w '
  - hidden
  - ' -c '
  - '[Convert]::FromBase64String'
selection_enc:
  CommandLine|contains|all:
  - ' -w '
  - hidden
  - -ep
  - bypass
  - -Enc
selection_iex:
  CommandLine|contains|all:
  - ' -w '
  - hidden
  - -noni
  - -nop
  - ' -c '
  - iex
  - New-Object
selection_iex_webclient:
  CommandLine|contains|all:
  - iex
  - New-Object
  - Net.WebClient
  - .Download
selection_reg:
  CommandLine|contains|all:
  - powershell
  - reg
  - add
  - \software\
selection_webclient:
  CommandLine|contains|all:
  - bypass
  - -noprofile
  - -windowstyle
  - hidden
  - new-object
  - system.net.webclient
  - .download
```

## False Positives
- Unknown

## References
- Internal Research

## Metadata
- **Author:** Nasreddine Bencherchali (Nextron Systems)
- **Date:** 2023-01-05
- **Rule ID:** `536e2947-3729-478c-9903-745aaffe60d2`
- **Source file:** `windows/process_creation/proc_creation_win_powershell_invocation_specific.yml`
