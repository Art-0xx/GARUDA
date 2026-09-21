---
type: detection_rule
title: "AWS New Lambda Layer Attached"
rule_id: 97fbabf8-8e1b-47a2-b7d5-a418d2b95e3d
platform: cloud
level: low
status: test
tags: [detection, sigma, cloud]
---

# AWS New Lambda Layer Attached

## Description
Detects when a user attached a Lambda layer to an existing Lambda function.
A malicious Lambda layer could execute arbitrary code in the context of the function's IAM role.
This would give an adversary access to resources that the function has access to.

## Log Source
```yaml
product: aws
service: cloudtrail
```

## Detection Logic
```yaml
condition: selection
selection:
  eventName|startswith: UpdateFunctionConfiguration
  eventSource: lambda.amazonaws.com
  requestParameters.layers|contains: '*'
```

## False Positives
- Lambda Layer being attached may be performed by a system administrator. Verify whether the user identity, user agent, and/or hostname should be making changes in your environment.
- Lambda Layer being attached from unfamiliar users should be investigated. If known behavior is causing false positives, it can be exempted from the rule.

## References
- https://docs.aws.amazon.com/lambda/latest/dg/API_UpdateFunctionConfiguration.html
- https://github.com/clearvector/lambda-spy

## Metadata
- **Author:** Austin Songer
- **Date:** 2021-09-23
- **Rule ID:** `97fbabf8-8e1b-47a2-b7d5-a418d2b95e3d`
- **Source file:** `cloud/aws/cloudtrail/aws_new_lambda_layer_attached.yml`
