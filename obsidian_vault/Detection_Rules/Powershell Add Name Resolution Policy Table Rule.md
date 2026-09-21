---
type: detection_rule
title: "Powershell Add Name Resolution Policy Table Rule"
rule_id: 4368354e-1797-463c-bc39-a309effbe8d7
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1565]
---

# Powershell Add Name Resolution Policy Table Rule

## Description
Detects powershell scripts that adds a Name Resolution Policy Table (NRPT) rule for the specified namespace.
This will bypass the default DNS server and uses a specified server for answering the query.

## Log Source
```yaml
category: ps_script
definition: 'Requirements: Script Block Logging must be enabled'
product: windows
```

## Detection Logic
```yaml
condition: selection
selection:
  ScriptBlockText|contains|all:
  - Add-DnsClientNrptRule
  - -Namesp
  - -NameSe
```

## MITRE ATT&CK
- T1565

## False Positives
- Unknown

## References
- https://twitter.com/NathanMcNulty/status/1569497348841287681
- https://learn.microsoft.com/en-us/powershell/module/dnsclient/add-dnsclientnrptrule?view=windowsserver2022-ps

## Metadata
- **Author:** Borna Talebi
- **Date:** 2021-09-14
- **Rule ID:** `4368354e-1797-463c-bc39-a309effbe8d7`
- **Source file:** `windows/powershell/powershell_script/posh_ps_add_dnsclient_rule.yml`
