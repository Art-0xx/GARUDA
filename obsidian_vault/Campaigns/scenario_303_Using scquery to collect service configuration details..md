---
type: campaign
scenario_id: 303
tactic: Collection
technique: "T1005: Data from Local System"
technique_id: T1005
tags: [campaign, lotl, collection]
---

# Using scquery to collect service configuration details.

## Threat Description
Using scquery to collect service configuration details.

## Attack Command
```
scquery > $(echo svc$(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8).txt)
```

## Detection Logic
Monitor scquery: `wmic process where name='sc.exe' get commandline | findstr scquery`; Event ID 4663.

## Mitigation
Restrict sc: `icacls %windir%\System32\sc.exe /deny Everyone:RX`; Audit service queries: `auditpol /set /subcategory:'System' /success:enable`.

## AI Training Prompt
Train AI to detect scquery service collection and suggest access controls.

## References
- MITRE ATT&CK T1005: https://attack.mitre.org/techniques/T1005/
- CWE-200: https://cwe.mitre.org/data/definitions/200.html
