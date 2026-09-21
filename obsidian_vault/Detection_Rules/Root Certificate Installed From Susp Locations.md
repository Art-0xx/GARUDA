---
type: detection_rule
title: "Root Certificate Installed From Susp Locations"
rule_id: 5f6a601c-2ecb-498b-9c33-660362323afa
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1553.004]
---

# Root Certificate Installed From Susp Locations

## Description
Adversaries may install a root certificate on a compromised system to avoid warnings when connecting to adversary controlled web servers.

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: selection
selection:
  CommandLine|contains:
  - \AppData\Local\Temp\
  - :\Windows\TEMP\
  - \Desktop\
  - \Downloads\
  - \Perflogs\
  - :\Users\Public\
  CommandLine|contains|all:
  - Import-Certificate
  - ' -FilePath '
  - Cert:\LocalMachine\Root
```

## MITRE ATT&CK
- T1553.004

## False Positives
- Unlikely

## References
- https://www.microsoft.com/security/blog/2022/09/07/profiling-dev-0270-phosphorus-ransomware-operations/
- https://learn.microsoft.com/en-us/powershell/module/pki/import-certificate?view=windowsserver2022-ps

## Metadata
- **Author:** Nasreddine Bencherchali (Nextron Systems)
- **Date:** 2022-09-09
- **Rule ID:** `5f6a601c-2ecb-498b-9c33-660362323afa`
- **Source file:** `windows/process_creation/proc_creation_win_powershell_import_cert_susp_locations.yml`
