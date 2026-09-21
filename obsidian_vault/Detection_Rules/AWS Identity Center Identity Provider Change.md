---
type: detection_rule
title: "AWS Identity Center Identity Provider Change"
rule_id: d3adb3ef-b7e7-4003-9092-1924c797db35
platform: cloud
level: high
status: test
tags: [detection, sigma, cloud]
mitre_tags: [attack.t1556]
---

# AWS Identity Center Identity Provider Change

## Description
Detects a change in the AWS Identity Center (FKA AWS SSO) identity provider.
A change in identity provider allows an attacker to establish persistent access or escalate privileges via user impersonation.

## Log Source
```yaml
product: aws
service: cloudtrail
```

## Detection Logic
```yaml
condition: selection
selection:
  eventName:
  - AssociateDirectory
  - DisableExternalIdPConfigurationForDirectory
  - DisassociateDirectory
  - EnableExternalIdPConfigurationForDirectory
  eventSource:
  - sso-directory.amazonaws.com
  - sso.amazonaws.com
```

## MITRE ATT&CK
- T1556

## False Positives
- Authorized changes to the AWS account's identity provider

## References
- https://docs.aws.amazon.com/singlesignon/latest/userguide/app-enablement.html
- https://docs.aws.amazon.com/singlesignon/latest/userguide/sso-info-in-cloudtrail.html
- https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiamidentitycentersuccessortoawssinglesign-on.html

## Metadata
- **Author:** Michael McIntyre @wtfender
- **Date:** 2023-09-27
- **Rule ID:** `d3adb3ef-b7e7-4003-9092-1924c797db35`
- **Source file:** `cloud/aws/cloudtrail/aws_sso_idp_change.yml`
