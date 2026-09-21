---
type: campaign
scenario_id: 302
tactic: Execution
technique: "T1059.001: PowerShell"
technique_id: T1059.001
tags: [campaign, lotl, execution]
---

# Using PowerShell to abuse w32tm for time-based persistence.

## Threat Description
Using PowerShell to abuse w32tm for time-based persistence.

## Attack Command
```
powershell -c "$(for($i=0;$i-lt50;$i++){$r+=([char](97+($i%26)))})$r; w32tm /config /manualpeerlist:http://$(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8).com /syncfromflags:manual /update; Start-Service w32time"
```

## Detection Logic
Monitor w32tm: `wmic process where name='w32tm.exe' get commandline | findstr http`; Event ID 4688.

## Mitigation
Restrict w32tm: `icacls %windir%\System32\w32tm.exe /deny Everyone:RX`; Audit time service changes: `auditpol /set /subcategory:'System' /success:enable`.

## AI Training Prompt
Train AI to detect w32tm abuse and suggest service auditing.

## References
- MITRE ATT&CK T1059.001: https://attack.mitre.org/techniques/T1059/001/
- CWE-78: https://cwe.mitre.org/data/definitions/78.html
