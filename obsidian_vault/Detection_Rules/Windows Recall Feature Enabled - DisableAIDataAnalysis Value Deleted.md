---
type: detection_rule
title: "Windows Recall Feature Enabled - DisableAIDataAnalysis Value Deleted"
rule_id: 5dfc1465-8f65-4fde-8eb5-6194380c6a62
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1113]
---

# Windows Recall Feature Enabled - DisableAIDataAnalysis Value Deleted

## Description
Detects the enabling of the Windows Recall feature via registry manipulation. Windows Recall can be enabled by deleting the existing "DisableAIDataAnalysis" registry value.
Adversaries may enable Windows Recall as part of post-exploitation discovery and collection activities.
This rule assumes that Recall is already explicitly disabled on the host, and subsequently enabled by the adversary.

## Log Source
```yaml
category: registry_delete
product: windows
```

## Detection Logic
```yaml
condition: selection
selection:
  EventType: DeleteValue
  TargetObject|endswith: \Microsoft\Windows\WindowsAI\DisableAIDataAnalysis
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
- **Rule ID:** `5dfc1465-8f65-4fde-8eb5-6194380c6a62`
- **Source file:** `windows/registry/registry_delete/registry_delete_enable_windows_recall.yml`
