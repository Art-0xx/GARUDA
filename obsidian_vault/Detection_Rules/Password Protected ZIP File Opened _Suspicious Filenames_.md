---
type: detection_rule
title: "Password Protected ZIP File Opened (Suspicious Filenames)"
rule_id: 54f0434b-726f-48a1-b2aa-067df14516e4
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1027, attack.t1105, attack.t1036]
---

# Password Protected ZIP File Opened (Suspicious Filenames)

## Description
Detects the extraction of password protected ZIP archives with suspicious file names. See the filename variable for more details on which file has been opened.

## Log Source
```yaml
product: windows
service: security
```

## Detection Logic
```yaml
condition: selection and selection_filename
selection:
  EventID: 5379
  TargetName|contains: Microsoft_Windows_Shell_ZipFolder:filename
selection_filename:
  TargetName|contains:
  - invoice
  - new order
  - rechnung
  - factura
  - delivery
  - purchase
  - order
  - payment
```

## MITRE ATT&CK
- T1027
- T1105
- T1036

## False Positives
- Legitimate used of encrypted ZIP files

## References
- https://twitter.com/sbousseaden/status/1523383197513379841

## Metadata
- **Author:** Florian Roth (Nextron Systems)
- **Date:** 2022-05-09
- **Rule ID:** `54f0434b-726f-48a1-b2aa-067df14516e4`
- **Source file:** `windows/builtin/security/win_security_susp_opened_encrypted_zip_filename.yml`
