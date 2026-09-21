---
type: detection_rule
title: "Windows Default Domain GPO Modification"
rule_id: e5ac86dd-2da1-454b-be74-05d26c769d7d
platform: windows
level: medium
status: experimental
tags: [detection, sigma, windows]
mitre_tags: [attack.t1484.001]
---

# Windows Default Domain GPO Modification

## Description
Detects modifications to Default Domain or Default Domain Controllers Group Policy Objects (GPOs).
Adversaries may modify these default GPOs to deploy malicious configurations across the domain.

## Log Source
```yaml
definition: 'Enable ''Audit Directory Service Changes'' in the Default Domain Controllers
  Policy under:

  Computer Configuration -> Policies -> Windows Settings -> Security Settings -> Advanced
  Audit Policy Configuration -> Audit Policies -> DS Access -> Audit Directory Service
  Changes (Success).

  Additionally, proper SACL needs to be configured on the ''CN=Policies,CN=System,DC=<domain>,DC=<tld>''
  container in Active Directory to capture changes to Group Policy Objects.

  '
product: windows
service: security
```

## Detection Logic
```yaml
condition: selection
selection:
  EventID: 5136
  ObjectClass: groupPolicyContainer
  ObjectDN|startswith:
  - CN={31B2F340-016D-11D2-945F-00C04FB984F9},CN=POLICIES,CN=SYSTEM
  - CN={6AC1786C-016F-11D2-945F-00C04FB984F9},CN=POLICIES,CN=SYSTEM
```

## MITRE ATT&CK
- T1484.001

## False Positives
- Legitimate modifications to Default Domain or Default Domain Controllers GPOs

## References
- https://www.trendmicro.com/en_us/research/25/i/unmasking-the-gentlemen-ransomware.html
- https://adsecurity.org/?p=3377
- https://www.pentestpartners.com/security-blog/living-off-the-land-gpo-style/
- https://jgspiers.com/audit-group-policy-changes/

## Metadata
- **Author:** Swachchhanda Shrawan Poudel (Nextron Systems)
- **Date:** 2025-11-22
- **Rule ID:** `e5ac86dd-2da1-454b-be74-05d26c769d7d`
- **Source file:** `windows/builtin/security/win_security_default_domain_gpo_modification.yml`
