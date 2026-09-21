---
type: detection_rule
title: "Nslookup PowerShell Download Cradle"
rule_id: 999bff6d-dc15-44c9-9f5c-e1051bfc86e1
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1059.001]
---

# Nslookup PowerShell Download Cradle

## Description
Detects a powershell download cradle using nslookup. This cradle uses nslookup to extract payloads from DNS records.

## Log Source
```yaml
category: ps_classic_start
product: windows
```

## Detection Logic
```yaml
condition: selection
selection:
  Data|contains:
  - -q=txt http
  - -querytype=txt http
  - -type=txt http
  Data|contains|all:
  - powershell
  - nslookup
  - '[1]'
```

## MITRE ATT&CK
- T1059.001

## False Positives
- Unknown

## References
- https://twitter.com/Alh4zr3d/status/1566489367232651264

## Metadata
- **Author:** Sai Prashanth Pulisetti @pulisettis, Aishwarya Singam
- **Date:** 2022-12-10
- **Rule ID:** `999bff6d-dc15-44c9-9f5c-e1051bfc86e1`
- **Source file:** `windows/powershell/powershell_classic/posh_pc_abuse_nslookup_with_dns_records.yml`
