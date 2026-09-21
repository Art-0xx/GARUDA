---
type: detection_rule
title: "New PowerShell Instance Created"
rule_id: ac7102b4-9e1e-4802-9b4f-17c5524c015c
platform: windows
level: informational
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1059.001]
---

# New PowerShell Instance Created

## Description
Detects the execution of PowerShell via the creation of a named pipe starting with PSHost

## Log Source
```yaml
category: pipe_created
definition: Note that you have to configure logging for Named Pipe Events in Sysmon
  config (Event ID 17 and Event ID 18). The basic configuration is in popular sysmon
  configuration (https://github.com/SwiftOnSecurity/sysmon-config), but it is worth
  verifying. You can also use other repo, e.g. https://github.com/Neo23x0/sysmon-config,
  https://github.com/olafhartong/sysmon-modular. How to test detection? You can check
  powershell script from this site https://svch0st.medium.com/guide-to-named-pipes-and-hunting-for-cobalt-strike-pipes-dc46b2c5f575
product: windows
```

## Detection Logic
```yaml
condition: selection
selection:
  PipeName|startswith: \PSHost
```

## MITRE ATT&CK
- T1059.001

## False Positives
- Likely

## References
- https://threathunterplaybook.com/hunts/windows/190610-PwshAlternateHosts/notebook.html
- https://threathunterplaybook.com/hunts/windows/190410-LocalPwshExecution/notebook.html

## Metadata
- **Author:** Roberto Rodriguez (Cyb3rWard0g), OTR (Open Threat Research)
- **Date:** 2019-09-12
- **Rule ID:** `ac7102b4-9e1e-4802-9b4f-17c5524c015c`
- **Source file:** `windows/pipe_created/pipe_created_powershell_execution_pipe.yml`
