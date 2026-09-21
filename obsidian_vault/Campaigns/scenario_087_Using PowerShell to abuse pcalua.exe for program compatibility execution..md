---
type: campaign
scenario_id: 87
tactic: Execution
technique: "T1059.001: PowerShell"
technique_id: T1059.001
tags: [campaign, lotl, execution]
---

# Using PowerShell to abuse pcalua.exe for program compatibility execution.

## Threat Description
Using PowerShell to abuse pcalua.exe for program compatibility execution.

## Attack Command
```
powershell -c "$(for($i=0;$i-lt50;$i++){$r+=([char](97+($i%26)))})$r; Start-Process pcalua.exe -ArgumentList '-a $(echo evil$(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8).exe)'"
```

## Detection Logic
Monitor pcalua: `wmic process where name='pcalua.exe' get commandline`; Event ID 4688.

## Mitigation
Restrict pcalua: `icacls %windir%\System32\pcalua.exe /deny Everyone:RX`; Disable compatibility assistant: `reg add HKLM\Software\Policies\Microsoft\Windows\AppCompat /v DisablePCA /t REG_DWORD /d 1`.

## AI Training Prompt
Train AI to detect pcalua abuse and suggest compatibility restrictions.

## References
- MITRE ATT&CK T1059.001: https://attack.mitre.org/techniques/T1059/001/
- CWE-78: https://cwe.mitre.org/data/definitions/78.html
