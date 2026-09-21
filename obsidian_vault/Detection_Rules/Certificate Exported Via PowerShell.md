---
type: detection_rule
title: "Certificate Exported Via PowerShell"
rule_id: 9e716b33-63b2-46da-86a4-bd3c3b9b5dfb
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1552.004, attack.t1059.001]
---

# Certificate Exported Via PowerShell

## Description
Detects calls to cmdlets that are used to export certificates from the local certificate store. Threat actors were seen abusing this to steal private keys from compromised machines.

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
  - 'Export-PfxCertificate '
  - 'Export-Certificate '
```

## MITRE ATT&CK
- T1552.004
- T1059.001

## False Positives
- Legitimate certificate exports by administrators. Additional filters might be required.

## References
- https://us-cert.cisa.gov/ncas/analysis-reports/ar21-112a
- https://learn.microsoft.com/en-us/powershell/module/pki/export-pfxcertificate?view=windowsserver2022-ps
- https://www.splunk.com/en_us/blog/security/breaking-the-chain-defending-against-certificate-services-abuse.html

## Metadata
- **Author:** Nasreddine Bencherchali (Nextron Systems)
- **Date:** 2023-05-18
- **Rule ID:** `9e716b33-63b2-46da-86a4-bd3c3b9b5dfb`
- **Source file:** `windows/process_creation/proc_creation_win_powershell_export_certificate.yml`
