---
type: detection_rule
title: "Registry Modification of MS-settings Protocol Handler"
rule_id: dd3ee8cc-f751-41c9-ba53-5a32ed47e563
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1548.002, attack.t1546.001, attack.t1112]
---

# Registry Modification of MS-settings Protocol Handler

## Description
Detects registry modifications to the 'ms-settings' protocol handler, which is frequently targeted for UAC bypass or persistence.
Attackers can modify this registry to execute malicious code with elevated privileges by hijacking the command execution path.

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: (all of selection_reg_* or all of selection_pwsh_*) and selection_cli_key
selection_cli_key:
  CommandLine|contains: \ms-settings\shell\open\command
selection_pwsh_cli:
  CommandLine|contains:
  - New-ItemProperty
  - Set-ItemProperty
  - 'ni '
  - 'sp '
selection_pwsh_img:
- Image|endswith:
  - \powershell.exe
  - \pwsh.exe
- OriginalFileName:
  - powershell.exe
  - pwsh.dll
selection_reg_cli:
  CommandLine|contains: add
selection_reg_img:
- Image|endswith: \reg.exe
- OriginalFileName: reg.exe
```

## MITRE ATT&CK
- T1548.002
- T1546.001
- T1112

## False Positives
- Unknown

## References
- https://thedfirreport.com/2021/12/13/diavol-ransomware/
- https://www.trendmicro.com/en_us/research/25/f/water-curse.html

## Metadata
- **Author:** frack113, Swachchhanda Shrawan Poudel (Nextron Systems)
- **Date:** 2021-12-20
- **Rule ID:** `dd3ee8cc-f751-41c9-ba53-5a32ed47e563`
- **Source file:** `windows/process_creation/proc_creation_win_susp_registry_modification_of_ms_setting_protocol_handler.yml`
