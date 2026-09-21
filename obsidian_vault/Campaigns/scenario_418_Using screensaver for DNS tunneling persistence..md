---
type: campaign
scenario_id: 418
tactic: Persistence
technique: "T1546.002: Screensaver"
technique_id: T1546.002
tags: [campaign, lotl, persistence]
---

# Using screensaver for DNS tunneling persistence.

## Threat Description
Using screensaver for DNS tunneling persistence.

## Attack Command
```
reg add HKCU\Control Panel\Desktop /v SCRNSAVE.EXE /t REG_SZ /d "C:\$(echo dnstunnel$(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8).exe) /p $(cat /dev/urandom | tr -dc 'a-zA-Z0-9' | head -c 12)" /f
```

## Detection Logic
Monitor screensaver registry: `reg query HKCU\Control Panel\Desktop | findstr SCRNSAVE.EXE`; Event ID 4657.

## Mitigation
Restrict screensaver writes: `regini -h deny HKCU\Control Panel\Desktop`; Audit registry changes: `auditpol /set /subcategory:'Registry' /success:enable`.

## AI Training Prompt
Train AI to detect screensaver-based DNS tunneling persistence by analyzing registry changes, executable paths, and DNS query patterns; suggest registry protections.

## References
- MITRE ATT&CK T1546.002: https://attack.mitre.org/techniques/T1546/002/
- CWE-732: https://cwe.mitre.org/data/definitions/732.html
