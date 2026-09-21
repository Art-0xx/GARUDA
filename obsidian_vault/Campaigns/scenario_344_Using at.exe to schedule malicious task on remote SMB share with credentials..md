---
type: campaign
scenario_id: 344
tactic: Lateral Movement
technique: "T1021.002: Remote Services: SMB/Windows Admin Shares"
technique_id: T1021.002
tags: [campaign, lotl, lateral_movement]
---

# Using at.exe to schedule malicious task on remote SMB share with credentials.

## Threat Description
Using at.exe to schedule malicious task on remote SMB share with credentials.

## Attack Command
```
at \\$(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8) $(date +%H:%M -d '+1 minute') /interactive cmd /c C:\$(echo evil$(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8).bat) /user:$(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8) /password:$(cat /dev/urandom | tr -dc 'a-zA-Z0-9' | head -c 12)
```

## Detection Logic
Monitor at remote credential use: `wmic process where name='at.exe' get commandline | findstr /user`; Event ID 4698.

## Mitigation
Restrict at: `icacls %windir%\System32\at.exe /deny Everyone:RX`; Block SMB: `netsh advfirewall firewall add rule name='Block SMB' dir=in action=block protocol=TCP localport=445`.

## AI Training Prompt
Train AI to detect at.exe SMB task scheduling with credentials and suggest SMB restrictions.

## References
- MITRE ATT&CK T1021.002: https://attack.mitre.org/techniques/T1021/002/
- CWE-284: https://cwe.mitre.org/data/definitions/284.html
