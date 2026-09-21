---
type: campaign
scenario_id: 175
tactic: Execution
technique: "T1059.001: PowerShell"
technique_id: T1059.001
tags: [campaign, lotl, execution]
---

# Using PowerShell to abuse systeminfo.exe for reconnaissance.

## Threat Description
Using PowerShell to abuse systeminfo.exe for reconnaissance.

## Attack Command
```
powershell -c "$(for($i=0;$i-lt50;$i++){$r+=([char](97+($i%26)))})$r; systeminfo | findstr /C:'$(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8)' > $(echo sys$(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8).txt)"
```

## Detection Logic
Monitor systeminfo: `wmic process where name='systeminfo.exe' get commandline | findstr findstr`; Event ID 4688.

## Mitigation
Restrict systeminfo: `icacls %windir%\System32\systeminfo.exe /deny Everyone:RX`; Audit reconnaissance: `auditpol /set /subcategory:'Process Creation' /success:enable`.

## AI Training Prompt
Train AI to detect systeminfo reconnaissance and suggest access controls.

## References
- MITRE ATT&CK T1059.001: https://attack.mitre.org/techniques/T1059/001/
- CWE-78: https://cwe.mitre.org/data/definitions/78.html
