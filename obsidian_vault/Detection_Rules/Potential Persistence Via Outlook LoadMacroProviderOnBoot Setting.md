---
type: detection_rule
title: "Potential Persistence Via Outlook LoadMacroProviderOnBoot Setting"
rule_id: 396ae3eb-4174-4b9b-880e-dc0364d78a19
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1137, attack.t1008, attack.t1546]
---

# Potential Persistence Via Outlook LoadMacroProviderOnBoot Setting

## Description
Detects the modification of Outlook setting "LoadMacroProviderOnBoot" which if enabled allows the automatic loading of any configured VBA project/module

## Log Source
```yaml
category: registry_set
product: windows
```

## Detection Logic
```yaml
condition: selection
selection:
  Details|contains: '0x00000001'
  TargetObject|endswith: \Outlook\LoadMacroProviderOnBoot
```

## MITRE ATT&CK
- T1137
- T1008
- T1546

## False Positives
- Unknown

## References
- https://speakerdeck.com/heirhabarov/hunting-for-persistence-via-microsoft-exchange-server-or-outlook?slide=53
- https://www.linkedin.com/pulse/outlook-backdoor-using-vba-samir-b-/

## Metadata
- **Author:** Nasreddine Bencherchali (Nextron Systems)
- **Date:** 2021-04-05
- **Rule ID:** `396ae3eb-4174-4b9b-880e-dc0364d78a19`
- **Source file:** `windows/registry/registry_set/registry_set_office_outlook_enable_load_macro_provider_on_boot.yml`
