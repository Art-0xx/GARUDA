---
type: detection_rule
title: "HackTool - Wmiexec Default Powershell Command"
rule_id: 022eaba8-f0bf-4dd9-9217-4604b0bb3bb0
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
---

# HackTool - Wmiexec Default Powershell Command

## Description
Detects the execution of PowerShell with a specific flag sequence that is used by the Wmiexec script

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: selection
selection:
  CommandLine|contains: -NoP -NoL -sta -NonI -W Hidden -Exec Bypass -Enc
```

## False Positives
- Unlikely

## References
- https://github.com/fortra/impacket/blob/f4b848fa27654ca95bc0f4c73dbba8b9c2c9f30a/examples/wmiexec.py

## Metadata
- **Author:** Nasreddine Bencherchali (Nextron Systems)
- **Date:** 2023-03-08
- **Rule ID:** `022eaba8-f0bf-4dd9-9217-4604b0bb3bb0`
- **Source file:** `windows/process_creation/proc_creation_win_hktl_wmiexec_default_powershell.yml`
