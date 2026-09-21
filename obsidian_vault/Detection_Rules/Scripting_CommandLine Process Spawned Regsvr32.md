---
type: detection_rule
title: "Scripting/CommandLine Process Spawned Regsvr32"
rule_id: ab37a6ec-6068-432b-a64e-2c7bf95b1d22
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1218.010]
---

# Scripting/CommandLine Process Spawned Regsvr32

## Description
Detects various command line and scripting engines/processes such as "PowerShell", "Wscript", "Cmd", etc. spawning a "regsvr32" instance.

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: selection and not 1 of filter_main_*
filter_main_rpcproxy:
  CommandLine|endswith: ' /s C:\Windows\System32\RpcProxy\RpcProxy.dll'
  ParentImage: C:\Windows\System32\cmd.exe
selection:
  Image|endswith: \regsvr32.exe
  ParentImage|endswith:
  - \cmd.exe
  - \cscript.exe
  - \mshta.exe
  - \powershell_ise.exe
  - \powershell.exe
  - \pwsh.exe
  - \wscript.exe
```

## MITRE ATT&CK
- T1218.010

## False Positives
- Legitimate ".bat", ".hta", ".ps1" or ".vbs" scripts leverage legitimately often. Apply additional filter and exclusions as necessary
- Some legitimate Windows services

## References
- https://web.archive.org/web/20171001085340/https://subt0x10.blogspot.com/2017/04/bypass-application-whitelisting-script.html
- https://app.any.run/tasks/34221348-072d-4b70-93f3-aa71f6ebecad/

## Metadata
- **Author:** Florian Roth (Nextron Systems), Nasreddine Bencherchali (Nextron Systems)
- **Date:** 2023-05-26
- **Rule ID:** `ab37a6ec-6068-432b-a64e-2c7bf95b1d22`
- **Source file:** `windows/process_creation/proc_creation_win_regsvr32_susp_parent.yml`
