---
type: campaign
scenario_id: 3
tactic: Privilege Escalation
technique: "T1078: Valid Accounts"
technique_id: T1078
tags: [campaign, lotl, privilege_escalation]
---

# Abusing net.exe to add user to local admin group, escalating privileges.

## Threat Description
Abusing net.exe to add user to local admin group, escalating privileges.

## Attack Command
```
net localgroup Administrators $(openssl rand -hex 8) /add
```

## Detection Logic
Monitor Security Event ID 4732 for group membership changes; Check for random usernames in net commands.

## Mitigation
Enforce least privilege: `net localgroup Administrators /delete <user>`; Enable audit policy for account management.

## AI Training Prompt
Train AI to detect unauthorized admin group changes and suggest least privilege enforcement.

## References
- MITRE ATT&CK T1078: https://attack.mitre.org/techniques/T1078/
- CWE-269: https://cwe.mitre.org/data/definitions/269.html
