---
type: detection_rule
title: "New AWS Lambda Function URL Configuration Created"
rule_id: ec541962-c05a-4420-b9ea-84de072d18f4
platform: cloud
level: medium
status: experimental
tags: [detection, sigma, cloud]
---

# New AWS Lambda Function URL Configuration Created

## Description
Detects when a user creates a Lambda function URL configuration, which could be used to expose the function to the internet and potentially allow unauthorized access to the function's IAM role for AWS API calls.
This could give an adversary access to the privileges associated with the Lambda service role that is attached to that function.

## Log Source
```yaml
product: aws
service: cloudtrail
```

## Detection Logic
```yaml
condition: selection
selection:
  eventName: CreateFunctionUrlConfig
  eventSource: lambda.amazonaws.com
```

## False Positives
- Creating a Lambda function URL configuration may be performed by a system administrator. Verify whether the user identity, user agent, and/or hostname should be making changes in your environment.
- Creating a Lambda function URL configuration from unfamiliar users should be investigated. If known behavior is causing false positives, it can be exempted from the rule.

## References
- https://docs.aws.amazon.com/lambda/latest/dg/API_CreateFunctionUrlConfig.html
- https://cloud.hacktricks.xyz/pentesting-cloud/aws-security/aws-privilege-escalation/aws-lambda-privesc
- https://www.wiz.io/blog/how-to-set-secure-defaults-on-aws

## Metadata
- **Author:** Ivan Saakov
- **Date:** 2024-12-19
- **Rule ID:** `ec541962-c05a-4420-b9ea-84de072d18f4`
- **Source file:** `cloud/aws/cloudtrail/aws_lambda_function_url.yml`
