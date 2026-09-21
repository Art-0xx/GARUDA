---
type: campaign
scenario_id: 258
tactic: Lateral Movement
technique: "T1021.002: Remote Services: SMB/Windows Admin Shares"
technique_id: T1021.002
tags: [campaign, lotl, lateral_movement]
---

# Using at.exe to schedule malicious task on remote SMB share.

## Threat Description
Using at.exe to schedule malicious task on remote SMB share.

## Attack Command
```
at \\$(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8) $(date +%H:%M -d '+1 minute') C:\$(echo evil$(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8).bat)
```

## Detection Logic
Monitor at remote: `wmic process where name='at.exe' get commandline | findstr \\`; Event ID 4698.

## Mitigation
Restrict at: `icacls %windir%\System32\at.exe /deny Everyone:RX`; Block SMB: `netsh advfirewall firewall add rule name='Block SMB' dir=in action=block protocol=TCP localport=445`.

## AI Training Prompt
Train AI to detect at.exe SMB task scheduling and suggest SMB restrictions.

## References
- MITRE ATT&CK T1021.002: https://attack.mitre.org/techniques/T1021/002/
- CWE-284: https://cwe.mitre.org/data/definitions/284.html
