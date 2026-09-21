---
type: campaign
scenario_id: 334
tactic: Lateral Movement
technique: "T1021.002: Remote Services: SMB/Windows Admin Shares"
technique_id: T1021.002
tags: [campaign, lotl, lateral_movement]
---

# Using schtasks to schedule malicious task on remote SMB share.

## Threat Description
Using schtasks to schedule malicious task on remote SMB share.

## Attack Command
```
schtasks /create /s \\$(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8) /tn $(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8) /tr "C:\$(echo evil$(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8).exe) /p $(cat /dev/urandom | tr -dc 'a-zA-Z0-9' | head -c 12)" /sc daily /f
```

## Detection Logic
Monitor schtasks remote: `wmic process where name='schtasks.exe' get commandline | findstr /s`; Event ID 4698.

## Mitigation
Restrict schtasks: `icacls %windir%\System32\schtasks.exe /deny Everyone:RX`; Block SMB: `netsh advfirewall firewall add rule name='Block SMB' dir=in action=block protocol=TCP localport=445`.

## AI Training Prompt
Train AI to detect schtasks SMB task scheduling and suggest SMB restrictions.

## References
- MITRE ATT&CK T1021.002: https://attack.mitre.org/techniques/T1021/002/
- CWE-284: https://cwe.mitre.org/data/definitions/284.html
