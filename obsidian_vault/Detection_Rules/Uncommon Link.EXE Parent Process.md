---
type: detection_rule
title: "Uncommon Link.EXE Parent Process"
rule_id: 6e968eb1-5f05-4dac-94e9-fd0c5cb49fd6
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1218]
---

# Uncommon Link.EXE Parent Process

## Description
Detects an uncommon parent process of "LINK.EXE".
Link.EXE in Microsoft incremental linker. Its a utility usually bundled with Visual Studio installation.
Multiple utilities often found in the same folder (editbin.exe, dumpbin.exe, lib.exe, etc) have a hardcode call to the "LINK.EXE" binary without checking its validity.
This would allow an attacker to sideload any binary with the name "link.exe" if one of the aforementioned tools get executed from a different location.
By filtering the known locations of such utilities we can spot uncommon parent process of LINK.EXE that might be suspicious or malicious.

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: selection and not 1 of filter_main_*
filter_main_visual_studio:
  ParentImage|contains:
  - \VC\bin\
  - \VC\Tools\
  ParentImage|startswith:
  - C:\Program Files\Microsoft Visual Studio\
  - C:\Program Files (x86)\Microsoft Visual Studio\
selection:
  CommandLine|contains: LINK /
  Image|endswith: \link.exe
```

## MITRE ATT&CK
- T1218

## False Positives
- Unknown

## References
- https://twitter.com/0gtweet/status/1560732860935729152

## Metadata
- **Author:** Nasreddine Bencherchali (Nextron Systems)
- **Date:** 2022-08-22
- **Rule ID:** `6e968eb1-5f05-4dac-94e9-fd0c5cb49fd6`
- **Source file:** `windows/process_creation/proc_creation_win_link_uncommon_parent_process.yml`
