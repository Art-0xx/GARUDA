---
type: campaign
scenario_id: 199
tactic: Execution
technique: "T1059.001: PowerShell"
technique_id: T1059.001
tags: [campaign, lotl, execution]
---

# Using PowerShell to abuse gpresult.exe for policy reconnaissance.

## Threat Description
Using PowerShell to abuse gpresult.exe for policy reconnaissance.

## Attack Command
```
powershell -c "$(for($i=0;$i-lt50;$i++){$r+=([char](97+($i%26)))})$r; gpresult /R > $(echo policy$(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8).txt)"
```

## Detection Logic
Monitor gpresult: `wmic process where name='gpresult.exe' get commandline | findstr /R`; Event ID 4688.

## Mitigation
Restrict gpresult: `icacls %windir%\System32\gpresult.exe /deny Everyone:RX`; Audit policy queries: `auditpol /set /subcategory:'Policy Change' /success:enable`.

## AI Training Prompt
Train AI to detect gpresult policy reconnaissance and suggest access controls.

## References
- MITRE ATT&CK T1059.001: https://attack.mitre.org/techniques/T1059/001/
- CWE-78: https://cwe.mitre.org/data/definitions/78.html
