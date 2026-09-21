---
type: campaign
scenario_id: 408
tactic: Persistence
technique: "T1546.010: AppInit DLLs"
technique_id: T1546.010
tags: [campaign, lotl, persistence]
---

# Using AppInit DLLs for DNS tunneling persistence.

## Threat Description
Using AppInit DLLs for DNS tunneling persistence.

## Attack Command
```
reg add HKLM\Software\Microsoft\Windows NT\CurrentVersion\Windows /v AppInit_DLLs /t REG_SZ /d "C:\$(echo dnstunnel$(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8).dll) /p $(cat /dev/urandom | tr -dc 'a-zA-Z0-9' | head -c 12)" /f
```

## Detection Logic
Monitor AppInit DLLs: `reg query HKLM\Software\Microsoft\Windows NT\CurrentVersion\Windows | findstr AppInit_DLLs`; Event ID 4657.

## Mitigation
Restrict AppInit writes: `regini -h deny HKLM\Software\Microsoft\Windows NT\CurrentVersion\Windows`; Disable AppInit: `reg add HKLM\Software\Microsoft\Windows NT\CurrentVersion\Windows /v LoadAppInit_DLLs /t REG_DWORD /d 0 /f`.

## AI Training Prompt
Train AI to detect AppInit DLLs for DNS tunneling persistence by analyzing registry changes, DLL paths, and DNS query patterns; suggest registry protections.

## References
- MITRE ATT&CK T1546.010: https://attack.mitre.org/techniques/T1546/010/
- CWE-732: https://cwe.mitre.org/data/definitions/732.html
