---
type: detection_rule
title: "AWS Glue Development Endpoint Activity"
rule_id: 4990c2e3-f4b8-45e3-bc3c-30b14ff0ed26
platform: cloud
level: low
status: test
tags: [detection, sigma, cloud]
---

# AWS Glue Development Endpoint Activity

## Description
Detects possible suspicious glue development endpoint activity.

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
  - CreateDevEndpoint
  - DeleteDevEndpoint
  - UpdateDevEndpoint
  eventSource: glue.amazonaws.com
```

## False Positives
- Glue Development Endpoint Activity may be performed by a system administrator. Verify whether the user identity, user agent, and/or hostname should be making changes in your environment.
- If known behavior is causing false positives, it can be exempted from the rule.

## References
- https://rhinosecuritylabs.com/aws/aws-privilege-escalation-methods-mitigation/
- https://docs.aws.amazon.com/glue/latest/webapi/API_CreateDevEndpoint.html

## Metadata
- **Author:** Austin Songer @austinsonger
- **Date:** 2021-10-03
- **Rule ID:** `4990c2e3-f4b8-45e3-bc3c-30b14ff0ed26`
- **Source file:** `cloud/aws/cloudtrail/aws_passed_role_to_glue_development_endpoint.yml`
