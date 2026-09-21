---
type: detection_rule
title: "Suspicious PowerShell Invocations - Specific"
rule_id: ae7fbf8e-f3cb-49fd-8db4-5f3bed522c71
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1059.001]
---

# Suspicious PowerShell Invocations - Specific

## Description
Detects suspicious PowerShell invocation command parameters

## Log Source
```yaml
category: ps_script
definition: 'Requirements: Script Block Logging must be enabled'
product: windows
```

## Detection Logic
```yaml
condition: 1 of selection_* and not 1 of filter_*
filter_chocolatey:
  ScriptBlockText|contains:
  - (New-Object System.Net.WebClient).DownloadString('https://community.chocolatey.org/install.ps1
  - (New-Object System.Net.WebClient).DownloadString('https://chocolatey.org/install.ps1')
  - Write-ChocolateyWarning
selection_convert_b64:
  ScriptBlockText|contains|all:
  - -nop
  - ' -w '
  - hidden
  - ' -c '
  - '[Convert]::FromBase64String'
selection_enc_selection:
  ScriptBlockText|contains|all:
  - ' -w '
  - hidden
  - -ep
  - bypass
  - -Enc
selection_iex_selection:
  ScriptBlockText|contains|all:
  - ' -w '
  - hidden
  - -noni
  - -nop
  - ' -c '
  - iex
  - New-Object
selection_iex_webclient:
  ScriptBlockText|contains|all:
  - iex
  - New-Object
  - Net.WebClient
  - .Download
selection_reg_selection:
  ScriptBlockText|contains:
  - \software\microsoft\windows\currentversion\run
  - \software\wow6432node\microsoft\windows\currentversion\run
  - \software\microsoft\windows\currentversion\policies\explorer\run
  ScriptBlockText|contains|all:
  - powershell
  - reg
  - add
selection_webclient_selection:
  ScriptBlockText|contains|all:
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
- **Rule ID:** `ae7fbf8e-f3cb-49fd-8db4-5f3bed522c71`
- **Source file:** `windows/powershell/powershell_script/posh_ps_susp_invocation_specific.yml`
