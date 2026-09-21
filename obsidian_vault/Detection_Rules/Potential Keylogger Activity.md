---
type: detection_rule
title: "Potential Keylogger Activity"
rule_id: 965e2db9-eddb-4cf6-a986-7a967df651e4
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1056.001]
---

# Potential Keylogger Activity

## Description
Detects PowerShell scripts that contains reference to keystroke capturing functions

## Log Source
```yaml
category: ps_script
definition: 'Requirements: Script Block Logging must be enabled'
product: windows
```

## Detection Logic
```yaml
condition: selection
selection:
  ScriptBlockText|contains: '[Windows.Input.Keyboard]::IsKeyDown([System.Windows.Input.Key]::'
```

## MITRE ATT&CK
- T1056.001

## False Positives
- Unknown

## References
- https://twitter.com/ScumBots/status/1610626724257046529
- https://www.virustotal.com/gui/file/d4486b63512755316625230e0c9c81655093be93876e0d80732e7eeaf7d83476/content
- https://www.virustotal.com/gui/file/720a7ee9f2178c70501d7e3f4bcc28a4f456e200486dbd401b25af6da3b4da62/content
- https://learn.microsoft.com/en-us/dotnet/api/system.windows.input.keyboard.iskeydown?view=windowsdesktop-7.0

## Metadata
- **Author:** Nasreddine Bencherchali (Nextron Systems)
- **Date:** 2023-01-04
- **Rule ID:** `965e2db9-eddb-4cf6-a986-7a967df651e4`
- **Source file:** `windows/powershell/powershell_script/posh_ps_susp_keylogger_activity.yml`
