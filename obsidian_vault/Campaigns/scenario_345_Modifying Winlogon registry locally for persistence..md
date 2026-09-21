---
type: campaign
scenario_id: 345
tactic: Persistence
technique: "T1547.004: Winlogon"
technique_id: T1547.004
tags: [campaign, lotl, persistence]
---

# Modifying Winlogon registry locally for persistence.

## Threat Description
Modifying Winlogon registry locally for persistence.

## Attack Command
```
reg add HKLM\Software\Microsoft\Windows NT\CurrentVersion\Winlogon /v Userinit /t REG_SZ /d "C:\$(echo evil$(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8).exe)," /f
```

## Detection Logic
Monitor Winlogon changes: `reg query HKLM\Software\Microsoft\Windows NT\CurrentVersion\Winlogon /v Userinit | findstr .exe`; Event ID 4657.

## Mitigation
Restrict Winlogon writes: `regini -h deny HKLM\Software\Microsoft\Windows NT\CurrentVersion\Winlogon`; Audit registry changes: `auditpol /set /subcategory:'Registry' /success:enable`.

## AI Training Prompt
Train AI to detect local Winlogon tampering and suggest registry protections.

## References
- MITRE ATT&CK T1547.004: https://attack.mitre.org/techniques/T1547/004/
- CWE-732: https://cwe.mitre.org/data/definitions/732.html
