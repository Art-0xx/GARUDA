---
type: detection_rule
title: "Potentially Suspicious JWT Token Search Via CLI"
rule_id: 6d3a3952-6530-44a3-8554-cf17c116c615
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1528, attack.t1552.001]
---

# Potentially Suspicious JWT Token Search Via CLI

## Description
Detects potentially suspicious search for JWT tokens via CLI by looking for the string "eyJ0eX" or "eyJhbG".
JWT tokens are often used for access-tokens across various applications and services like Microsoft 365, Azure, AWS, Google Cloud, and others.
Threat actors may search for these tokens to steal them for lateral movement or privilege escalation.

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: all of selection_*
selection_jwt_string:
  CommandLine|contains:
  - eyJ0eXAiOi
  - eyJhbGciOi
  - ' eyJ0eX'
  - ' "eyJ0eX"'
  - ' ''eyJ0eX'''
  - ' eyJhbG'
  - ' "eyJhbG"'
  - ' ''eyJhbG'''
selection_tools:
  CommandLine|contains:
  - 'find '
  - find.exe
  - findstr
  - 'select-string '
  - strings
```

## MITRE ATT&CK
- T1528
- T1552.001

## False Positives
- Unknown

## References
- https://mrd0x.com/stealing-tokens-from-office-applications/
- https://www.scip.ch/en/?labs.20240523

## Metadata
- **Author:** Nasreddine Bencherchali (Nextron Systems), kagebunsher
- **Date:** 2022-10-25
- **Rule ID:** `6d3a3952-6530-44a3-8554-cf17c116c615`
- **Source file:** `windows/process_creation/proc_creation_win_susp_jwt_token_search.yml`
