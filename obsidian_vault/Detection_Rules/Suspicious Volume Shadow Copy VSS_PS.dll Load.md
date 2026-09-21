---
type: detection_rule
title: "Suspicious Volume Shadow Copy VSS_PS.dll Load"
rule_id: 333cdbe8-27bb-4246-bf82-b41a0dca4b70
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1490]
---

# Suspicious Volume Shadow Copy VSS_PS.dll Load

## Description
Detects the image load of vss_ps.dll by uncommon executables. This DLL is used by the Volume Shadow Copy Service (VSS) to manage shadow copies of files and volumes.
It is often abused by attackers to delete or manipulate shadow copies, which can hinder forensic investigations and data recovery efforts.
The fact that it is loaded by processes that are not typically associated with VSS operations can indicate suspicious activity.

## Log Source
```yaml
category: image_load
product: windows
```

## Detection Logic
```yaml
condition: selection and not 1 of filter_main_* and not 1 of filter_optional_*
filter_main_image_null:
  Image: null
filter_main_legit:
  Image|endswith:
  - \clussvc.exe
  - \dismhost.exe
  - \dllhost.exe
  - \inetsrv\appcmd.exe
  - \inetsrv\iissetup.exe
  - \msiexec.exe
  - \rundll32.exe
  - \searchindexer.exe
  - \srtasks.exe
  - \svchost.exe
  - \System32\SystemPropertiesAdvanced.exe
  - \taskhostw.exe
  - \thor.exe
  - \thor64.exe
  - \tiworker.exe
  - \vssvc.exe
  - \vssadmin.exe
  - \WmiPrvSE.exe
  - \wsmprovhost.exe
  Image|startswith: C:\Windows\
filter_main_update:
  CommandLine|contains: \dismhost.exe {
  CommandLine|startswith: C:\$WinREAgent\Scratch\
filter_optional_programfiles:
  Image|startswith:
  - C:\Program Files\
  - C:\Program Files (x86)\
selection:
  ImageLoaded|endswith: \vss_ps.dll
```

## MITRE ATT&CK
- T1490

## False Positives
- Unknown

## References
- https://www.virustotal.com/gui/file/ba88ca45589fae0139a40ca27738a8fc2dfbe1be5a64a9558f4e0f52b35c5add
- https://twitter.com/am0nsec/status/1412232114980982787

## Metadata
- **Author:** Markus Neis, @markus_neis
- **Date:** 2021-07-07
- **Rule ID:** `333cdbe8-27bb-4246-bf82-b41a0dca4b70`
- **Source file:** `windows/image_load/image_load_dll_vss_ps_susp_load.yml`
