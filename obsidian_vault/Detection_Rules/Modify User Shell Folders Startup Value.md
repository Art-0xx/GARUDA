---
type: detection_rule
title: "Modify User Shell Folders Startup Value"
rule_id: 9c226817-8dc9-46c2-a58d-66655aafd7dc
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1547.001]
---

# Modify User Shell Folders Startup Value

## Description
Detect modification of the User Shell Folders registry values for Startup or Common Startup which could indicate persistence attempts.
Attackers may modify User Shell Folders registry keys to point to malicious executables or scripts that will be executed during startup.
This technique is often used to maintain persistence on a compromised system by ensuring that the malicious payload is executed automatically.

## Log Source
```yaml
category: registry_set
product: windows
```

## Detection Logic
```yaml
condition: selection and not 1 of filter_main_*
filter_main_details_null:
  Details: null
filter_main_programdata_startup:
  Details|contains:
  - C:\ProgramData\Microsoft\Windows\Start Menu\Programs\Startup
  - '%ProgramData%\Microsoft\Windows\Start Menu\Programs\Startup'
filter_main_userprofile_startup_1:
  Details|contains:
  - '%USERPROFILE%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup'
  - '%%USERPROFILE%%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup'
filter_main_userprofile_startup_2:
  Details|contains|all:
  - C:\Users\
  - \AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup
selection:
  TargetObject|contains:
  - SOFTWARE\Microsoft\Windows\CurrentVersion\Explorer\User Shell Folders
  - SOFTWARE\Microsoft\Windows\CurrentVersion\Explorer\Shell Folders
  TargetObject|endswith:
  - \Common Startup
  - \Startup
```

## MITRE ATT&CK
- T1547.001

## False Positives
- Unknown

## References
- https://github.com/redcanaryco/atomic-red-team/blob/9e5b12c4912c07562aec7500447b11fa3e17e254/atomics/T1547.001/T1547.001.md
- https://www.welivesecurity.com/en/eset-research/muddywater-snakes-riverbank/

## Metadata
- **Author:** frack113, Swachchhanda Shrawan Poudel (Nextron Systems)
- **Date:** 2022-10-01
- **Rule ID:** `9c226817-8dc9-46c2-a58d-66655aafd7dc`
- **Source file:** `windows/registry/registry_set/registry_set_susp_user_shell_folders.yml`
