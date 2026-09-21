---
type: detection_rule
title: "Potentially Suspicious Office Document Executed From Trusted Location"
rule_id: f99abdf0-6283-4e71-bd2b-b5c048a94743
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1202]
---

# Potentially Suspicious Office Document Executed From Trusted Location

## Description
Detects the execution of an Office application that points to a document that is located in a trusted location. Attackers often used this to avoid macro security and execute their malicious code.

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: all of selection_* and not 1 of filter_main_*
filter_main_dotx:
  CommandLine|endswith:
  - .dotx
  - .xltx
  - .potx
selection_img:
- Image|endswith:
  - \EXCEL.EXE
  - \POWERPNT.EXE
  - \WINWORD.exe
- OriginalFileName:
  - Excel.exe
  - POWERPNT.EXE
  - WinWord.exe
selection_parent:
  ParentImage|endswith:
  - \explorer.exe
  - \dopus.exe
selection_trusted_location:
  CommandLine|contains:
  - \AppData\Roaming\Microsoft\Templates
  - \AppData\Roaming\Microsoft\Word\Startup\
  - \Microsoft Office\root\Templates\
  - \Microsoft Office\Templates\
```

## MITRE ATT&CK
- T1202

## False Positives
- Unknown

## References
- Internal Research
- https://twitter.com/Max_Mal_/status/1633863678909874176
- https://techcommunity.microsoft.com/t5/microsoft-365-blog/new-security-hardening-policies-for-trusted-documents/ba-p/3023465
- https://twitter.com/_JohnHammond/status/1588155401752788994

## Metadata
- **Author:** Nasreddine Bencherchali (Nextron Systems)
- **Date:** 2023-06-21
- **Rule ID:** `f99abdf0-6283-4e71-bd2b-b5c048a94743`
- **Source file:** `windows/process_creation/proc_creation_win_office_exec_from_trusted_locations.yml`
