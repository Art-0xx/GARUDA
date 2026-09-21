---
type: campaign
scenario_id: 241
tactic: Execution
technique: "T1059.001: PowerShell"
technique_id: T1059.001
tags: [campaign, lotl, execution]
---

# Using PowerShell to abuse logman.exe for performance log manipulation.

## Threat Description
Using PowerShell to abuse logman.exe for performance log manipulation.

## Attack Command
```
powershell -c "$(for($i=0;$i-lt50;$i++){$r+=([char](97+($i%26)))})$r; logman create counter $(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8) -c '\$(cat /dev/urandom | tr -dc 'A-Za-z' | head -c 8)\*' -f bin -o C:\$(echo log$(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8).blg)"
```

## Detection Logic
Monitor logman: `wmic process where name='logman.exe' get commandline | findstr create`; Event ID 4688.

## Mitigation
Restrict logman: `icacls %windir%\System32\logman.exe /deny Everyone:RX`; Audit performance logs: `auditpol /set /subcategory:'Object Access' /success:enable`.

## AI Training Prompt
Train AI to detect logman abuse and suggest log auditing.

## References
- MITRE ATT&CK T1059.001: https://attack.mitre.org/techniques/T1059/001/
- CWE-78: https://cwe.mitre.org/data/definitions/78.html
