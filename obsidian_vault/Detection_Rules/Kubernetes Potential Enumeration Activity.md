---
type: detection_rule
title: "Kubernetes Potential Enumeration Activity"
rule_id: 597a7e84-187d-458b-9e4f-2f5a0e676711
platform: application
level: medium
status: experimental
tags: [detection, sigma, application]
mitre_tags: [attack.t1609, attack.t1613]
---

# Kubernetes Potential Enumeration Activity

## Description
Detects potential Kubernetes enumeration or attack activity via the audit log.
This includes the execution of common shells, utilities, or specialized tools like 'Rakkess' (access_matrix) and 'TruffleHog' via Kubernetes API requests.
Attackers use these methods to perform reconnaissance (enumeration), secret harvesting, or execute code (exec) within a cluster.

## Log Source
```yaml
product: kubernetes
service: audit
```

## Detection Logic
```yaml
condition: selection_status and 1 of selection_request_*
selection_request_uri:
  requestURI|contains:
  - '%2fbin%2fash'
  - '%2fbin%2fbash'
  - '%2fbin%2fbusybox'
  - '%2fbin%2fdash'
  - '%2fbin%2fsh'
  - '%2fbin%2fzsh'
  - /bin/ash
  - /bin/bash
  - /bin/busybox
  - /bin/dash
  - /bin/sh
  - /bin/zsh
  - '%2fusr%2fbin%2fcurl'
  - '%2fusr%2fbin%2fkubectl'
  - '%2fusr%2fbin%2fperl'
  - '%2fusr%2fbin%2fpython'
  - '%2fusr%2fbin%2fwget'
  - /usr/bin/curl
  - /usr/bin/kubectl
  - /usr/bin/perl
  - /usr/bin/python
  - /usr/bin/wget
selection_request_user_agent:
  userAgent|contains:
  - access_matrix
  - trufflehog
  - azurehound
  - micro-scanner
selection_status:
  responseStatus.code: ALLOW
```

## MITRE ATT&CK
- T1609
- T1613

## False Positives
- Authorized administrative maintenance via kubectl
- Automated internal infrastructure monitoring and certificate rotation
- Security-approved vulnerability or secret scanning in DevSecOps pipelines

## References
- https://www.nccgroup.com/research/detection-engineering-for-kubernetes-clusters/
- https://github.com/trufflesecurity/trufflehog
- https://github.com/corneliusweig/rakkess

## Metadata
- **Author:** uniqu3-us3r
- **Date:** 2026-04-28
- **Rule ID:** `597a7e84-187d-458b-9e4f-2f5a0e676711`
- **Source file:** `application/kubernetes/audit/kubernetes_audit_potential_enumeration_activity.yml`
