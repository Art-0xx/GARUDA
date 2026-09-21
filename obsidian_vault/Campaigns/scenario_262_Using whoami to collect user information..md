---
type: campaign
scenario_id: 262
tactic: Collection
technique: "T1005: Data from Local System"
technique_id: T1005
tags: [campaign, lotl, collection]
---

# Using whoami to collect user information.

## Threat Description
Using whoami to collect user information.

## Attack Command
```
whoami /all > $(echo user$(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8).txt)
```

## Detection Logic
Monitor whoami: `wmic process where name='whoami.exe' get commandline | findstr /all`; Event ID 4663.

## Mitigation
Restrict whoami: `icacls %windir%\System32\whoami.exe /deny Everyone:RX`; Audit user enumeration: `auditpol /set /subcategory:'Logon' /success:enable`.

## AI Training Prompt
Train AI to detect whoami data collection and suggest access controls.

## References
- MITRE ATT&CK T1005: https://attack.mitre.org/techniques/T1005/
- CWE-200: https://cwe.mitre.org/data/definitions/200.html
