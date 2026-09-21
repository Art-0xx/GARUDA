---
type: campaign
scenario_id: 314
tactic: Lateral Movement
technique: "T1021.001: Remote Desktop Protocol"
technique_id: T1021.001
tags: [campaign, lotl, lateral_movement]
---

# Using qwinsta to enumerate RDP sessions remotely.

## Threat Description
Using qwinsta to enumerate RDP sessions remotely.

## Attack Command
```
qwinsta /server:http://$(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8).com > $(echo rdp$(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8).txt)
```

## Detection Logic
Monitor qwinsta remote: `wmic process where name='qwinsta.exe' get commandline | findstr http`; Event ID 4688.

## Mitigation
Restrict qwinsta: `icacls %windir%\System32\qwinsta.exe /deny Everyone:RX`; Disable RDP: `reg add "HKLM\System\CurrentControlSet\Control\Terminal Server" /v fDenyTSConnections /t REG_DWORD /d 1 /f`.

## AI Training Prompt
Train AI to detect qwinsta remote RDP enumeration and suggest RDP restrictions.

## References
- MITRE ATT&CK T1021.001: https://attack.mitre.org/techniques/T1021/001/
- CWE-284: https://cwe.mitre.org/data/definitions/284.html
