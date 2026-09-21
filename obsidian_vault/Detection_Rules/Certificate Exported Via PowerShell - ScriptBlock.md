---
type: detection_rule
title: "Certificate Exported Via PowerShell - ScriptBlock"
rule_id: aa7a3fce-bef5-4311-9cc1-5f04bb8c308c
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1552.004]
---

# Certificate Exported Via PowerShell - ScriptBlock

## Description
Detects calls to cmdlets inside of PowerShell scripts that are used to export certificates from the local certificate store. Threat actors were seen abusing this to steal private keys from compromised machines.

## Log Source
```yaml
category: ps_script
definition: 'Requirements: Script Block Logging must be enabled'
product: windows
```

## Detection Logic
```yaml
condition: selection and not 1 of filter_optional_*
filter_optional_module_export:
  ScriptBlockText|contains: CmdletsToExport = @(
selection:
  ScriptBlockText|contains:
  - Export-PfxCertificate
  - Export-Certificate
```

## MITRE ATT&CK
- T1552.004

## False Positives
- Legitimate certificate exports by administrators. Additional filters might be required.

## References
- https://us-cert.cisa.gov/ncas/analysis-reports/ar21-112a
- https://learn.microsoft.com/en-us/powershell/module/pki/export-pfxcertificate?view=windowsserver2022-ps
- https://www.splunk.com/en_us/blog/security/breaking-the-chain-defending-against-certificate-services-abuse.html

## Metadata
- **Author:** Florian Roth (Nextron Systems)
- **Date:** 2021-04-23
- **Rule ID:** `aa7a3fce-bef5-4311-9cc1-5f04bb8c308c`
- **Source file:** `windows/powershell/powershell_script/posh_ps_export_certificate.yml`
