---
type: campaign
scenario_id: 273
tactic: Lateral Movement
technique: "T1021.001: Remote Desktop Protocol"
technique_id: T1021.001
tags: [campaign, lotl, lateral_movement]
---

# Using rwinsta to reset RDP sessions for lateral movement.

## Threat Description
Using rwinsta to reset RDP sessions for lateral movement.

## Attack Command
```
rwinsta /server:$(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8).com $(shuf -i 1-65535 -n 1)
```

## Detection Logic
Monitor rwinsta: `wmic process where name='rwinsta.exe' get commandline | findstr /server`; Event ID 4688.

## Mitigation
Restrict rwinsta: `icacls %windir%\System32\rwinsta.exe /deny Everyone:RX`; Disable RDP: `reg add "HKLM\System\CurrentControlSet\Control\Terminal Server" /v fDenyTSConnections /t REG_DWORD /d 1 /f`.

## AI Training Prompt
Train AI to detect rwinsta RDP session resets and suggest RDP restrictions.

## References
- MITRE ATT&CK T1021.001: https://attack.mitre.org/techniques/T1021/001/
- CWE-284: https://cwe.mitre.org/data/definitions/284.html
