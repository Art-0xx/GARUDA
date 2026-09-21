---
type: detection_rule
title: "PowerShell Base64 Encoded WMI Classes"
rule_id: 1816994b-42e1-4fb1-afd2-134d88184f71
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1059.001, attack.t1027]
---

# PowerShell Base64 Encoded WMI Classes

## Description
Detects calls to base64 encoded WMI class such as "Win32_ShadowCopy", "Win32_ScheduledJob", etc.

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: selection_img and 1 of selection_cli_*
selection_cli_loggedonuser:
  CommandLine|contains:
  - VwBpAG4AMwAyAF8ATABvAGcAZwBlAGQATwBuAFUAcwBlAHIA
  - cAaQBuADMAMgBfAEwAbwBnAGcAZQBkAE8AbgBVAHMAZQByA
  - XAGkAbgAzADIAXwBMAG8AZwBnAGUAZABPAG4AVQBzAGUAcg
  - V2luMzJfTG9nZ2VkT25Vc2Vy
  - dpbjMyX0xvZ2dlZE9uVXNlc
  - XaW4zMl9Mb2dnZWRPblVzZX
selection_cli_process:
  CommandLine|contains:
  - VwBpAG4AMwAyAF8AUAByAG8AYwBlAHMAcw
  - cAaQBuADMAMgBfAFAAcgBvAGMAZQBzAHMA
  - XAGkAbgAzADIAXwBQAHIAbwBjAGUAcwBzA
  - V2luMzJfUHJvY2Vzc
  - dpbjMyX1Byb2Nlc3
  - XaW4zMl9Qcm9jZXNz
selection_cli_scheduledJob:
  CommandLine|contains:
  - VwBpAG4AMwAyAF8AUwBjAGgAZQBkAHUAbABlAGQASgBvAGIA
  - cAaQBuADMAMgBfAFMAYwBoAGUAZAB1AGwAZQBkAEoAbwBiA
  - XAGkAbgAzADIAXwBTAGMAaABlAGQAdQBsAGUAZABKAG8AYg
  - V2luMzJfU2NoZWR1bGVkSm9i
  - dpbjMyX1NjaGVkdWxlZEpvY
  - XaW4zMl9TY2hlZHVsZWRKb2
selection_cli_shadowcopy:
  CommandLine|contains:
  - VwBpAG4AMwAyAF8AUwBoAGEAZABvAHcAYwBvAHAAeQ
  - cAaQBuADMAMgBfAFMAaABhAGQAbwB3AGMAbwBwAHkA
  - XAGkAbgAzADIAXwBTAGgAYQBkAG8AdwBjAG8AcAB5A
  - V2luMzJfU2hhZG93Y29we
  - dpbjMyX1NoYWRvd2NvcH
  - XaW4zMl9TaGFkb3djb3B5
selection_cli_useraccount:
  CommandLine|contains:
  - VwBpAG4AMwAyAF8AVQBzAGUAcgBBAGMAYwBvAHUAbgB0A
  - cAaQBuADMAMgBfAFUAcwBlAHIAQQBjAGMAbwB1AG4AdA
  - XAGkAbgAzADIAXwBVAHMAZQByAEEAYwBjAG8AdQBuAHQA
  - V2luMzJfVXNlckFjY291bn
  - dpbjMyX1VzZXJBY2NvdW50
  - XaW4zMl9Vc2VyQWNjb3Vud
selection_img:
- Image|endswith:
  - \powershell.exe
  - \pwsh.exe
- OriginalFileName:
  - PowerShell.EXE
  - pwsh.dll
```

## MITRE ATT&CK
- T1059.001
- T1027

## False Positives
- Unknown

## References
- https://github.com/Neo23x0/Raccine/blob/20a569fa21625086433dcce8bb2765d0ea08dcb6/yara/mal_revil.yar

## Metadata
- **Author:** Christian Burkard (Nextron Systems), Nasreddine Bencherchali (Nextron Systems)
- **Date:** 2023-01-30
- **Rule ID:** `1816994b-42e1-4fb1-afd2-134d88184f71`
- **Source file:** `windows/process_creation/proc_creation_win_powershell_base64_wmi_classes.yml`
