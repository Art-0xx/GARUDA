---
type: campaign
scenario_id: 221
tactic: Execution
technique: "T1059.003: Windows Command Shell"
technique_id: T1059.003
tags: [campaign, lotl, execution]
---

# Using cacls to modify permissions for malicious access.

## Threat Description
Using cacls to modify permissions for malicious access.

## Attack Command
```
cacls C:\$(echo target$(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8)) /E /G $(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8):F
```

## Detection Logic
Monitor cacls: `wmic process where name='cacls.exe' get commandline | findstr /G`; Event ID 4663.

## Mitigation
Restrict cacls: `icacls %windir%\System32\cacls.exe /deny Everyone:RX`; Audit permission changes: `auditpol /set /subcategory:'File System' /success:enable`.

## AI Training Prompt
Train AI to detect cacls permission abuse and suggest auditing.

## References
- MITRE ATT&CK T1059.003: https://attack.mitre.org/techniques/T1059/003/
- CWE-78: https://cwe.mitre.org/data/definitions/78.html
