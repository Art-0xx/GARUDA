---
type: detection_rule
title: "Potential Persistence Via Outlook Home Page"
rule_id: ddd171b5-2cc6-4975-9e78-f0eccd08cc76
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1112]
---

# Potential Persistence Via Outlook Home Page

## Description
Detects potential persistence activity via outlook home page.
An attacker can set a home page to achieve code execution and persistence by editing the WebView registry keys.

## Log Source
```yaml
category: registry_set
product: windows
```

## Detection Logic
```yaml
condition: selection
selection:
  TargetObject|contains|all:
  - \Software\Microsoft\Office\
  - \Outlook\WebView\
  TargetObject|endswith: \URL
```

## MITRE ATT&CK
- T1112

## False Positives
- Unknown

## References
- https://speakerdeck.com/heirhabarov/hunting-for-persistence-via-microsoft-exchange-server-or-outlook?slide=70
- https://support.microsoft.com/en-us/topic/outlook-home-page-feature-is-missing-in-folder-properties-d207edb7-aa02-46c5-b608-5d9dbed9bd04?ui=en-us&rs=en-us&ad=us
- https://trustedsec.com/blog/specula-turning-outlook-into-a-c2-with-one-registry-change

## Metadata
- **Author:** Tobias Michalski (Nextron Systems), David Bertho (@dbertho) & Eirik Sveen (@0xSV1), Storebrand
- **Date:** 2021-06-09
- **Rule ID:** `ddd171b5-2cc6-4975-9e78-f0eccd08cc76`
- **Source file:** `windows/registry/registry_set/registry_set_persistence_outlook_homepage.yml`
