---
type: campaign
scenario_id: 156
tactic: Defense Evasion
technique: "T1218.009: Sdbinst"
technique_id: T1218.009
tags: [campaign, lotl, defense_evasion]
---

# Using sdbinst to install malicious shim for application manipulation.

## Threat Description
Using sdbinst to install malicious shim for application manipulation.

## Attack Command
```
sdbinst /q /u $(echo shim$(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8).sdb) /p $(cat /dev/urandom | tr -dc 'a-zA-Z0-9' | head -c 12)
```

## Detection Logic
Monitor sdbinst: `wmic process where name='sdbinst.exe' get commandline | findstr sdb`; Event ID 4688.

## Mitigation
Restrict sdbinst: `icacls %windir%\System32\sdbinst.exe /deny Everyone:RX`; Audit shim databases: `reg query HKLM\Software\Microsoft\Windows NT\CurrentVersion\AppCompatFlags`.

## AI Training Prompt
Train AI to detect sdbinst shim installations and suggest access controls.

## References
- MITRE ATT&CK T1218.009: https://attack.mitre.org/techniques/T1218/009/
- CWE-78: https://cwe.mitre.org/data/definitions/78.html
