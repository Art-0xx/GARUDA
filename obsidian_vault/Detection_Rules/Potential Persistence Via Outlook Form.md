---
type: detection_rule
title: "Potential Persistence Via Outlook Form"
rule_id: c3edc6a5-d9d4-48d8-930e-aab518390917
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1137.003]
---

# Potential Persistence Via Outlook Form

## Description
Detects the creation of a new Outlook form which can contain malicious code

## Log Source
```yaml
category: file_event
product: windows
```

## Detection Logic
```yaml
condition: selection
selection:
  Image|endswith: \outlook.exe
  TargetFilename|contains:
  - \AppData\Local\Microsoft\FORMS\IPM
  - \Local Settings\Application Data\Microsoft\Forms
```

## MITRE ATT&CK
- T1137.003

## False Positives
- Legitimate use of outlook forms

## References
- https://speakerdeck.com/heirhabarov/hunting-for-persistence-via-microsoft-exchange-server-or-outlook?slide=76
- https://speakerdeck.com/heirhabarov/hunting-for-persistence-via-microsoft-exchange-server-or-outlook?slide=79
- https://learn.microsoft.com/en-us/office/vba/outlook/concepts/outlook-forms/create-an-outlook-form
- https://www.slipstick.com/developer/custom-form/clean-outlooks-forms-cache/

## Metadata
- **Author:** Tobias Michalski (Nextron Systems)
- **Date:** 2021-06-10
- **Rule ID:** `c3edc6a5-d9d4-48d8-930e-aab518390917`
- **Source file:** `windows/file/file_event/file_event_win_office_outlook_newform.yml`
