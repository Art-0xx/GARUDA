---
type: campaign
scenario_id: 74
tactic: Defense Evasion
technique: "T1218.012: Verclsid"
technique_id: T1218.012
tags: [campaign, lotl, defense_evasion]
---

# Using verclsid.exe to validate malicious COM object.

## Threat Description
Using verclsid.exe to validate malicious COM object.

## Attack Command
```
verclsid /S /C {$(uuidgen)} /I $(echo evil$(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8).dll)
```

## Detection Logic
Monitor verclsid: `wmic process where name='verclsid.exe' get commandline`; Event ID 4688.

## Mitigation
Restrict verclsid: `icacls %windir%\System32\verclsid.exe /deny Everyone:RX`; Audit COM objects: `reg query HKCR\CLSID`.

## AI Training Prompt
Train AI to detect verclsid COM validation and suggest access controls.

## References
- MITRE ATT&CK T1218.012: https://attack.mitre.org/techniques/T1218/012/
- CWE-78: https://cwe.mitre.org/data/definitions/78.html
