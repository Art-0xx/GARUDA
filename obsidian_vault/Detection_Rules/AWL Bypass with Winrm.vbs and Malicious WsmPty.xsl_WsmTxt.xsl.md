---
type: detection_rule
title: "AWL Bypass with Winrm.vbs and Malicious WsmPty.xsl/WsmTxt.xsl"
rule_id: 074e0ded-6ced-4ebd-8b4d-53f55908119d
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1216]
---

# AWL Bypass with Winrm.vbs and Malicious WsmPty.xsl/WsmTxt.xsl

## Description
Detects execution of attacker-controlled WsmPty.xsl or WsmTxt.xsl via winrm.vbs and copied cscript.exe (can be renamed)

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: contains_winrm and (contains_format_pretty_arg and not image_from_system_folder)
contains_format_pretty_arg:
  CommandLine|contains:
  - format:pretty
  - format:"pretty"
  - format:"text"
  - format:text
contains_winrm:
  CommandLine|contains: winrm
image_from_system_folder:
  Image|startswith:
  - C:\Windows\System32\
  - C:\Windows\SysWOW64\
```

## MITRE ATT&CK
- T1216

## False Positives
- Unlikely

## References
- https://posts.specterops.io/application-whitelisting-bypass-and-arbitrary-unsigned-code-execution-technique-in-winrm-vbs-c8c24fb40404

## Metadata
- **Author:** Julia Fomina, oscd.community
- **Date:** 2020-10-06
- **Rule ID:** `074e0ded-6ced-4ebd-8b4d-53f55908119d`
- **Source file:** `windows/process_creation/proc_creation_win_winrm_awl_bypass.yml`
