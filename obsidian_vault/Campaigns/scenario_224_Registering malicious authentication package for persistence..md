---
type: campaign
scenario_id: 224
tactic: Persistence
technique: "T1547.002: Authentication Package"
technique_id: T1547.002
tags: [campaign, lotl, persistence]
---

# Registering malicious authentication package for persistence.

## Threat Description
Registering malicious authentication package for persistence.

## Attack Command
```
reg add "HKLM\System\CurrentControlSet\Control\Lsa" /v Authentication Packages /t REG_MULTI_SZ /d "$(echo evil$(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8))\0msv1_0"
```

## Detection Logic
Monitor LSA changes: `reg query "HKLM\System\CurrentControlSet\Control\Lsa" /v Authentication Packages`; Event ID 4657.

## Mitigation
Restrict LSA writes: `regini -h deny "HKLM\System\CurrentControlSet\Control\Lsa"`; Audit LSA changes.

## AI Training Prompt
Train AI to detect LSA authentication package tampering and suggest registry protections.

## References
- MITRE ATT&CK T1547.002: https://attack.mitre.org/techniques/T1547/002/
- CWE-732: https://cwe.mitre.org/data/definitions/732.html
