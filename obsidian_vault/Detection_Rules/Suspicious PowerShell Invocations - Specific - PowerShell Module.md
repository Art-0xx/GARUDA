---
type: detection_rule
title: "Suspicious PowerShell Invocations - Specific - PowerShell Module"
rule_id: 8ff28fdd-e2fa-4dfa-aeda-ef3d61c62090
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1059.001]
---

# Suspicious PowerShell Invocations - Specific - PowerShell Module

## Description
Detects suspicious PowerShell invocation command parameters

## Log Source
```yaml
category: ps_module
definition: 0ad03ef1-f21b-4a79-8ce8-e6900c54b65b
product: windows
```

## Detection Logic
```yaml
condition: 1 of selection_* and not 1 of filter_*
filter_chocolatey:
  ContextInfo|contains:
  - (New-Object System.Net.WebClient).DownloadString('https://community.chocolatey.org/install.ps1
  - Write-ChocolateyWarning
selection_convert_b64:
  ContextInfo|contains|all:
  - -nop
  - ' -w '
  - hidden
  - ' -c '
  - '[Convert]::FromBase64String'
selection_enc:
  ContextInfo|contains|all:
  - ' -w '
  - hidden
  - -ep
  - bypass
  - -Enc
selection_iex:
  ContextInfo|contains|all:
  - ' -w '
  - hidden
  - -noni
  - -nop
  - ' -c '
  - iex
  - New-Object
selection_iex_webclient:
  ContextInfo|contains|all:
  - iex
  - New-Object
  - Net.WebClient
  - .Download
selection_reg:
  ContextInfo|contains:
  - \software\microsoft\windows\currentversion\run
  - \software\wow6432node\microsoft\windows\currentversion\run
  - \software\microsoft\windows\currentversion\policies\explorer\run
  ContextInfo|contains|all:
  - powershell
  - reg
  - add
selection_webclient:
  ContextInfo|contains|all:
  - bypass
  - -noprofile
  - -windowstyle
  - hidden
  - new-object
  - system.net.webclient
  - .download
```

## MITRE ATT&CK
- T1059.001

## False Positives
- Unknown

## References
- Internal Research
- https://github.com/HackTricks-wiki/hacktricks/blob/e4c7b21b8f36c97c35b7c622732b38a189ce18f7/src/windows-hardening/windows-local-privilege-escalation/privilege-escalation-with-autorun-binaries.md

## Metadata
- **Author:** Florian Roth (Nextron Systems), Jonhnathan Ribeiro
- **Date:** 2017-03-05
- **Rule ID:** `8ff28fdd-e2fa-4dfa-aeda-ef3d61c62090`
- **Source file:** `windows/powershell/powershell_module/posh_pm_susp_invocation_specific.yml`
