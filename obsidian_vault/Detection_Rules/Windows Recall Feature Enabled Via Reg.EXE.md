---
type: detection_rule
title: "Windows Recall Feature Enabled Via Reg.EXE"
rule_id: 817f252c-5143-4dae-b418-48c3e9f63728
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1113]
---

# Windows Recall Feature Enabled Via Reg.EXE

## Description
Detects the enabling of the Windows Recall feature via registry manipulation.
Windows Recall can be enabled by deleting the existing "DisableAIDataAnalysis" value, or setting it to 0.
Adversaries may enable Windows Recall as part of post-exploitation discovery and collection activities.
This rule assumes that Recall is already explicitly disabled on the host, and subsequently enabled by the adversary.

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: selection_img and selection_value and 1 of selection_action_*
selection_action_add:
  CommandLine|contains:
  - add
  - '0'
selection_action_delete:
  CommandLine|contains: delete
selection_img:
- Image|endswith: \reg.exe
- OriginalFileName: reg.exe
selection_value:
  CommandLine|contains|all:
  - Microsoft\Windows\WindowsAI
  - DisableAIDataAnalysis
```

## MITRE ATT&CK
- T1113

## False Positives
- Legitimate use/activation of Windows Recall

## References
- https://learn.microsoft.com/en-us/windows/client-management/manage-recall
- https://learn.microsoft.com/en-us/windows/client-management/mdm/policy-csp-windowsai#disableaidataanalysis

## Metadata
- **Author:** Sajid Nawaz Khan
- **Date:** 2024-06-02
- **Rule ID:** `817f252c-5143-4dae-b418-48c3e9f63728`
- **Source file:** `windows/process_creation/proc_creation_win_reg_enable_windows_recall.yml`
