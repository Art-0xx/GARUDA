---
type: detection_rule
title: "AWS SAML Provider Deletion Activity"
rule_id: ccd6a6c8-bb4e-4a91-9d2a-07e632819374
platform: cloud
level: medium
status: experimental
tags: [detection, sigma, cloud]
mitre_tags: [attack.t1078.004, attack.t1531]
---

# AWS SAML Provider Deletion Activity

## Description
Detects the deletion of an AWS SAML provider, potentially indicating malicious intent to disrupt administrative or security team access.
An attacker can remove the SAML provider for the information security team or a team of system administrators, to make it difficult for them to work and investigate at the time of the attack and after it.

## Log Source
```yaml
product: aws
service: cloudtrail
```

## Detection Logic
```yaml
condition: selection
selection:
  eventName: DeleteSAMLProvider
  eventSource: iam.amazonaws.com
  status: success
```

## MITRE ATT&CK
- T1078.004
- T1531

## False Positives
- Automated processes using tools like Terraform may trigger this alert.
- Legitimate administrative actions by authorized system administrators could cause this alert. Verify the user identity, user agent, and hostname to ensure they are expected.
- Deletions by unfamiliar users should be investigated. If the behavior is known and expected, it can be exempted from the rule.

## References
- https://docs.aws.amazon.com/IAM/latest/APIReference/API_DeleteSAMLProvider.html

## Metadata
- **Author:** Ivan Saakov
- **Date:** 2024-12-19
- **Rule ID:** `ccd6a6c8-bb4e-4a91-9d2a-07e632819374`
- **Source file:** `cloud/aws/cloudtrail/aws_delete_saml_provider.yml`
