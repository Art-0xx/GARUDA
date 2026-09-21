---
type: campaign
scenario_id: 278
tactic: Lateral Movement
technique: "T1021.002: Remote Services: SMB/Windows Admin Shares"
technique_id: T1021.002
tags: [campaign, lotl, lateral_movement]
---

# Using sc.exe to create malicious service on remote SMB share.

## Threat Description
Using sc.exe to create malicious service on remote SMB share.

## Attack Command
```
sc \\$(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8) create $(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8) binpath= "C:\$(echo evil$(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8).exe) /p $(cat /dev/urandom | tr -dc 'a-zA-Z0-9' | head -c 12)"
```

## Detection Logic
Monitor sc remote: `wmic process where name='sc.exe' get commandline | findstr create`; Event ID 7045.

## Mitigation
Restrict sc: `icacls %windir%\System32\sc.exe /deny Everyone:RX`; Block SMB: `netsh advfirewall firewall add rule name='Block SMB' dir=in action=block protocol=TCP localport=445`.

## AI Training Prompt
Train AI to detect sc.exe SMB service creation and suggest SMB restrictions.

## References
- MITRE ATT&CK T1021.002: https://attack.mitre.org/techniques/T1021/002/
- CWE-284: https://cwe.mitre.org/data/definitions/284.html
