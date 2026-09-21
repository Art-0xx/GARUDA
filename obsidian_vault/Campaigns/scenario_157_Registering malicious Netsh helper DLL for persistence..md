---
type: campaign
scenario_id: 157
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
netsh add helper C:\Windows\System32\$(echo evil$(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8).dll)
```

## Detection Logic
Monitor netsh helper: `netsh show helper | findstr dll`; Event ID 4657.

## Mitigation
Restrict netsh: `icacls %windir%\System32\netsh.exe /deny Everyone:RX`; Audit DLL registrations: `reg query HKLM\Software\Microsoft\NetSh`.

## AI Training Prompt
Train AI to detect netsh helper DLL registrations and suggest registry auditing.

## References
- MITRE ATT&CK T1546.007: https://attack.mitre.org/techniques/T1546/007/
- CWE-732: https://cwe.mitre.org/data/definitions/732.html
