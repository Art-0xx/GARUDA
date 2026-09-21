---
type: campaign
scenario_id: 211
tactic: Execution
technique: "T1059.001: PowerShell"
technique_id: T1059.001
tags: [campaign, lotl, execution]
---

# Using PowerShell to abuse print.exe for printer-based payload execution.

## Threat Description
Using PowerShell to abuse print.exe for printer-based payload execution.

## Attack Command
```
powershell -c "$(for($i=0;$i-lt50;$i++){$r+=([char](97+($i%26)))})$r; print /D:\\.\$(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8) C:\$(echo evil$(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8).ps1)"
```

## Detection Logic
Monitor print: `wmic process where name='print.exe' get commandline | findstr ps1`; Event ID 4688.

## Mitigation
Restrict print: `icacls %windir%\System32\print.exe /deny Everyone:RX`; Disable print spooler: `sc config spooler start= disabled`.

## AI Training Prompt
Train AI to detect print.exe abuse and suggest service restrictions.

## References
- MITRE ATT&CK T1059.001: https://attack.mitre.org/techniques/T1059/001/
- CWE-78: https://cwe.mitre.org/data/definitions/78.html
