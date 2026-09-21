---
type: campaign
scenario_id: 36
tactic: Persistence
technique: "T1547.004: Winlogon Helper DLL"
technique_id: T1547.004
tags: [campaign, lotl, persistence]
---

# Injecting malicious DLL into Winlogon for persistence.

## Threat Description
Injecting malicious DLL into Winlogon for persistence.

## Attack Command
```
reg add "HKLM\Software\Microsoft\Windows NT\CurrentVersion\Winlogon" /v Userinit /t REG_SZ /d "%windir%\System32\userinit.exe,$(echo evil$(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8).dll)"
```

## Detection Logic
Monitor Winlogon registry: `reg query "HKLM\Software\Microsoft\Windows NT\CurrentVersion\Winlogon"`; Event ID 4657.

## Mitigation
Restrict Winlogon writes: `regini -h deny "HKLM\Software\Microsoft\Windows NT\CurrentVersion\Winlogon"`; Enable DLL auditing.

## AI Training Prompt
Train AI to detect Winlogon DLL injections and suggest registry protections.

## References
- MITRE ATT&CK T1547.004: https://attack.mitre.org/techniques/T1547/004/
- CWE-732: https://cwe.mitre.org/data/definitions/732.html
