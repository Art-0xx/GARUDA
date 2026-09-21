---
type: campaign
scenario_id: 335
tactic: Persistence
technique: "T1546.010: AppInit DLLs"
technique_id: T1546.010
tags: [campaign, lotl, persistence]
---

# Registering malicious AppInit DLL locally.

## Threat Description
Registering malicious AppInit DLL locally.

## Attack Command
```
reg add "HKLM\Software\Microsoft\Windows NT\CurrentVersion\Windows" /v AppInit_DLLs /t REG_SZ /d "C:\$(echo evil$(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8).dll) /p $(cat /dev/urandom | tr -dc 'a-zA-Z0-9' | head -c 12)"
```

## Detection Logic
Monitor AppInit DLLs: `reg query "HKLM\Software\Microsoft\Windows NT\CurrentVersion\Windows" /v AppInit_DLLs | findstr .dll`; Event ID 4657.

## Mitigation
Restrict AppInit writes: `regini -h deny "HKLM\Software\Microsoft\Windows NT\CurrentVersion\Windows"`; Audit registry changes: `auditpol /set /subcategory:'Registry' /success:enable`.

## AI Training Prompt
Train AI to detect local AppInit DLL tampering and suggest registry protections.

## References
- MITRE ATT&CK T1546.010: https://attack.mitre.org/techniques/T1546/010/
- CWE-732: https://cwe.mitre.org/data/definitions/732.html
