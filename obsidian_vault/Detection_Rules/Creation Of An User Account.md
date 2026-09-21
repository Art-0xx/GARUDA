---
type: detection_rule
title: "Creation Of An User Account"
rule_id: 759d0d51-bc99-4b5e-9add-8f5b2c8e7512
platform: linux
level: medium
status: test
tags: [detection, sigma, linux]
mitre_tags: [attack.t1136.001]
---

# Creation Of An User Account

## Description
Detects the creation of a new user account. Such accounts may be used for persistence that do not require persistent remote access tools to be deployed on the system.

## Log Source
```yaml
product: linux
service: auditd
```

## Detection Logic
```yaml
condition: 1 of selection_*
selection_add_user_record_type:
  type: ADD_USER
selection_syscall_record_type:
  exe|endswith: /useradd
  type: SYSCALL
```

## MITRE ATT&CK
- T1136.001

## False Positives
- Admin activity

## References
- https://access.redhat.com/documentation/en-us/red_hat_enterprise_linux/7/html/security_guide/sec-understanding_audit_log_files
- https://access.redhat.com/articles/4409591#audit-record-types-2
- https://www.youtube.com/watch?v=VmvY5SQm5-Y&ab_channel=M45C07

## Metadata
- **Author:** Marie Euler, Pawel Mazur
- **Date:** 2020-05-18
- **Rule ID:** `759d0d51-bc99-4b5e-9add-8f5b2c8e7512`
- **Source file:** `linux/auditd/syscall/lnx_auditd_create_account.yml`
