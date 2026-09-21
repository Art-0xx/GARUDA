---
type: detection_rule
title: "FileFix - Command Evidence in TypedPaths"
rule_id: 4fee3d51-8069-4a4c-a0f7-924fcaff2c70
platform: windows
level: high
status: experimental
tags: [detection, sigma, windows]
mitre_tags: [attack.t1204.004]
---

# FileFix - Command Evidence in TypedPaths

## Description
Detects commonly-used chained commands and strings in the most recent 'url' value of the 'TypedPaths' key, which could be indicative of a user being targeted by the FileFix technique.

## Log Source
```yaml
category: registry_set
product: windows
```

## Detection Logic
```yaml
condition: all of selection_*
selection_base:
  Details|contains|all:
  - '#'
  - http
  TargetObject|endswith: \Software\Microsoft\Windows\CurrentVersion\Explorer\TypedPaths\url1
selection_cmd:
- Details|contains:
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
- Details|contains:
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
```

## MITRE ATT&CK
- T1204.004

## False Positives
- Unknown

## References
- https://x.com/russianpanda9xx/status/1940831134759506029
- https://mrd0x.com/filefix-clickfix-alternative/
- https://www.scpx.com.au/2025/11/16/decades-old-finger-protocol-abused-in-clickfix-malware-attacks/

## Metadata
- **Author:** Alfie Champion (delivr.to), Swachchhanda Shrawan Poudel (Nextron Systems)
- **Date:** 2025-07-05
- **Rule ID:** `4fee3d51-8069-4a4c-a0f7-924fcaff2c70`
- **Source file:** `windows/registry/registry_set/registry_set_filefix_typedpath_commands.yml`
