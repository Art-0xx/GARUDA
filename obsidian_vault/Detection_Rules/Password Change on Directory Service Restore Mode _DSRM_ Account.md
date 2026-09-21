---
type: detection_rule
title: "Password Change on Directory Service Restore Mode (DSRM) Account"
rule_id: 53ad8e36-f573-46bf-97e4-15ba5bf4bb51
platform: windows
level: high
status: stable
tags: [detection, sigma, windows]
mitre_tags: [attack.t1098]
---

# Password Change on Directory Service Restore Mode (DSRM) Account

## Description
Detects potential attempts made to set the Directory Services Restore Mode administrator password.
The Directory Service Restore Mode (DSRM) account is a local administrator account on Domain Controllers.
Attackers may change the password in order to obtain persistence.

## Log Source
```yaml
product: windows
service: security
```

## Detection Logic
```yaml
condition: selection
selection:
  EventID: 4794
```

## MITRE ATT&CK
- T1098

## False Positives
- Initial installation of a domain controller.

## References
- https://adsecurity.org/?p=1714
- https://learn.microsoft.com/en-us/previous-versions/windows/it-pro/windows-10/security/threat-protection/auditing/event-4794

## Metadata
- **Author:** Thomas Patzke
- **Date:** 2017-02-19
- **Rule ID:** `53ad8e36-f573-46bf-97e4-15ba5bf4bb51`
- **Source file:** `windows/builtin/security/win_security_susp_dsrm_password_change.yml`
