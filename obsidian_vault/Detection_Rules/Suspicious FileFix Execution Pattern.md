---
type: detection_rule
title: "Suspicious FileFix Execution Pattern"
rule_id: b5b29e4e-31fa-4fdf-b058-296e7a1aa0c2
platform: windows
level: high
status: experimental
tags: [detection, sigma, windows]
mitre_tags: [attack.t1204.004]
---

# Suspicious FileFix Execution Pattern

## Description
Detects suspicious FileFix execution patterns where users are tricked into running malicious commands through browser file upload dialog manipulation.
This attack typically begins when users visit malicious websites impersonating legitimate services or news platforms,
which may display fake CAPTCHA challenges or direct instructions to open file explorer and paste clipboard content.
The clipboard content usually contains commands that download and execute malware, such as information stealing tools.

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: selection_exec_parent and 1 of selection_cli_*
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
selection_cli_lolbin:
  CommandLine|contains:
  - '%comspec%'
  - bitsadmin
  - certutil
  - cmd
  - cscript
  - curl
  - finger
  - mshta
  - powershell
  - pwsh
  - regsvr32
  - rundll32
  - schtasks
  - wget
  - wscript
selection_exec_parent:
  CommandLine|contains: '#'
  ParentImage|endswith:
  - \brave.exe
  - \chrome.exe
  - \firefox.exe
  - \msedge.exe
```

## MITRE ATT&CK
- T1204.004

## False Positives
- Legitimate use of PowerShell or other utilities launched from browser extensions or automation tools

## References
- https://mrd0x.com/filefix-clickfix-alternative/
- https://expel.com/blog/cache-smuggling-when-a-picture-isnt-a-thousand-words/
- https://blog.checkpoint.com/research/filefix-the-new-social-engineering-attack-building-on-clickfix-tested-in-the-wild/

## Metadata
- **Author:** 0xFustang, Swachchhanda Shrawan Poudel (Nextron Systems)
- **Date:** 2025-11-24
- **Rule ID:** `b5b29e4e-31fa-4fdf-b058-296e7a1aa0c2`
- **Source file:** `windows/process_creation/proc_creation_win_susp_filefix_execution_pattern.yml`
