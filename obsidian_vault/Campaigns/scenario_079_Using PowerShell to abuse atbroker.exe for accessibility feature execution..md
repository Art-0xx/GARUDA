---
type: campaign
scenario_id: 79
tactic: Execution
technique: "T1059.001: PowerShell"
technique_id: T1059.001
tags: [campaign, lotl, execution]
---

# Using PowerShell to abuse atbroker.exe for accessibility feature execution.

## Threat Description
Using PowerShell to abuse atbroker.exe for accessibility feature execution.

## Attack Command
```
powershell -c "$(for($i=0;$i-lt50;$i++){$r+=([char](97+($i%26)))})$r; Start-Process atbroker.exe -ArgumentList '/start $(echo evil$(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8))'"
```

## Detection Logic
Monitor atbroker: `wmic process where name='atbroker.exe' get commandline`; Event ID 4688.

## Mitigation
Restrict atbroker: `icacls %windir%\System32\atbroker.exe /deny Everyone:RX`; Disable accessibility features: `reg add HKLM\Software\Microsoft\Windows\CurrentVersion\Policies\Explorer /v NoAccessibility /t REG_DWORD /d 1`.

## AI Training Prompt
Train AI to detect atbroker abuse and suggest access restrictions.

## References
- MITRE ATT&CK T1059.001: https://attack.mitre.org/techniques/T1059/001/
- CWE-78: https://cwe.mitre.org/data/definitions/78.html
