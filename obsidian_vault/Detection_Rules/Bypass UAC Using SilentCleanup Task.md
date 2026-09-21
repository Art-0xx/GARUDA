---
type: detection_rule
title: "Bypass UAC Using SilentCleanup Task"
rule_id: 724ea201-6514-4f38-9739-e5973c34f49a
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1548.002]
---

# Bypass UAC Using SilentCleanup Task

## Description
Detects the setting of the environement variable "windir" to a non default value.
Attackers often abuse this variable in order to trigger a UAC bypass via the "SilentCleanup" task.
The SilentCleanup task located in %windir%\system32\cleanmgr.exe is an auto-elevated task that can be abused to elevate any file with administrator privileges without prompting UAC.

## Log Source
```yaml
category: registry_set
product: windows
```

## Detection Logic
```yaml
condition: selection and not 1 of filter_main_*
filter_main_default:
  Details: '%SystemRoot%'
selection:
  TargetObject|endswith: \Environment\windir
```

## MITRE ATT&CK
- T1548.002

## False Positives
- Unknown

## References
- https://github.com/redcanaryco/atomic-red-team/blob/f339e7da7d05f6057fdfcdd3742bfcf365fee2a9/atomics/T1548.002/T1548.002.md#atomic-test-9---bypass-uac-using-silentcleanup-task
- https://www.reddit.com/r/hacking/comments/ajtrws/bypassing_highest_uac_level_windows_810/
- https://www.fortinet.com/blog/threat-research/enter-the-darkgate-new-cryptocurrency-mining-and-ransomware-campaign

## Metadata
- **Author:** frack113, Nextron Systems
- **Date:** 2022-01-06
- **Rule ID:** `724ea201-6514-4f38-9739-e5973c34f49a`
- **Source file:** `windows/registry/registry_set/registry_set_bypass_uac_using_silentcleanup_task.yml`
