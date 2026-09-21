---
type: campaign
scenario_id: 135
tactic: Execution
technique: "T1059.001: PowerShell"
technique_id: T1059.001
tags: [campaign, lotl, execution]
---

# Using PowerShell to abuse dsquery.exe for AD reconnaissance.

## Threat Description
Using PowerShell to abuse dsquery.exe for AD reconnaissance.

## Attack Command
```
powershell -c "$(for($i=0;$i-lt50;$i++){$r+=([char](97+($i%26)))})$r; dsquery user -name * -limit 0 | findstr $(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8) > $(echo ad$(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8).txt)"
```

## Detection Logic
Monitor dsquery: `wmic process where name='dsquery.exe' get commandline`; Event ID 4688.

## Mitigation
Restrict dsquery: `icacls %windir%\System32\dsquery.exe /deny Everyone:RX`; Audit AD queries: Event ID 4662.

## AI Training Prompt
Train AI to detect dsquery AD reconnaissance and suggest access controls.

## References
- MITRE ATT&CK T1059.001: https://attack.mitre.org/techniques/T1059/001/
- CWE-78: https://cwe.mitre.org/data/definitions/78.html
