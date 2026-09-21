---
type: detection_rule
title: "Suspicious Msiexec Execute Arbitrary DLL"
rule_id: 6f4191bb-912b-48a8-9ce7-682769541e6d
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1218.007]
---

# Suspicious Msiexec Execute Arbitrary DLL

## Description
Adversaries may abuse msiexec.exe to proxy execution of malicious payloads.
Msiexec.exe is the command-line utility for the Windows Installer and is thus commonly associated with executing installation packages (.msi)

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: selection and not 1 of filter_main_*
filter_main_legit_path:
  CommandLine|contains:
  - \MsiExec.exe" /Y "C:\Program Files\
  - \MsiExec.exe" /Y "C:\Program Files (x86)\
  - \MsiExec.exe" /Y "C:\Windows\System32\
  - \MsiExec.exe" /Y "C:\Windows\SysWOW64\
selection:
  CommandLine|contains|windash: ' /Y'
  Image|endswith: \msiexec.exe
```

## MITRE ATT&CK
- T1218.007

## False Positives
- Legitimate script

## References
- https://learn.microsoft.com/en-us/windows-server/administration/windows-commands/msiexec
- https://github.com/redcanaryco/atomic-red-team/blob/f339e7da7d05f6057fdfcdd3742bfcf365fee2a9/atomics/T1218.007/T1218.007.md
- https://twitter.com/_st0pp3r_/status/1583914515996897281

## Metadata
- **Author:** frack113
- **Date:** 2022-01-16
- **Rule ID:** `6f4191bb-912b-48a8-9ce7-682769541e6d`
- **Source file:** `windows/process_creation/proc_creation_win_msiexec_execute_dll.yml`
