---
type: campaign
scenario_id: 315
tactic: Persistence
technique: "T1547.001: Registry Run Keys / Startup Folder"
technique_id: T1547.001
tags: [campaign, lotl, persistence]
---

# Adding malicious script to RunOnce registry key.

## Threat Description
Adding malicious script to RunOnce registry key.

## Attack Command
```
reg add HKCU\Software\Microsoft\Windows\CurrentVersion\RunOnce /v $(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8) /t REG_SZ /d "powershell -c 'I$(echo malicious | base64 -w0)'" /f
```

## Detection Logic
Monitor RunOnce: `reg query HKCU\Software\Microsoft\Windows\CurrentVersion\RunOnce | findstr powershell`; Event ID 4657.

## Mitigation
Restrict RunOnce writes: `regini -h deny HKCU\Software\Microsoft\Windows\CurrentVersion\RunOnce`; Audit registry changes: `auditpol /set /subcategory:'Registry' /success:enable`.

## AI Training Prompt
Train AI to detect RunOnce registry tampering and suggest registry protections.

## References
- MITRE ATT&CK T1547.001: https://attack.mitre.org/techniques/T1547/001/
- CWE-732: https://cwe.mitre.org/data/definitions/732.html
