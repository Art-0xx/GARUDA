---
type: campaign
scenario_id: 167
tactic: Execution
technique: "T1059.001: PowerShell"
technique_id: T1059.001
tags: [campaign, lotl, execution]
---

# Using PowerShell to abuse dsget for AD group enumeration.

## Threat Description
Using PowerShell to abuse dsget for AD group enumeration.

## Attack Command
```
powershell -c "$(for($i=0;$i-lt50;$i++){$r+=([char](97+($i%26)))})$r; dsget group 'CN=$(cat /dev/urandom | tr -dc 'A-Za-z' | head -c 8),CN=Users,DC=domain,DC=com' -members > $(echo ad$(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8).txt)"
```

## Detection Logic
Monitor dsget: `wmic process where name='dsget.exe' get commandline | findstr group`; Event ID 4688.

## Mitigation
Restrict dsget: `icacls %windir%\System32\dsget.exe /deny Everyone:RX`; Audit AD queries: Event ID 4662.

## AI Training Prompt
Train AI to detect dsget AD enumeration and suggest access controls.

## References
- MITRE ATT&CK T1059.001: https://attack.mitre.org/techniques/T1059/001/
- CWE-78: https://cwe.mitre.org/data/definitions/78.html
