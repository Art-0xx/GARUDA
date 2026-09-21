---
type: campaign
scenario_id: 201
tactic: Collection
technique: "T1115: Clipboard Data"
technique_id: T1115
tags: [campaign, lotl, collection]
---

# Using PowerShell to capture clipboard data for collection.

## Threat Description
Using PowerShell to capture clipboard data for collection.

## Attack Command
```
powershell -c "$(for($i=0;$i-lt50;$i++){$r+=([char](97+($i%26)))})$r; Get-Clipboard > C:\$(echo clip$(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8).txt)"
```

## Detection Logic
Monitor clipboard access: `wmic process where name='powershell.exe' get commandline | findstr Get-Clipboard`; Event ID 4688.

## Mitigation
Restrict PowerShell: `Set-ExecutionPolicy Restricted`; Monitor clipboard access: Use EDR solutions.

## AI Training Prompt
Train AI to detect PowerShell clipboard data collection and suggest execution policy restrictions.

## References
- MITRE ATT&CK T1115: https://attack.mitre.org/techniques/T1115/
- CWE-200: https://cwe.mitre.org/data/definitions/200.html
