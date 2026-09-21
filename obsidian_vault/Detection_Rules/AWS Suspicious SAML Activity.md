---
type: detection_rule
title: "AWS Suspicious SAML Activity"
rule_id: f43f5d2f-3f2a-4cc8-b1af-81fde7dbaf0e
platform: cloud
level: medium
status: test
tags: [detection, sigma, cloud]
mitre_tags: [attack.t1078, attack.t1548, attack.t1550, attack.t1550.001]
---

# AWS Suspicious SAML Activity

## Description
Identifies when suspicious SAML activity has occurred in AWS. An adversary could gain backdoor access via SAML.

## Log Source
```yaml
product: aws
service: cloudtrail
```

## Detection Logic
```yaml
condition: 1 of selection_*
selection_iam:
  eventName: UpdateSAMLProvider
  eventSource: iam.amazonaws.com
selection_sts:
  eventName: AssumeRoleWithSAML
  eventSource: sts.amazonaws.com
```

## MITRE ATT&CK
- T1078
- T1548
- T1550
- T1550.001

## False Positives
- Automated processes that uses Terraform may lead to false positives.
- SAML Provider could be updated by a system administrator. Verify whether the user identity, user agent, and/or hostname should be making changes in your environment.
- SAML Provider being updated from unfamiliar users should be investigated. If known behavior is causing false positives, it can be exempted from the rule.

## References
- https://docs.aws.amazon.com/IAM/latest/APIReference/API_UpdateSAMLProvider.html
- https://docs.aws.amazon.com/STS/latest/APIReference/API_AssumeRoleWithSAML.html

## Metadata
- **Author:** Austin Songer
- **Date:** 2021-09-22
- **Rule ID:** `f43f5d2f-3f2a-4cc8-b1af-81fde7dbaf0e`
- **Source file:** `cloud/aws/cloudtrail/aws_susp_saml_activity.yml`
