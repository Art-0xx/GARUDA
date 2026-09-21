---
type: campaign
scenario_id: 133
tactic: Privilege Escalation
technique: "T1547.005: Security Support Provider"
technique_id: T1547.005
tags: [campaign, lotl, privilege_escalation]
---

# Registering malicious SSP via registry for credential capture.

## Threat Description
Registering malicious SSP via registry for credential capture.

## Attack Command
```
reg add "HKLM\System\CurrentControlSet\Control\Lsa" /v Security Packages /t REG_MULTI_SZ /d "$(echo evil$(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8))\0kerberos"
```

## Detection Logic
Monitor SSP changes: `reg query "HKLM\System\CurrentControlSet\Control\Lsa" /v Security Packages`; Event ID 4657.

## Mitigation
Restrict SSP modifications: `regini -h deny "HKLM\System\CurrentControlSet\Control\Lsa"`; Audit LSA changes.

## AI Training Prompt
Train AI to detect SSP tampering and suggest LSA protections.

## References
- MITRE ATT&CK T1547.005: https://attack.mitre.org/techniques/T1547/005/
- CWE-269: https://cwe.mitre.org/data/definitions/269.html
