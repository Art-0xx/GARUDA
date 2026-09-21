---
type: detection_rule
title: "Bitbucket User Login Failure Via SSH"
rule_id: d3f90469-fb05-42ce-b67d-0fded91bbef3
platform: application
level: medium
status: test
tags: [detection, sigma, application]
mitre_tags: [attack.t1021.004, attack.t1110]
---

# Bitbucket User Login Failure Via SSH

## Description
Detects SSH user login access failures.
Please note that this rule can be noisy and is recommended to use with correlation based on "author.name" field.

## Log Source
```yaml
definition: 'Requirements: "Advance" log level is required to receive these audit
  events.'
product: bitbucket
service: audit
```

## Detection Logic
```yaml
condition: selection
selection:
  auditType.action: User login failed(SSH)
  auditType.category: Authentication
```

## MITRE ATT&CK
- T1021.004
- T1110

## False Positives
- Legitimate user wrong password attempts.

## References
- https://confluence.atlassian.com/bitbucketserver/view-and-configure-the-audit-log-776640417.html
- https://confluence.atlassian.com/bitbucketserver/enable-ssh-access-to-git-repositories-776640358.html

## Metadata
- **Author:** Muhammad Faisal (@faisalusuf)
- **Date:** 2024-02-25
- **Rule ID:** `d3f90469-fb05-42ce-b67d-0fded91bbef3`
- **Source file:** `application/bitbucket/audit/bitbucket_audit_user_login_failure_via_ssh_detected.yml`
