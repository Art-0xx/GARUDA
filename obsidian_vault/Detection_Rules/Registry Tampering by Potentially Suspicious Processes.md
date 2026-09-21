---
type: detection_rule
title: "Registry Tampering by Potentially Suspicious Processes"
rule_id: 7f4c43f9-b1a5-4c7d-b24a-b41bf3a3ebf2
platform: windows
level: medium
status: experimental
tags: [detection, sigma, windows]
mitre_tags: [attack.t1112, attack.t1059.005]
---

# Registry Tampering by Potentially Suspicious Processes

## Description
Detects suspicious registry modifications made by suspicious processes such as script engine processes such as WScript, or CScript etc.
These processes are rarely used for legitimate registry modifications, and their activity may indicate an attempt to modify the registry
without using standard tools like regedit.exe or reg.exe, potentially for evasion and persistence.

## Log Source
```yaml
category: registry_event
product: windows
```

## Detection Logic
```yaml
condition: selection and not 1 of filter_main_*
filter_main_binary_data:
  Details: Binary Data
filter_main_null:
  Details: null
filter_main_wscript_legit_1:
  Image|endswith: \wscript.exe
  TargetObject|contains:
  - SOFTWARE\Microsoft\Windows NT\CurrentVersion\Notifications\Data\
  - \Services\bam\State\UserSettings\S-1-
  - Software\Microsoft\Windows Script\Settings\Telemetry\wscript.exe\
  - Software\Microsoft\Windows\CurrentVersion\Internet Settings\
filter_main_wscript_legit_2:
  Image|endswith: \wscript.exe
  TargetObject|contains: \wscript.exe
selection:
  Image|endswith:
  - \mshta.exe
  - \wscript.exe
  - \cscript.exe
```

## MITRE ATT&CK
- T1112
- T1059.005

## False Positives
- Some legitimate admin or install scripts may use these processes for registry modifications.

## References
- https://www.nextron-systems.com/2025/07/29/detecting-the-most-popular-mitre-persistence-method-registry-run-keys-startup-folder/
- https://www.linkedin.com/posts/mauricefielenbach_livingofftheland-redteam-persistence-activity-7344801774182051843-TE00/

## Metadata
- **Author:** Swachchhanda Shrawan Poudel (Nextron Systems)
- **Date:** 2025-08-13
- **Rule ID:** `7f4c43f9-b1a5-4c7d-b24a-b41bf3a3ebf2`
- **Source file:** `windows/registry/registry_event/registry_event_susp_process_registry_modification.yml`
