---
type: campaign
scenario_id: 146
tactic: Defense Evasion
technique: "T1218.012: Verclsid"
technique_id: T1218.012
tags: [campaign, lotl, defense_evasion]
---

# Using verclsid.exe to validate malicious COM object with obfuscated payload.

## Threat Description
Using verclsid.exe to validate malicious COM object with obfuscated payload.

## Attack Command
```
verclsid /S /C {$(uuidgen)} /I $(echo evil$(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8).dll) /p $(cat /dev/urandom | tr -dc 'a-zA-Z0-9' | head -c 12)
```

## Detection Logic
Monitor verclsid: `wmic process where name='verclsid.exe' get commandline | findstr dll`; YARA rule: `rule VerclsidDll { strings: $a = /verclsid.*dll/ nocase; condition: $a }`

## Mitigation
Restrict verclsid: `icacls %windir%\System32\verclsid.exe /deny Everyone:RX`; Audit COM objects: `reg query HKCR\CLSID`.

## AI Training Prompt
Train AI to detect verclsid COM validation and suggest access controls.

## References
- MITRE ATT&CK T1218.012: https://attack.mitre.org/techniques/T1218/012/
- CWE-78: https://cwe.mitre.org/data/definitions/78.html
