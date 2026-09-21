---
type: detection_rule
title: "Github SSH Certificate Configuration Changed"
rule_id: 2f575940-d85e-4ddc-af13-17dad6f1a0ef
platform: application
level: medium
status: test
tags: [detection, sigma, application]
mitre_tags: [attack.t1078.004]
---

# Github SSH Certificate Configuration Changed

## Description
Detects when changes are made to the SSH certificate configuration of the organization.

## Log Source
```yaml
definition: 'Requirements: The audit log streaming feature must be enabled to be able
  to receive such logs. You can enable following the documentation here: https://docs.github.com/en/enterprise-cloud@latest/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/streaming-the-audit-log-for-your-enterprise#setting-up-audit-log-streaming'
product: github
service: audit
```

## Detection Logic
```yaml
condition: selection
selection:
  action:
  - ssh_certificate_authority.create
  - ssh_certificate_requirement.disable
```

## MITRE ATT&CK
- T1078.004

## False Positives
- Allowed administrative activities.

## References
- https://docs.github.com/en/enterprise-cloud@latest/organizations/managing-git-access-to-your-organizations-repositories/about-ssh-certificate-authorities
- https://docs.github.com/en/enterprise-cloud@latest/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/audit-log-events-for-your-enterprise#ssh_certificate_authority

## Metadata
- **Author:** Romain Gaillard (@romain-gaillard)
- **Date:** 2024-07-29
- **Rule ID:** `2f575940-d85e-4ddc-af13-17dad6f1a0ef`
- **Source file:** `application/github/audit/github_ssh_certificate_config_changed.yml`
