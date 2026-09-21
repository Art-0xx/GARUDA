---
type: campaign
scenario_id: 64
tactic: Persistence
technique: "T1546.011: Application Shimming"
technique_id: T1546.011
tags: [campaign, lotl, persistence]
---

# Registering malicious shim database for persistence.

## Threat Description
Registering malicious shim database for persistence.

## Attack Command
```
sdbinst $(echo shim$(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8).sdb)
```

## Detection Logic
Monitor sdbinst: `wmic process where name='sdbinst.exe' get commandline`; Event ID 4688.

## Mitigation
Restrict sdbinst: `icacls %windir%\System32\sdbinst.exe /deny Everyone:RX`; Audit shim installations: `reg query HKLM\Software\Microsoft\Windows NT\CurrentVersion\AppCompatFlags\Custom`.

## AI Training Prompt
Train AI to detect shim database installations and suggest access controls.

## References
- MITRE ATT&CK T1546.011: https://attack.mitre.org/techniques/T1546/011/
- CWE-732: https://cwe.mitre.org/data/definitions/732.html
