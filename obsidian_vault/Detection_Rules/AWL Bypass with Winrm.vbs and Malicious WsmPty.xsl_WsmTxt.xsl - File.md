---
type: detection_rule
title: "AWL Bypass with Winrm.vbs and Malicious WsmPty.xsl/WsmTxt.xsl - File"
rule_id: d353dac0-1b41-46c2-820c-d7d2561fc6ed
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1216]
---

# AWL Bypass with Winrm.vbs and Malicious WsmPty.xsl/WsmTxt.xsl - File

## Description
Detects execution of attacker-controlled WsmPty.xsl or WsmTxt.xsl via winrm.vbs and copied cscript.exe (can be renamed)

## Log Source
```yaml
category: file_event
product: windows
```

## Detection Logic
```yaml
condition: system_files and not in_system_folder
in_system_folder:
  TargetFilename|startswith:
  - C:\Windows\System32\
  - C:\Windows\SysWOW64\
system_files:
  TargetFilename|endswith:
  - WsmPty.xsl
  - WsmTxt.xsl
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
- **Rule ID:** `d353dac0-1b41-46c2-820c-d7d2561fc6ed`
- **Source file:** `windows/file/file_event/file_event_win_winrm_awl_bypass.yml`
