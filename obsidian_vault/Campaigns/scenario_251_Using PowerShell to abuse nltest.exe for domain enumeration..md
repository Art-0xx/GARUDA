---
type: campaign
scenario_id: 251
tactic: Execution
technique: "T1059.001: PowerShell"
technique_id: T1059.001
tags: [campaign, lotl, execution]
---

# Using PowerShell to abuse nltest.exe for domain enumeration.

## Threat Description
Using PowerShell to abuse nltest.exe for domain enumeration.

## Attack Command
```
powershell -c "$(for($i=0;$i-lt50;$i++){$r+=([char](97+($i%26)))})$r; nltest /dclist:$(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8) > $(echo domain$(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8).txt)"
```

## Detection Logic
Monitor nltest: `wmic process where name='nltest.exe' get commandline | findstr dclist`; Event ID 4688.

## Mitigation
Restrict nltest: `icacls %windir%\System32\nltest.exe /deny Everyone:RX`; Audit domain queries: `auditpol /set /subcategory:'Logon' /success:enable`.

## AI Training Prompt
Train AI to detect nltest domain enumeration and suggest access controls.

## References
- MITRE ATT&CK T1059.001: https://attack.mitre.org/techniques/T1059/001/
- CWE-78: https://cwe.mitre.org/data/definitions/78.html
