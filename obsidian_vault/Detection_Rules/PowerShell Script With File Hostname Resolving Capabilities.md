---
type: detection_rule
title: "PowerShell Script With File Hostname Resolving Capabilities"
rule_id: fbc5e92f-3044-4e73-a5c6-1c4359b539de
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1020]
---

# PowerShell Script With File Hostname Resolving Capabilities

## Description
Detects PowerShell scripts that have capabilities to read files, loop through them and resolve DNS host entries.

## Log Source
```yaml
category: ps_script
definition: bade5735-5ab0-4aa7-a642-a11be0e40872
product: windows
```

## Detection Logic
```yaml
condition: selection
selection:
  ScriptBlockText|contains|all:
  - 'Get-content '
  - foreach
  - '[System.Net.Dns]::GetHostEntry'
  - Out-File
```

## MITRE ATT&CK
- T1020

## False Positives
- The same functionality can be implemented by admin scripts, correlate with name and creator

## References
- https://www.fortypoundhead.com/showcontent.asp?artid=24022
- https://labs.withsecure.com/publications/fin7-target-veeam-servers

## Metadata
- **Author:** Nasreddine Bencherchali (Nextron Systems)
- **Date:** 2023-05-05
- **Rule ID:** `fbc5e92f-3044-4e73-a5c6-1c4359b539de`
- **Source file:** `windows/powershell/powershell_script/posh_ps_resolve_list_of_ip_from_file.yml`
