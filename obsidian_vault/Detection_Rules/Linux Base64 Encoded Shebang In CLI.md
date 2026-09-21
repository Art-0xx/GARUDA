---
type: detection_rule
title: "Linux Base64 Encoded Shebang In CLI"
rule_id: fe2f9663-41cb-47e2-b954-8a228f3b9dff
platform: linux
level: medium
status: test
tags: [detection, sigma, linux]
mitre_tags: [attack.t1140]
---

# Linux Base64 Encoded Shebang In CLI

## Description
Detects the presence of a base64 version of the shebang in the commandline, which could indicate a malicious payload about to be decoded

## Log Source
```yaml
category: process_creation
product: linux
```

## Detection Logic
```yaml
condition: selection
selection:
  CommandLine|contains:
  - IyEvYmluL2Jhc2
  - IyEvYmluL2Rhc2
  - IyEvYmluL3pza
  - IyEvYmluL2Zpc2
  - IyEvYmluL3No
```

## MITRE ATT&CK
- T1140

## False Positives
- Legitimate administration activities

## References
- https://www.trendmicro.com/pl_pl/research/20/i/the-evolution-of-malicious-shell-scripts.html
- https://github.com/carlospolop/PEASS-ng/tree/master/linPEAS

## Metadata
- **Author:** Nasreddine Bencherchali (Nextron Systems)
- **Date:** 2022-09-15
- **Rule ID:** `fe2f9663-41cb-47e2-b954-8a228f3b9dff`
- **Source file:** `linux/process_creation/proc_creation_lnx_base64_shebang_cli.yml`
