---
type: campaign
scenario_id: 183
tactic: Execution
technique: "T1059.001: PowerShell"
technique_id: T1059.001
tags: [campaign, lotl, execution]
---

# Using PowerShell to abuse whoami.exe for reconnaissance.

## Threat Description
Using PowerShell to abuse whoami.exe for reconnaissance.

## Attack Command
```
powershell -c "$(for($i=0;$i-lt50;$i++){$r+=([char](97+($i%26)))})$r; whoami /all > $(echo user$(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8).txt)"
```

## Detection Logic
Monitor whoami: `wmic process where name='whoami.exe' get commandline | findstr all`; Event ID 4688.

## Mitigation
Restrict whoami: `icacls %windir%\System32\whoami.exe /deny Everyone:RX`; Audit reconnaissance: `auditpol /set /subcategory:'Process Creation' /success:enable`.

## AI Training Prompt
Train AI to detect whoami reconnaissance and suggest access controls.

## References
- MITRE ATT&CK T1059.001: https://attack.mitre.org/techniques/T1059/001/
- CWE-78: https://cwe.mitre.org/data/definitions/78.html
