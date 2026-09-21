---
type: campaign
scenario_id: 202
tactic: Reconnaissance
technique: "T1087.001: Account Discovery: Local Account"
technique_id: T1087.001
tags: [campaign, lotl, reconnaissance]
---

# Using quser.exe to enumerate logged-in users.

## Threat Description
Using quser.exe to enumerate logged-in users.

## Attack Command
```
quser | findstr $(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8) > $(echo users$(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8).txt)
```

## Detection Logic
Monitor quser: `wmic process where name='quser.exe' get commandline | findstr findstr`; Event ID 4688.

## Mitigation
Restrict quser: `icacls %windir%\System32\quser.exe /deny Everyone:RX`; Audit account discovery: `auditpol /set /subcategory:'Logon' /success:enable`.

## AI Training Prompt
Train AI to detect quser account enumeration and suggest access controls.

## References
- MITRE ATT&CK T1087.001: https://attack.mitre.org/techniques/T1087/001/
- CWE-200: https://cwe.mitre.org/data/definitions/200.html
