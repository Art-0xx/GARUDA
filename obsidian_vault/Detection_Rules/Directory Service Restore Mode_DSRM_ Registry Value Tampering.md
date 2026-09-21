---
type: detection_rule
title: "Directory Service Restore Mode(DSRM) Registry Value Tampering"
rule_id: b61e87c0-50db-4b2e-8986-6a2be94b33b0
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1556]
---

# Directory Service Restore Mode(DSRM) Registry Value Tampering

## Description
Detects changes to "DsrmAdminLogonBehavior" registry value.
During a Domain Controller (DC) promotion, administrators create a Directory Services Restore Mode (DSRM) local administrator account with a password that rarely changes. The DSRM account is an “Administrator” account that logs in with the DSRM mode when the server is booting up to restore AD backups or recover the server from a failure.
Attackers could abuse DSRM account to maintain their persistence and access to the organization's Active Directory.
If the "DsrmAdminLogonBehavior" value is set to "0", the administrator account can only be used if the DC starts in DSRM.
If the "DsrmAdminLogonBehavior" value is set to "1", the administrator account can only be used if the local AD DS service is stopped.
If the "DsrmAdminLogonBehavior" value is set to "2", the administrator account can always be used.

## Log Source
```yaml
category: registry_set
product: windows
```

## Detection Logic
```yaml
condition: selection and not 1 of filter_main_*
filter_main_default_value:
  Details: DWORD (0x00000000)
selection:
  TargetObject|endswith: \Control\Lsa\DsrmAdminLogonBehavior
```

## MITRE ATT&CK
- T1556

## False Positives
- Unknown

## References
- https://adsecurity.org/?p=1785
- https://www.sentinelone.com/blog/detecting-dsrm-account-misconfigurations/
- https://book.hacktricks.xyz/windows-hardening/active-directory-methodology/dsrm-credentials

## Metadata
- **Author:** Nischal Khadgi
- **Date:** 2024-07-11
- **Rule ID:** `b61e87c0-50db-4b2e-8986-6a2be94b33b0`
- **Source file:** `windows/registry/registry_set/registry_set_dsrm_tampering.yml`
