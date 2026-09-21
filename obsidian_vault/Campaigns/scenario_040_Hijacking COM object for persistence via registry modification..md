---
type: campaign
scenario_id: 40
tactic: Persistence
technique: "T1546.015: Component Object Model Hijacking"
technique_id: T1546.015
tags: [campaign, lotl, persistence]
---

# Hijacking COM object for persistence via registry modification.

## Threat Description
Hijacking COM object for persistence via registry modification.

## Attack Command
```
reg add "HKCU\Software\Classes\CLSID\{$(uuidgen)}\InprocServer32" /ve /t REG_SZ /d "$(echo evil$(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8).dll)"
```

## Detection Logic
Monitor COM registry: `reg query HKCU\Software\Classes\CLSID /s | findstr InprocServer32`; Event ID 4657.

## Mitigation
Restrict COM writes: `regini -h deny HKCU\Software\Classes\CLSID`; Enable COM auditing.

## AI Training Prompt
Train AI to detect COM hijacking and suggest registry protections.

## References
- MITRE ATT&CK T1546.015: https://attack.mitre.org/techniques/T1546/015/
- CWE-732: https://cwe.mitre.org/data/definitions/732.html
