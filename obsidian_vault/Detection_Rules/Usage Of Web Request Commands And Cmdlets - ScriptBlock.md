---
type: detection_rule
title: "Usage Of Web Request Commands And Cmdlets - ScriptBlock"
rule_id: 1139d2e2-84b1-4226-b445-354492eba8ba
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1059.001]
---

# Usage Of Web Request Commands And Cmdlets - ScriptBlock

## Description
Detects the use of various web request commands with commandline tools and Windows PowerShell cmdlets (including aliases) via PowerShell scriptblock logs

## Log Source
```yaml
category: ps_script
definition: 'Requirements: Script Block Logging must be enabled'
product: windows
```

## Detection Logic
```yaml
condition: selection and not filter
filter:
  Path|startswith: C:\Packages\Plugins\Microsoft.GuestConfiguration.ConfigurationforWindows\
selection:
  ScriptBlockText|contains:
  - '[System.Net.WebRequest]::create'
  - 'curl '
  - Invoke-RestMethod
  - Invoke-WebRequest
  - ' irm '
  - 'iwr '
  - Resume-BitsTransfer
  - Start-BitsTransfer
  - 'wget '
  - WinHttp.WinHttpRequest
```

## MITRE ATT&CK
- T1059.001

## False Positives
- Use of Get-Command and Get-Help modules to reference Invoke-WebRequest and Start-BitsTransfer.

## References
- https://4sysops.com/archives/use-powershell-to-download-a-file-with-http-https-and-ftp/
- https://blog.jourdant.me/post/3-ways-to-download-files-with-powershell

## Metadata
- **Author:** James Pemberton / @4A616D6573
- **Date:** 2019-10-24
- **Rule ID:** `1139d2e2-84b1-4226-b445-354492eba8ba`
- **Source file:** `windows/powershell/powershell_script/posh_ps_web_request_cmd_and_cmdlets.yml`
