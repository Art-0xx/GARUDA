---
type: detection_rule
title: "Suspicious Digital Signature Of AppX Package"
rule_id: b5aa7d60-c17e-4538-97de-09029d6cd76b
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
---

# Suspicious Digital Signature Of AppX Package

## Description
Detects execution of AppX packages with known suspicious or malicious signature

## Log Source
```yaml
product: windows
service: appxpackaging-om
```

## Detection Logic
```yaml
condition: selection
selection:
  EventID: 157
  subjectName: CN=Foresee Consulting Inc., O=Foresee Consulting Inc., L=North York,
    S=Ontario, C=CA, SERIALNUMBER=1004913-1, OID.1.3.6.1.4.1.311.60.2.1.3=CA, OID.2.5.4.15=Private
    Organization
```

## False Positives
- Unknown

## References
- Internal Research
- https://www.sentinelone.com/labs/inside-malicious-windows-apps-for-malware-deployment/

## Metadata
- **Author:** Nasreddine Bencherchali (Nextron Systems)
- **Date:** 2023-01-16
- **Rule ID:** `b5aa7d60-c17e-4538-97de-09029d6cd76b`
- **Source file:** `windows/builtin/appxpackaging_om/win_appxpackaging_om_sups_appx_signature.yml`
