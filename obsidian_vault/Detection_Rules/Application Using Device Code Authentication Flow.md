---
type: detection_rule
title: "Application Using Device Code Authentication Flow"
rule_id: 248649b7-d64f-46f0-9fb2-a52774166fb5
platform: cloud
level: medium
status: test
tags: [detection, sigma, cloud]
mitre_tags: [attack.t1078]
---

# Application Using Device Code Authentication Flow

## Description
Device code flow is an OAuth 2.0 protocol flow specifically for input constrained devices and is not used in all environments.
If this type of flow is seen in the environment and not being used in an input constrained device scenario, further investigation is warranted.
This can be a misconfigured application or potentially something malicious.

## Log Source
```yaml
product: azure
service: signinlogs
```

## Detection Logic
```yaml
condition: selection
selection:
  properties.message: Device Code
```

## MITRE ATT&CK
- T1078

## False Positives
- Applications that are input constrained will need to use device code flow and are valid authentications.

## References
- https://learn.microsoft.com/en-us/entra/architecture/security-operations-applications#application-authentication-flows

## Metadata
- **Author:** Mark Morowczynski '@markmorow', Bailey Bercik '@baileybercik'
- **Date:** 2022-06-01
- **Rule ID:** `248649b7-d64f-46f0-9fb2-a52774166fb5`
- **Source file:** `cloud/azure/signin_logs/azure_app_device_code_authentication.yml`
