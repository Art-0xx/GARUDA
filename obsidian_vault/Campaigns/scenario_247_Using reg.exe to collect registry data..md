---
type: campaign
scenario_id: 247
tactic: Collection
technique: "T1005: Data from Local System"
technique_id: T1005
tags: [campaign, lotl, collection]
---

# Using reg.exe to collect registry data.

## Threat Description
Using reg.exe to collect registry data.

## Attack Command
```
reg query HKLM\Software\$(cat /dev/urandom | tr -dc 'A-Za-z' | head -c 8) /s > $(echo reg$(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8).txt)
```

## Detection Logic
Monitor reg query: `wmic process where name='reg.exe' get commandline | findstr query`; Event ID 4663.

## Mitigation
Restrict reg: `icacls %windir%\System32\reg.exe /deny Everyone:RX`; Audit registry access: `auditpol /set /subcategory:'Registry' /success:enable`.

## AI Training Prompt
Train AI to detect reg.exe registry collection and suggest registry auditing.

## References
- MITRE ATT&CK T1005: https://attack.mitre.org/techniques/T1005/
- CWE-200: https://cwe.mitre.org/data/definitions/200.html
