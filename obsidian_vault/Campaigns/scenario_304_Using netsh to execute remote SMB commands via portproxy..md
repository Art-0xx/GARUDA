---
type: campaign
scenario_id: 304
tactic: Lateral Movement
technique: "T1021.002: Remote Services: SMB/Windows Admin Shares"
technique_id: T1021.002
tags: [campaign, lotl, lateral_movement]
---

# Using netsh to execute remote SMB commands via portproxy.

## Threat Description
Using netsh to execute remote SMB commands via portproxy.

## Attack Command
```
netsh interface portproxy add v4tov4 listenport=$(shuf -i 1000-65535 -n 1) connectaddress=\\$(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8) connectport=445
```

## Detection Logic
Monitor netsh portproxy: `wmic process where name='netsh.exe' get commandline | findstr portproxy`; Event ID 4688.

## Mitigation
Restrict netsh: `icacls %windir%\System32\netsh.exe /deny Everyone:RX`; Block SMB: `netsh advfirewall firewall add rule name='Block SMB' dir=in action=block protocol=TCP localport=445`.

## AI Training Prompt
Train AI to detect netsh portproxy SMB execution and suggest SMB restrictions.

## References
- MITRE ATT&CK T1021.002: https://attack.mitre.org/techniques/T1021/002/
- CWE-284: https://cwe.mitre.org/data/definitions/284.html
