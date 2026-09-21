---
type: detection_rule
title: "Usage Of Web Request Commands And Cmdlets"
rule_id: 9fc51a3c-81b3-4fa7-b35f-7c02cf10fd2d
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1059.001]
---

# Usage Of Web Request Commands And Cmdlets

## Description
Detects the use of various web request commands with commandline tools and Windows PowerShell cmdlets (including aliases) via CommandLine

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
- https://learn.microsoft.com/en-us/powershell/module/bitstransfer/add-bitsfile?view=windowsserver2019-ps

## Metadata
- **Author:** James Pemberton / @4A616D6573, Endgame, JHasenbusch, oscd.community, Austin Songer @austinsonger
- **Date:** 2019-10-24
- **Rule ID:** `9fc51a3c-81b3-4fa7-b35f-7c02cf10fd2d`
- **Source file:** `windows/process_creation/proc_creation_win_susp_web_request_cmd_and_cmdlets.yml`
