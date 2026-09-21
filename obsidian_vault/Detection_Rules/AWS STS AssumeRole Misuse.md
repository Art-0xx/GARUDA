---
type: detection_rule
title: "AWS STS AssumeRole Misuse"
rule_id: 905d389b-b853-46d0-9d3d-dea0d3a3cd49
platform: cloud
level: low
status: test
tags: [detection, sigma, cloud]
mitre_tags: [attack.t1548, attack.t1550, attack.t1550.001]
---

# AWS STS AssumeRole Misuse

## Description
Identifies the suspicious use of AssumeRole. Attackers could move laterally and escalate privileges.

## Log Source
```yaml
product: aws
service: cloudtrail
```

## Detection Logic
```yaml
condition: selection
selection:
  userIdentity.sessionContext.sessionIssuer.type: Role
  userIdentity.type: AssumedRole
```

## MITRE ATT&CK
- T1548
- T1550
- T1550.001

## False Positives
- AssumeRole may be done by a system or network administrator. Verify whether the user identity, user agent, and/or hostname should be making changes in your environment.
- AssumeRole from unfamiliar users or hosts should be investigated. If known behavior is causing false positives, it can be exempted from the rule.
- Automated processes that uses Terraform may lead to false positives.

## References
- https://github.com/elastic/detection-rules/pull/1214
- https://docs.aws.amazon.com/STS/latest/APIReference/API_AssumeRole.html

## Metadata
- **Author:** Austin Songer @austinsonger
- **Date:** 2021-07-24
- **Rule ID:** `905d389b-b853-46d0-9d3d-dea0d3a3cd49`
- **Source file:** `cloud/aws/cloudtrail/aws_sts_assumerole_misuse.yml`
