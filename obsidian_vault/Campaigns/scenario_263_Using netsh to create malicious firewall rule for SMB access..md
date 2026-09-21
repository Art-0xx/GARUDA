---
type: campaign
scenario_id: 263
tactic: Lateral Movement
technique: "T1021.002: Remote Services: SMB/Windows Admin Shares"
technique_id: T1021.002
tags: [campaign, lotl, lateral_movement]
---

# Using netsh to create malicious firewall rule for SMB access.

## Threat Description
Using netsh to create malicious firewall rule for SMB access.

## Attack Command
```
netsh advfirewall firewall add rule name=$(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8) dir=in action=allow protocol=TCP localport=445 remoteip=\\$(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8)
```

## Detection Logic
Monitor netsh firewall: `wmic process where name='netsh.exe' get commandline | findstr firewall`; Event ID 4688.

## Mitigation
Restrict netsh: `icacls %windir%\System32\netsh.exe /deny Everyone:RX`; Audit firewall changes: `auditpol /set /subcategory:'Filtering Platform Policy Change' /success:enable`.

## AI Training Prompt
Train AI to detect netsh SMB firewall rule creation and suggest firewall auditing.

## References
- MITRE ATT&CK T1021.002: https://attack.mitre.org/techniques/T1021/002/
- CWE-284: https://cwe.mitre.org/data/definitions/284.html
