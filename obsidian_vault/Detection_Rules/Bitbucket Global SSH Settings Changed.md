---
type: detection_rule
title: "Bitbucket Global SSH Settings Changed"
rule_id: 16ab6143-510a-44e2-a615-bdb80b8317fc
platform: application
level: medium
status: test
tags: [detection, sigma, application]
mitre_tags: [attack.t1685, attack.t1021.004]
---

# Bitbucket Global SSH Settings Changed

## Description
Detects Bitbucket global SSH access configuration changes.

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
  auditType.action: SSH settings changed
  auditType.category: Global administration
```

## MITRE ATT&CK
- T1685
- T1021.004

## False Positives
- Legitimate user activity.

## References
- https://confluence.atlassian.com/bitbucketserver/audit-log-events-776640423.html
- https://confluence.atlassian.com/bitbucketserver/enable-ssh-access-to-git-repositories-776640358.html

## Metadata
- **Author:** Muhammad Faisal (@faisalusuf)
- **Date:** 2024-02-25
- **Rule ID:** `16ab6143-510a-44e2-a615-bdb80b8317fc`
- **Source file:** `application/bitbucket/audit/bitbucket_audit_global_ssh_settings_change_detected.yml`
