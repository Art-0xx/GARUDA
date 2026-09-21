---
type: detection_rule
title: "Microsoft IIS Connection Strings Decryption"
rule_id: 97dbf6e2-e436-44d8-abee-4261b24d3e41
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1003]
---

# Microsoft IIS Connection Strings Decryption

## Description
Detects use of aspnet_regiis to decrypt Microsoft IIS connection strings. An attacker with Microsoft IIS web server access via a webshell or alike can decrypt and dump any hardcoded connection strings, such as the MSSQL service account password using aspnet_regiis command.

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: all of selection*
selection_args:
  CommandLine|contains|all:
  - connectionStrings
  - ' -pdf'
selection_name:
- Image|endswith: \aspnet_regiis.exe
- OriginalFileName: aspnet_regiis.exe
```

## MITRE ATT&CK
- T1003

## False Positives
- Unknown

## References
- https://www.elastic.co/guide/en/security/current/microsoft-iis-connection-strings-decryption.html

## Metadata
- **Author:** Tim Rauch, Elastic (idea)
- **Date:** 2022-09-28
- **Rule ID:** `97dbf6e2-e436-44d8-abee-4261b24d3e41`
- **Source file:** `windows/process_creation/proc_creation_win_iis_connection_strings_decryption.yml`
