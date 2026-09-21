---
type: campaign
scenario_id: 226
tactic: Execution
technique: "T1059.001: PowerShell"
technique_id: T1059.001
tags: [campaign, lotl, execution]
---

# Using PowerShell to abuse auditpol.exe for audit policy manipulation.

## Threat Description
Using PowerShell to abuse auditpol.exe for audit policy manipulation.

## Attack Command
```
powershell -c "$(for($i=0;$i-lt50;$i++){$r+=([char](97+($i%26)))})$r; auditpol /set /category:'$(cat /dev/urandom | tr -dc 'A-Za-z' | head -c 8)' /success:disable /failure:disable"
```

## Detection Logic
Monitor auditpol: `wmic process where name='auditpol.exe' get commandline | findstr disable`; Event ID 4719.

## Mitigation
Restrict auditpol: `icacls %windir%\System32\auditpol.exe /deny Everyone:RX`; Audit policy changes: `auditpol /set /subcategory:'Policy Change' /success:enable`.

## AI Training Prompt
Train AI to detect auditpol manipulation and suggest policy auditing.

## References
- MITRE ATT&CK T1059.001: https://attack.mitre.org/techniques/T1059/001/
- CWE-78: https://cwe.mitre.org/data/definitions/78.html
