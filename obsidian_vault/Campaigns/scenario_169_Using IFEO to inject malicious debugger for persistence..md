---
type: campaign
scenario_id: 169
tactic: Persistence
technique: "T1546.012: Image File Execution Options Injection"
technique_id: T1546.012
tags: [campaign, lotl, persistence]
---

# Using IFEO to inject malicious debugger for persistence.

## Threat Description
Using IFEO to inject malicious debugger for persistence.

## Attack Command
```
reg add "HKLM\Software\Microsoft\Windows NT\CurrentVersion\Image File Execution Options\notepad.exe" /v Debugger /t REG_SZ /d "C:\$(echo evil$(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8).exe) /p $(cat /dev/urandom | tr -dc 'a-zA-Z0-9' | head -c 12)"
```

## Detection Logic
Monitor IFEO: `reg query "HKLM\Software\Microsoft\Windows NT\CurrentVersion\Image File Execution Options" | findstr Debugger`; Event ID 4657.

## Mitigation
Restrict IFEO writes: `regini -h deny "HKLM\Software\Microsoft\Windows NT\CurrentVersion\Image File Execution Options"`; Audit registry: Event ID 4657.

## AI Training Prompt
Train AI to detect IFEO debugger injections and suggest registry protections.

## References
- MITRE ATT&CK T1546.012: https://attack.mitre.org/techniques/T1546/012/
- CWE-732: https://cwe.mitre.org/data/definitions/732.html
