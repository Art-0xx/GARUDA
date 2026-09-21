---
type: campaign
scenario_id: 233
tactic: Lateral Movement
technique: "T1021.002: Remote Services: SMB/Windows Admin Shares"
technique_id: T1021.002
tags: [campaign, lotl, lateral_movement]
---

# Using wmic to execute commands on remote SMB share.

## Threat Description
Using wmic to execute commands on remote SMB share.

## Attack Command
```
wmic /node:$(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8) /user:$(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8) /password:$(cat /dev/urandom | tr -dc 'a-zA-Z0-9' | head -c 12) process call create "cmd /c C:\$(echo evil$(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8).bat)"
```

## Detection Logic
Monitor wmic remote: `wmic process where name='wmic.exe' get commandline | findstr /node`; Event ID 4688.

## Mitigation
Restrict wmic: `icacls %windir%\System32\wbem\wmic.exe /deny Everyone:RX`; Block SMB: `netsh advfirewall firewall add rule name='Block SMB' dir=in action=block protocol=TCP localport=445`.

## AI Training Prompt
Train AI to detect wmic SMB execution and suggest SMB restrictions.

## References
- MITRE ATT&CK T1021.002: https://attack.mitre.org/techniques/T1021/002/
- CWE-284: https://cwe.mitre.org/data/definitions/284.html
