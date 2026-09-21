---
type: detection_rule
title: "Suspicious ClickFix/FileFix Execution Pattern"
rule_id: d487ed4a-fd24-436d-a0b2-f4e95f7b2635
platform: windows
level: high
status: experimental
tags: [detection, sigma, windows]
mitre_tags: [attack.t1204.001, attack.t1204.004]
---

# Suspicious ClickFix/FileFix Execution Pattern

## Description
Detects suspicious execution patterns where users are tricked into running malicious commands via clipboard manipulation, either through the Windows Run dialog (ClickFix) or File Explorer address bar (FileFix).
Attackers leverage social engineering campaigns—such as fake CAPTCHA challenges or urgent alerts—encouraging victims to paste clipboard contents, often executing mshta.exe, powershell.exe, or similar commands to infect systems.

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: all of selection_*
selection_cli_captcha:
  CommandLine|contains:
  - account
  - anti-bot
  - botcheck
  - captcha
  - challenge
  - confirmation
  - fraud
  - human
  - identification
  - identificator
  - identity
  - robot
  - validation
  - verification
  - verify
selection_parent:
  CommandLine|contains: '#'
  ParentImage|endswith: \explorer.exe
```

## MITRE ATT&CK
- T1204.001
- T1204.004

## False Positives
- Unlikely

## References
- https://github.com/JohnHammond/recaptcha-phish
- https://www.zscaler.com/blogs/security-research/deepseek-lure-using-captchas-spread-malware
- https://www.threatdown.com/blog/clipboard-hijacker-tries-to-install-a-trojan/
- https://app.any.run/tasks/5c16b4db-4b36-4039-a0ed-9b09abff8be2
- https://www.esentire.com/security-advisories/netsupport-rat-clickfix-distribution

## Metadata
- **Author:** montysecurity, Swachchhanda Shrawan Poudel (Nextron Systems)
- **Date:** 2025-11-19
- **Rule ID:** `d487ed4a-fd24-436d-a0b2-f4e95f7b2635`
- **Source file:** `windows/process_creation/proc_creation_win_susp_clickfix_filefix_execution.yml`
