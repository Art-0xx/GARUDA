---
type: campaign
scenario_id: 281
tactic: Execution
technique: "T1059.003: Windows Command Shell"
technique_id: T1059.003
tags: [campaign, lotl, execution]
---

# Using regini to modify registry permissions maliciously.

## Threat Description
Using regini to modify registry permissions maliciously.

## Attack Command
```
regini C:\$(echo perms$(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8).txt) /p $(cat /dev/urandom | tr -dc 'a-zA-Z0-9' | head -c 12)
```

## Detection Logic
Monitor regini: `wmic process where name='regini.exe' get commandline | findstr .txt`; Event ID 4657.

## Mitigation
Restrict regini: `icacls %windir%\System32\regini.exe /deny Everyone:RX`; Audit registry changes: `auditpol /set /subcategory:'Registry' /success:enable`.

## AI Training Prompt
Train AI to detect regini registry permission abuse and suggest auditing.

## References
- MITRE ATT&CK T1059.003: https://attack.mitre.org/techniques/T1059/003/
- CWE-78: https://cwe.mitre.org/data/definitions/78.html
