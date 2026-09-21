---
type: detection_rule
title: "AWS Console GetSigninToken Potential Abuse"
rule_id: f8103686-e3e8-46f3-be72-65f7fcb4aa53
platform: cloud
level: medium
status: test
tags: [detection, sigma, cloud]
mitre_tags: [attack.t1021.007, attack.t1550.001]
---

# AWS Console GetSigninToken Potential Abuse

## Description
Detects potentially suspicious events involving "GetSigninToken".
An adversary using the "aws_consoler" tool can leverage this console API to create temporary federated credential that help obfuscate which AWS credential is compromised (the original access key) and enables the adversary to pivot from the AWS CLI to console sessions without the need for MFA using the new access key issued in this request.

## Log Source
```yaml
product: aws
service: cloudtrail
```

## Detection Logic
```yaml
condition: selection and not 1 of filter_main_*
filter_main_console_ua:
  userAgent|contains: Jersey/${project.version}
selection:
  eventName: GetSigninToken
  eventSource: signin.amazonaws.com
```

## MITRE ATT&CK
- T1021.007
- T1550.001

## False Positives
- GetSigninToken events will occur when using AWS SSO portal to login and will generate false positives if you do not filter for the expected user agent(s), see filter. Non-SSO configured roles would be abnormal and should be investigated.

## References
- https://github.com/NetSPI/aws_consoler
- https://www.crowdstrike.com/blog/analysis-of-intrusion-campaign-targeting-telecom-and-bpo-companies/

## Metadata
- **Author:** Chester Le Bron (@123Le_Bron)
- **Date:** 2024-02-26
- **Rule ID:** `f8103686-e3e8-46f3-be72-65f7fcb4aa53`
- **Source file:** `cloud/aws/cloudtrail/aws_console_getsignintoken.yml`
