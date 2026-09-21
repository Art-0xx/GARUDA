---
type: detection_rule
title: "Potentially Suspicious Child Process Of ClickOnce Application"
rule_id: 67bc0e75-c0a9-4cfc-8754-84a505b63c04
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
---

# Potentially Suspicious Child Process Of ClickOnce Application

## Description
Detects potentially suspicious child processes of a ClickOnce deployment application

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: selection
selection:
  Image|endswith:
  - \calc.exe
  - \cmd.exe
  - \cscript.exe
  - \explorer.exe
  - \mshta.exe
  - \net.exe
  - \net1.exe
  - \nltest.exe
  - \notepad.exe
  - \powershell.exe
  - \pwsh.exe
  - \reg.exe
  - \regsvr32.exe
  - \rundll32.exe
  - \schtasks.exe
  - \werfault.exe
  - \wscript.exe
  ParentImage|contains: \AppData\Local\Apps\2.0\
```

## False Positives
- Unknown

## References
- https://posts.specterops.io/less-smartscreen-more-caffeine-ab-using-clickonce-for-trusted-code-execution-1446ea8051c5

## Metadata
- **Author:** Nasreddine Bencherchali (Nextron Systems)
- **Date:** 2023-06-12
- **Rule ID:** `67bc0e75-c0a9-4cfc-8754-84a505b63c04`
- **Source file:** `windows/process_creation/proc_creation_win_dfsvc_suspicious_child_processes.yml`
