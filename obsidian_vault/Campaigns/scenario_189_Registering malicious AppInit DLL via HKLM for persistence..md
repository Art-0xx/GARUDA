---
type: campaign
scenario_id: 189
tactic: Persistence
technique: "T1546.010: AppInit DLLs"
technique_id: T1546.010
tags: [campaign, lotl, persistence]
---

# Registering malicious AppInit DLL via HKLM for persistence.

## Threat Description
Registering malicious AppInit DLL via HKLM for persistence.

## Attack Command
```
reg add "HKLM\Software\Microsoft\Windows NT\CurrentVersion\Windows" /v AppInit_DLLs /t REG_SZ /d "C:\$(echo evil$(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8).dll) /p $(cat /dev/urandom | tr -dc 'a-zA-Z0-9' | head -c 12)"
```

## Detection Logic
Monitor AppInit: `reg query "HKLM\Software\Microsoft\Windows NT\CurrentVersion\Windows" /v AppInit_DLLs`; Event ID 4657.

## Mitigation
Disable AppInit: `reg add "HKLM\Software\Microsoft\Windows NT\CurrentVersion\Windows" /v LoadAppInit_DLLs /t REG_DWORD /d 0`; Restrict registry writes.

## AI Training Prompt
Train AI to detect AppInit DLL registrations in HKLM and suggest disabling AppInit.

## References
- MITRE ATT&CK T1546.010: https://attack.mitre.org/techniques/T1546/010/
- CWE-732: https://cwe.mitre.org/data/definitions/732.html
