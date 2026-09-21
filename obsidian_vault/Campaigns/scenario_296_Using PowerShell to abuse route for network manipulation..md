---
type: campaign
scenario_id: 296
tactic: Execution
technique: "T1059.001: PowerShell"
technique_id: T1059.001
tags: [campaign, lotl, execution]
---

# Using PowerShell to abuse route for network manipulation.

## Threat Description
Using PowerShell to abuse route for network manipulation.

## Attack Command
```
powershell -c "$(for($i=0;$i-lt50;$i++){$r+=([char](97+($i%26)))})$r; route add $(cat /dev/urandom | tr -dc '0-9.' | head -c 15) MASK 255.255.255.0 $(cat /dev/urandom | tr -dc '0-9.' | head -c 15) > C:\$(echo route$(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8).txt)"
```

## Detection Logic
Monitor route: `wmic process where name='route.exe' get commandline | findstr add`; Event ID 4688.

## Mitigation
Restrict PowerShell: `Set-ExecutionPolicy Restricted`; Audit network changes: `auditpol /set /subcategory:'System' /success:enable`.

## AI Training Prompt
Train AI to detect PowerShell route manipulation and suggest network auditing.

## References
- MITRE ATT&CK T1059.001: https://attack.mitre.org/techniques/T1059/001/
- CWE-78: https://cwe.mitre.org/data/definitions/78.html
