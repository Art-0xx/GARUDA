---
type: detection_rule
title: "Suspicious Outlook Macro Created"
rule_id: 117d3d3a-755c-4a61-b23e-9171146d094c
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1137, attack.t1008, attack.t1546]
---

# Suspicious Outlook Macro Created

## Description
Detects the creation of a macro file for Outlook.

## Log Source
```yaml
category: file_event
product: windows
```

## Detection Logic
```yaml
condition: selection and not filter
filter:
  Image|endswith: \outlook.exe
selection:
  TargetFilename|endswith: \Microsoft\Outlook\VbaProject.OTM
```

## MITRE ATT&CK
- T1137
- T1008
- T1546

## False Positives
- Unlikely

## References
- https://www.mdsec.co.uk/2020/11/a-fresh-outlook-on-mail-based-persistence/
- https://speakerdeck.com/heirhabarov/hunting-for-persistence-via-microsoft-exchange-server-or-outlook?slide=53
- https://www.linkedin.com/pulse/outlook-backdoor-using-vba-samir-b-/

## Metadata
- **Author:** Nasreddine Bencherchali (Nextron Systems)
- **Date:** 2023-02-08
- **Rule ID:** `117d3d3a-755c-4a61-b23e-9171146d094c`
- **Source file:** `windows/file/file_event/file_event_win_office_outlook_susp_macro_creation.yml`
