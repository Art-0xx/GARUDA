---
type: detection_rule
title: "Suspicious Dropbox API Usage"
rule_id: 25eabf56-22f0-4915-a1ed-056b8dae0a68
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1105, attack.t1567.002]
---

# Suspicious Dropbox API Usage

## Description
Detects an executable that isn't dropbox but communicates with the Dropbox API

## Log Source
```yaml
category: network_connection
product: windows
```

## Detection Logic
```yaml
condition: selection and not 1 of filter_main_*
filter_main_legit_dropbox:
  Image|contains: \Dropbox
selection:
  DestinationHostname|endswith:
  - api.dropboxapi.com
  - content.dropboxapi.com
  Initiated: 'true'
```

## MITRE ATT&CK
- T1105
- T1567.002

## False Positives
- Legitimate use of the API with a tool that the author wasn't aware of

## References
- https://app.any.run/tasks/7e906adc-9d11-447f-8641-5f40375ecebb
- https://www.zscaler.com/blogs/security-research/new-espionage-attack-molerats-apt-targeting-users-middle-east

## Metadata
- **Author:** Florian Roth (Nextron Systems)
- **Date:** 2022-04-20
- **Rule ID:** `25eabf56-22f0-4915-a1ed-056b8dae0a68`
- **Source file:** `windows/network_connection/net_connection_win_domain_dropbox_api.yml`
