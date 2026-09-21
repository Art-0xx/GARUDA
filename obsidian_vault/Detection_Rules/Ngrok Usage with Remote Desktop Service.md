---
type: detection_rule
title: "Ngrok Usage with Remote Desktop Service"
rule_id: 64d51a51-32a6-49f0-9f3d-17e34d640272
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1090]
---

# Ngrok Usage with Remote Desktop Service

## Description
Detects cases in which ngrok, a reverse proxy tool, forwards events to the local RDP port, which could be a sign of malicious behaviour

## Log Source
```yaml
product: windows
service: terminalservices-localsessionmanager
```

## Detection Logic
```yaml
condition: selection
selection:
  Address|contains: '16777216'
  EventID: 21
```

## MITRE ATT&CK
- T1090

## False Positives
- Unknown

## References
- https://twitter.com/tekdefense/status/1519711183162556416?s=12&t=OTsHCBkQOTNs1k3USz65Zg
- https://ngrok.com/

## Metadata
- **Author:** Florian Roth (Nextron Systems)
- **Date:** 2022-04-29
- **Rule ID:** `64d51a51-32a6-49f0-9f3d-17e34d640272`
- **Source file:** `windows/builtin/terminalservices/win_terminalservices_rdp_ngrok.yml`
