---
type: detection_rule
title: "Security Support Provider (SSP) Added to LSA Configuration"
rule_id: eeb30123-9fbd-4ee8-aaa0-2e545bbed6dc
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1547.005]
---

# Security Support Provider (SSP) Added to LSA Configuration

## Description
Detects the addition of a SSP to the registry. Upon a reboot or API call, SSP DLLs gain access to encrypted and plaintext passwords stored in Windows.

## Log Source
```yaml
category: registry_event
product: windows
```

## Detection Logic
```yaml
condition: selection and not 1 of filter_main_*
filter_main_image_null:
  Image: null
filter_main_msiexec:
  Image:
  - C:\Windows\system32\msiexec.exe
  - C:\Windows\syswow64\MsiExec.exe
selection:
  TargetObject|endswith:
  - \Control\Lsa\Security Packages
  - \Control\Lsa\OSConfig\Security Packages
```

## MITRE ATT&CK
- T1547.005

## False Positives
- Unknown

## References
- https://powersploit.readthedocs.io/en/latest/Persistence/Install-SSP/
- https://github.com/EmpireProject/Empire/blob/08cbd274bef78243d7a8ed6443b8364acd1fc48b/data/module_source/persistence/Install-SSP.ps1#L157

## Metadata
- **Author:** iwillkeepwatch
- **Date:** 2019-01-18
- **Rule ID:** `eeb30123-9fbd-4ee8-aaa0-2e545bbed6dc`
- **Source file:** `windows/registry/registry_event/registry_event_ssp_added_lsa_config.yml`
