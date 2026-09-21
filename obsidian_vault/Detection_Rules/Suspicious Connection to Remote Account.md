---
type: detection_rule
title: "Suspicious Connection to Remote Account"
rule_id: 1883444f-084b-419b-ac62-e0d0c5b3693f
platform: windows
level: low
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1110.001]
---

# Suspicious Connection to Remote Account

## Description
Adversaries with no prior knowledge of legitimate credentials within the system or environment may guess passwords to attempt access to accounts.
Without knowledge of the password for an account, an adversary may opt to systematically guess the password using a repetitive or iterative mechanism

## Log Source
```yaml
category: ps_script
definition: 'Requirements: Script Block Logging must be enabled'
product: windows
```

## Detection Logic
```yaml
condition: selection
selection:
  ScriptBlockText|contains:
  - System.DirectoryServices.Protocols.LdapDirectoryIdentifier
  - System.Net.NetworkCredential
  - System.DirectoryServices.Protocols.LdapConnection
```

## MITRE ATT&CK
- T1110.001

## False Positives
- Unknown

## References
- https://github.com/redcanaryco/atomic-red-team/blob/f339e7da7d05f6057fdfcdd3742bfcf365fee2a9/atomics/T1110.001/T1110.001.md#atomic-test-2---brute-force-credentials-of-single-active-directory-domain-user-via-ldap-against-domain-controller-ntlm-or-kerberos

## Metadata
- **Author:** frack113
- **Date:** 2021-12-27
- **Rule ID:** `1883444f-084b-419b-ac62-e0d0c5b3693f`
- **Source file:** `windows/powershell/powershell_script/posh_ps_susp_networkcredential.yml`
