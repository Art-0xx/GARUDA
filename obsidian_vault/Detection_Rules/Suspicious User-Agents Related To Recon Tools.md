---
type: detection_rule
title: "Suspicious User-Agents Related To Recon Tools"
rule_id: 19aa4f58-94ca-45ff-bc34-92e533c0994a
platform: web
level: medium
status: test
tags: [detection, sigma, web]
mitre_tags: [attack.t1190]
---

# Suspicious User-Agents Related To Recon Tools

## Description
Detects known suspicious (default) user-agents related to scanning/recon tools

## Log Source
```yaml
category: webserver
```

## Detection Logic
```yaml
condition: selection
selection:
  cs-user-agent|contains:
  - commix/
  - feroxbuster/
  - Fuzz Faster U Fool
  - GIS - AppSec Team - Project Vision
  - gobuster/
  - Nikto/
  - Nmap Scripting Engine
  - Recon-ng/v
  - sqlmap/
  - WhatWeb/
  - Wfuzz/
  - WPScan v
  - zgrab/
```

## MITRE ATT&CK
- T1190

## False Positives
- Unknown

## References
- https://github.com/commixproject/commix/blob/c7f1447371524427bb30abe731235acc7386153b/src/utils/settings.py#L281
- https://github.com/epi052/feroxbuster/blob/ffdf871abe0a358a1531ba4135e208d4dbe8fc31/src/config/utils.rs#L100
- https://github.com/ffuf/ffuf/blob/ce3cf6bd733a24d3a9f024305234c1a6298198eb/pkg/runner/simple.go#L130
- https://github.com/lanmaster53/recon-ng/blob/9e907dfe09fce2997f0301d746796408e01a60b7/recon/core/base.py#L92
- https://github.com/nmap/nmap/blob/2e47fa87469fd358ef64689d2d2de7294e385eb8/nselib/http.lua#L160

## Metadata
- **Author:** Nasreddine Bencherchali (Nextron Systems), Tim Shelton
- **Date:** 2022-07-19
- **Rule ID:** `19aa4f58-94ca-45ff-bc34-92e533c0994a`
- **Source file:** `web/webserver_generic/web_susp_useragents.yml`
