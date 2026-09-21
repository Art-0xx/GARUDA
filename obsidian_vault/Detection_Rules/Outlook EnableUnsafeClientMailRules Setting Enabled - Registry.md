---
type: detection_rule
title: "Outlook EnableUnsafeClientMailRules Setting Enabled - Registry"
rule_id: 6763c6c8-bd01-4687-bc8d-4fa52cf8ba08
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1112]
---

# Outlook EnableUnsafeClientMailRules Setting Enabled - Registry

## Description
Detects an attacker trying to enable the outlook security setting "EnableUnsafeClientMailRules" which allows outlook to run applications or execute macros

## Log Source
```yaml
category: registry_set
product: windows
```

## Detection Logic
```yaml
condition: selection
selection:
  Details: DWORD (0x00000001)
  TargetObject|endswith: \Outlook\Security\EnableUnsafeClientMailRules
```

## MITRE ATT&CK
- T1112

## False Positives
- Unknown

## References
- https://support.microsoft.com/en-us/topic/how-to-control-the-rule-actions-to-start-an-application-or-run-a-macro-in-outlook-2016-and-outlook-2013-e4964b72-173c-959d-5d7b-ead562979048
- https://speakerdeck.com/heirhabarov/hunting-for-persistence-via-microsoft-exchange-server-or-outlook?slide=44

## Metadata
- **Author:** Nasreddine Bencherchali (Nextron Systems)
- **Date:** 2023-02-08
- **Rule ID:** `6763c6c8-bd01-4687-bc8d-4fa52cf8ba08`
- **Source file:** `windows/registry/registry_set/registry_set_office_outlook_enable_unsafe_client_mail_rules.yml`
