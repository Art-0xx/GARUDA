---
type: detection_rule
title: "LSASS Process Dump Artefact In CrashDumps Folder"
rule_id: 6902955a-01b7-432c-b32a-6f5f81d8f625
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1003.001]
---

# LSASS Process Dump Artefact In CrashDumps Folder

## Description
Detects the presence of an LSASS dump file in the "CrashDumps" folder. This could be a sign of LSASS credential dumping. Techniques such as the LSASS Shtinkering have been seen abusing the Windows Error Reporting to dump said process.

## Log Source
```yaml
category: file_event
product: windows
```

## Detection Logic
```yaml
condition: selection
selection:
  TargetFilename|contains: lsass.exe.
  TargetFilename|endswith: .dmp
  TargetFilename|startswith: C:\Windows\System32\config\systemprofile\AppData\Local\CrashDumps\
```

## MITRE ATT&CK
- T1003.001

## False Positives
- Rare legitimate dump of the process by the operating system due to a crash of lsass

## References
- https://github.com/deepinstinct/Lsass-Shtinkering
- https://media.defcon.org/DEF%20CON%2030/DEF%20CON%2030%20presentations/Asaf%20Gilboa%20-%20LSASS%20Shtinkering%20Abusing%20Windows%20Error%20Reporting%20to%20Dump%20LSASS.pdf

## Metadata
- **Author:** @pbssubhash
- **Date:** 2022-12-08
- **Rule ID:** `6902955a-01b7-432c-b32a-6f5f81d8f625`
- **Source file:** `windows/file/file_event/file_event_win_lsass_shtinkering.yml`
