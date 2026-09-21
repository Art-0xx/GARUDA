---
type: detection_rule
title: "PowerShell Script With File Upload Capabilities"
rule_id: d2e3f2f6-7e09-4bf2-bc5d-90186809e7fb
platform: windows
level: low
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1020]
---

# PowerShell Script With File Upload Capabilities

## Description
Detects PowerShell scripts leveraging the "Invoke-WebRequest" cmdlet to send data via either "PUT" or "POST" method.

## Log Source
```yaml
category: ps_script
definition: bade5735-5ab0-4aa7-a642-a11be0e40872
product: windows
```

## Detection Logic
```yaml
condition: all of selection_*
selection_cmdlet:
  ScriptBlockText|contains:
  - Invoke-RestMethod
  - Invoke-WebRequest
  - 'irm '
  - 'iwr '
selection_flag:
  ScriptBlockText|contains:
  - -Method "POST"
  - -Method "PUT"
  - -Method POST
  - -Method PUT
  - -Method 'POST'
  - -Method 'PUT'
```

## MITRE ATT&CK
- T1020

## False Positives
- Unknown

## References
- https://github.com/redcanaryco/atomic-red-team/blob/f339e7da7d05f6057fdfcdd3742bfcf365fee2a9/atomics/T1020/T1020.md
- https://www.w3.org/Protocols/rfc2616/rfc2616-sec9.html
- https://learn.microsoft.com/en-us/powershell/module/microsoft.powershell.utility/invoke-webrequest?view=powershell-7.4

## Metadata
- **Author:** frack113
- **Date:** 2022-01-07
- **Rule ID:** `d2e3f2f6-7e09-4bf2-bc5d-90186809e7fb`
- **Source file:** `windows/powershell/powershell_script/posh_ps_script_with_upload_capabilities.yml`
