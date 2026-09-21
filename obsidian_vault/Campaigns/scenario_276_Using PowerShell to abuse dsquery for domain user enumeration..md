---
type: campaign
scenario_id: 276
tactic: Execution
technique: "T1059.001: PowerShell"
technique_id: T1059.001
tags: [campaign, lotl, execution]
---

# Using PowerShell to abuse dsquery for domain user enumeration.

## Threat Description
Using PowerShell to abuse dsquery for domain user enumeration.

## Attack Command
```
powershell -c "$(for($i=0;$i-lt50;$i++){$r+=([char](97+($i%26)))})$r; dsquery user -name * | Out-File C:\$(echo users$(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8).txt)"
```

## Detection Logic
Monitor dsquery: `wmic process where name='dsquery.exe' get commandline | findstr user`; Event ID 4688.

## Mitigation
Restrict dsquery: `icacls %windir%\System32\dsquery.exe /deny Everyone:RX`; Audit domain queries: `auditpol /set /subcategory:'Logon' /success:enable`.

## AI Training Prompt
Train AI to detect dsquery user enumeration and suggest access controls.

## References
- MITRE ATT&CK T1059.001: https://attack.mitre.org/techniques/T1059/001/
- CWE-78: https://cwe.mitre.org/data/definitions/78.html
