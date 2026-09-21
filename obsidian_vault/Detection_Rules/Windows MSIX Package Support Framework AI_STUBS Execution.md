---
type: detection_rule
title: "Windows MSIX Package Support Framework AI_STUBS Execution"
rule_id: af5732ed-764e-489d-826d-0447c8b36242
platform: windows
level: low
status: experimental
tags: [detection, sigma, windows]
mitre_tags: [attack.t1218, attack.t1553.005, attack.t1204.002]
---

# Windows MSIX Package Support Framework AI_STUBS Execution

## Description
Detects execution of Advanced Installer MSIX Package Support Framework (PSF) components, specifically AI_STUBS executables with original filename 'popupwrapper.exe'.
This activity may indicate malicious MSIX packages build with Advanced Installer leveraging the Package Support Framework to bypass application control restrictions.

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: selection
selection:
  Image|endswith:
  - \AI_STUBS\AiStubX64Elevated.exe
  - \AI_STUBS\AiStubX86Elevated.exe
  - \AI_STUBS\AiStubX64.exe
  - \AI_STUBS\AiStubX86.exe
  OriginalFileName: popupwrapper.exe
```

## MITRE ATT&CK
- T1218
- T1553.005
- T1204.002

## False Positives
- Legitimate applications packaged with Advanced Installer using Package Support Framework

## References
- https://redcanary.com/blog/threat-intelligence/msix-installers/
- https://redcanary.com/threat-detection-report/techniques/installer-packages/
- https://learn.microsoft.com/en-us/windows/msix/package/package-support-framework
- https://www.splunk.com/en_us/blog/security/msix-weaponization-threat-detection-splunk.html

## Metadata
- **Author:** Michael Haag, Swachchhanda Shrawan Poudel (Nextron Systems)
- **Date:** 2025-11-03
- **Rule ID:** `af5732ed-764e-489d-826d-0447c8b36242`
- **Source file:** `windows/process_creation/proc_creation_win_msix_ai_stub_execution.yml`
