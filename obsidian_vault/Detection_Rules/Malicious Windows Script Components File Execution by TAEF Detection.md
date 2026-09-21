---
type: detection_rule
title: "Malicious Windows Script Components File Execution by TAEF Detection"
rule_id: 634b00d5-ccc3-4a06-ae3b-0ec8444dd51b
platform: windows
level: low
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1218]
---

# Malicious Windows Script Components File Execution by TAEF Detection

## Description
Windows Test Authoring and Execution Framework (TAEF) framework allows you to run automation by executing tests files written on different languages (C, C#, Microsoft COM Scripting interfaces
Adversaries may execute malicious code (such as WSC file with VBScript, dll and so on) directly by running te.exe

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: selection
selection:
- Image|endswith: \te.exe
- ParentImage|endswith: \te.exe
- OriginalFileName: \te.exe
```

## MITRE ATT&CK
- T1218

## False Positives
- It's not an uncommon to use te.exe directly to execute legal TAEF tests

## References
- https://lolbas-project.github.io/lolbas/OtherMSBinaries/Te/
- https://twitter.com/pabraeken/status/993298228840992768
- https://learn.microsoft.com/en-us/windows-hardware/drivers/taef/

## Metadata
- **Author:** Agro (@agro_sev) oscd.community
- **Date:** 2020-10-13
- **Rule ID:** `634b00d5-ccc3-4a06-ae3b-0ec8444dd51b`
- **Source file:** `windows/process_creation/proc_creation_win_susp_use_of_te_bin.yml`
