---
type: detection_rule
title: "DMSA Link Attributes Modified"
rule_id: 9b111d8e-92e0-4153-88bc-daefc1333aba
platform: windows
level: low
status: experimental
tags: [detection, sigma, windows]
mitre_tags: [attack.t1078.002, attack.t1098]
---

# DMSA Link Attributes Modified

## Description
Detects modification of dMSA link attributes (msDS-ManagedAccountPrecededByLink) via PowerShell scripts.
This command line pattern could be an indicator an attempt to exploit the BadSuccessor privilege escalation vulnerability in Windows Server 2025.

## Log Source
```yaml
category: ps_script
product: windows
```

## Detection Logic
```yaml
condition: selection
selection:
  ScriptBlockText|contains|all:
  - .Put("msDS-ManagedAccountPrecededByLink
  - CN=
```

## MITRE ATT&CK
- T1078.002
- T1098

## False Positives
- Legitimate administrative tasks modifying these attributes.

## References
- https://www.akamai.com/blog/security-research/abusing-bad-successor-for-privilege-escalation-in-active-directory

## Metadata
- **Author:** Swachchhanda Shrawan Poudel (Nextron Systems)
- **Date:** 2025-05-24
- **Rule ID:** `9b111d8e-92e0-4153-88bc-daefc1333aba`
- **Source file:** `windows/powershell/powershell_script/posh_ps_modification_of_dmsa_link_attribute.yml`
