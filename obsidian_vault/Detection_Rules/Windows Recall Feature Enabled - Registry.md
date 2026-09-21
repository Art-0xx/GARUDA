---
type: detection_rule
title: "Windows Recall Feature Enabled - Registry"
rule_id: 75180c5f-4ea1-461a-a4f6-6e4700c065d4
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1113]
---

# Windows Recall Feature Enabled - Registry

## Description
Detects the enabling of the Windows Recall feature via registry manipulation. Windows Recall can be enabled by setting the value of "DisableAIDataAnalysis" to "0".
Adversaries may enable Windows Recall as part of post-exploitation discovery and collection activities.
This rule assumes that Recall is already explicitly disabled on the host, and subsequently enabled by the adversary.

## Log Source
```yaml
category: registry_set
product: windows
```

## Detection Logic
```yaml
condition: selection
selection:
  Details: DWORD (0x00000000)
  TargetObject|endswith: \Software\Policies\Microsoft\Windows\WindowsAI\DisableAIDataAnalysis
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
- **Rule ID:** `75180c5f-4ea1-461a-a4f6-6e4700c065d4`
- **Source file:** `windows/registry/registry_set/registry_set_enable_windows_recall.yml`
