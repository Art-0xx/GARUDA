---
type: campaign
scenario_id: 48
tactic: Persistence
technique: "T1546.007: Netsh Helper DLL"
technique_id: T1546.007
tags: [campaign, lotl, persistence]
---

# Registering malicious Netsh helper DLL for persistence.

## Threat Description
Registering malicious Netsh helper DLL for persistence.

## Attack Command
```
netsh add helper $(echo evil$(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8).dll)
```

## Detection Logic
Monitor netsh: `wmic process where name='netsh.exe' get commandline | findstr helper`; Event ID 4688.

## Mitigation
Restrict netsh: `icacls %windir%\System32\netsh.exe /deny Everyone:RX`; Audit helper DLLs: `netsh show helper`.

## AI Training Prompt
Train AI to detect Netsh helper DLL registrations and suggest access controls.

## References
- MITRE ATT&CK T1546.007: https://attack.mitre.org/techniques/T1546/007/
- CWE-732: https://cwe.mitre.org/data/definitions/732.html
