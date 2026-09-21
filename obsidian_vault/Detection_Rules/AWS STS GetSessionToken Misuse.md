---
type: detection_rule
title: "AWS STS GetSessionToken Misuse"
rule_id: b45ab1d2-712f-4f01-a751-df3826969807
platform: cloud
level: low
status: test
tags: [detection, sigma, cloud]
mitre_tags: [attack.t1548, attack.t1550, attack.t1550.001]
---

# AWS STS GetSessionToken Misuse

## Description
Identifies the suspicious use of GetSessionToken. Tokens could be created and used by attackers to move laterally and escalate privileges.

## Log Source
```yaml
product: aws
service: cloudtrail
```

## Detection Logic
```yaml
condition: selection
selection:
  eventName: GetSessionToken
  eventSource: sts.amazonaws.com
  userIdentity.type: IAMUser
```

## MITRE ATT&CK
- T1548
- T1550
- T1550.001

## False Positives
- GetSessionToken may be done by a system or network administrator. Verify whether the user identity, user agent, and/or hostname should be making changes in your environment. GetSessionToken from unfamiliar users or hosts should be investigated. If known behavior is causing false positives, it can be exempted from the rule.

## References
- https://github.com/elastic/detection-rules/pull/1213
- https://docs.aws.amazon.com/STS/latest/APIReference/API_GetSessionToken.html

## Metadata
- **Author:** Austin Songer @austinsonger
- **Date:** 2021-07-24
- **Rule ID:** `b45ab1d2-712f-4f01-a751-df3826969807`
- **Source file:** `cloud/aws/cloudtrail/aws_sts_getsessiontoken_misuse.yml`
