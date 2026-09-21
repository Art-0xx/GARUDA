---
type: detection_rule
title: "Added Credentials to Existing Application"
rule_id: cbb67ecc-fb70-4467-9350-c910bdf7c628
platform: cloud
level: high
status: test
tags: [detection, sigma, cloud]
mitre_tags: [attack.t1098.001]
---

# Added Credentials to Existing Application

## Description
Detects when a new credential is added to an existing application. Any additional credentials added outside of expected processes could be a malicious actor using those credentials.

## Log Source
```yaml
product: azure
service: auditlogs
```

## Detection Logic
```yaml
condition: selection
selection:
  properties.message:
  - Update application - Certificates and secrets management
  - Update Service principal/Update Application
```

## MITRE ATT&CK
- T1098.001

## False Positives
- When credentials are added/removed as part of the normal working hours/workflows

## References
- https://learn.microsoft.com/en-us/entra/architecture/security-operations-applications#application-credentials

## Metadata
- **Author:** Mark Morowczynski '@markmorow', Bailey Bercik '@baileybercik'
- **Date:** 2022-05-26
- **Rule ID:** `cbb67ecc-fb70-4467-9350-c910bdf7c628`
- **Source file:** `cloud/azure/audit_logs/azure_app_credential_added.yml`
