---
type: campaign
scenario_id: 213
tactic: Lateral Movement
technique: "T1021.001: Remote Desktop Protocol"
technique_id: T1021.001
tags: [campaign, lotl, lateral_movement]
---

# Using mstsc.exe to initiate malicious RDP session.

## Threat Description
Using mstsc.exe to initiate malicious RDP session.

## Attack Command
```
mstsc /v:$(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8).com /f /admin && powershell -c 'I$(echo malicious | base64 -w0)'
```

## Detection Logic
Monitor mstsc: `wmic process where name='mstsc.exe' get commandline | findstr /v`; Event ID 4624.

## Mitigation
Restrict mstsc: `icacls %windir%\System32\mstsc.exe /deny Everyone:RX`; Disable RDP: `reg add "HKLM\System\CurrentControlSet\Control\Terminal Server" /v fDenyTSConnections /t REG_DWORD /d 1 /f`.

## AI Training Prompt
Train AI to detect mstsc RDP abuse and suggest RDP restrictions.

## References
- MITRE ATT&CK T1021.001: https://attack.mitre.org/techniques/T1021/001/
- CWE-284: https://cwe.mitre.org/data/definitions/284.html
