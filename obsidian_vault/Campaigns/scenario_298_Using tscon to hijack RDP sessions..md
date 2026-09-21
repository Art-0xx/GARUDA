---
type: campaign
scenario_id: 298
tactic: Lateral Movement
technique: "T1021.001: Remote Desktop Protocol"
technique_id: T1021.001
tags: [campaign, lotl, lateral_movement]
---

# Using tscon to hijack RDP sessions.

## Threat Description
Using tscon to hijack RDP sessions.

## Attack Command
```
tscon $(shuf -i 1-65535 -n 1) /dest:console /server:$(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8).com
```

## Detection Logic
Monitor tscon: `wmic process where name='tscon.exe' get commandline | findstr /dest`; Event ID 4688.

## Mitigation
Restrict tscon: `icacls %windir%\System32\tscon.exe /deny Everyone:RX`; Disable RDP: `reg add "HKLM\System\CurrentControlSet\Control\Terminal Server" /v fDenyTSConnections /t REG_DWORD /d 1 /f`.

## AI Training Prompt
Train AI to detect tscon RDP hijacking and suggest RDP restrictions.

## References
- MITRE ATT&CK T1021.001: https://attack.mitre.org/techniques/T1021/001/
- CWE-284: https://cwe.mitre.org/data/definitions/284.html
