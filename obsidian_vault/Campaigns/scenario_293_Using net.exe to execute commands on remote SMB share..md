---
type: campaign
scenario_id: 293
tactic: Lateral Movement
technique: "T1021.002: Remote Services: SMB/Windows Admin Shares"
technique_id: T1021.002
tags: [campaign, lotl, lateral_movement]
---

# Using net.exe to execute commands on remote SMB share.

## Threat Description
Using net.exe to execute commands on remote SMB share.

## Attack Command
```
net use \\$(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8)\C$ /user:$(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8) $(cat /dev/urandom | tr -dc 'a-zA-Z0-9' | head -c 12) && net start $(echo evil$(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8))
```

## Detection Logic
Monitor net remote: `wmic process where name='net.exe' get commandline | findstr C$`; Event ID 5145.

## Mitigation
Restrict net: `icacls %windir%\System32\net.exe /deny Everyone:RX`; Block SMB: `netsh advfirewall firewall add rule name='Block SMB' dir=in action=block protocol=TCP localport=445`.

## AI Training Prompt
Train AI to detect net.exe SMB execution and suggest SMB restrictions.

## References
- MITRE ATT&CK T1021.002: https://attack.mitre.org/techniques/T1021/002/
- CWE-284: https://cwe.mitre.org/data/definitions/284.html
