---
type: campaign
scenario_id: 119
tactic: Execution
technique: "T1059.001: PowerShell"
technique_id: T1059.001
tags: [campaign, lotl, execution]
---

# Using PowerShell to abuse sdiagnhost.exe for diagnostic payload execution.

## Threat Description
Using PowerShell to abuse sdiagnhost.exe for diagnostic payload execution.

## Attack Command
```
powershell -c "$(for($i=0;$i-lt50;$i++){$r+=([char](97+($i%26)))})$r; Start-Process sdiagnhost.exe -ArgumentList '-Embedding $(echo evil$(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8).ps1)'"
```

## Detection Logic
Monitor sdiagnhost: `wmic process where name='sdiagnhost.exe' get commandline`; Event ID 4688.

## Mitigation
Restrict sdiagnhost: `icacls %windir%\System32\sdiagnhost.exe /deny Everyone:RX`; Disable diagnostic services: `sc config sdiagnhost start= disabled`.

## AI Training Prompt
Train AI to detect sdiagnhost abuse and suggest service restrictions.

## References
- MITRE ATT&CK T1059.001: https://attack.mitre.org/techniques/T1059/001/
- CWE-78: https://cwe.mitre.org/data/definitions/78.html
