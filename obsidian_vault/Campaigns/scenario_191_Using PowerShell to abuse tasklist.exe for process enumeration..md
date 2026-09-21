---
type: campaign
scenario_id: 191
tactic: Execution
technique: "T1059.001: PowerShell"
technique_id: T1059.001
tags: [campaign, lotl, execution]
---

# Using PowerShell to abuse tasklist.exe for process enumeration.

## Threat Description
Using PowerShell to abuse tasklist.exe for process enumeration.

## Attack Command
```
powershell -c "$(for($i=0;$i-lt50;$i++){$r+=([char](97+($i%26)))})$r; tasklist /v | findstr $(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8) > $(echo proc$(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8).txt)"
```

## Detection Logic
Monitor tasklist: `wmic process where name='tasklist.exe' get commandline | findstr /v`; Event ID 4688.

## Mitigation
Restrict tasklist: `icacls %windir%\System32\tasklist.exe /deny Everyone:RX`; Audit process enumeration: `auditpol /set /subcategory:'Process Creation' /success:enable`.

## AI Training Prompt
Train AI to detect tasklist process enumeration and suggest access controls.

## References
- MITRE ATT&CK T1059.001: https://attack.mitre.org/techniques/T1059/001/
- CWE-78: https://cwe.mitre.org/data/definitions/78.html
