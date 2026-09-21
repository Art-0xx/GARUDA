---
type: campaign
scenario_id: 63
tactic: Execution
technique: "T1059.001: PowerShell"
technique_id: T1059.001
tags: [campaign, lotl, execution]
---

# Using PowerShell to abuse ldifde.exe for AD object manipulation.

## Threat Description
Using PowerShell to abuse ldifde.exe for AD object manipulation.

## Attack Command
```
powershell -c "$(for($i=0;$i-lt50;$i++){$r+=([char](97+($i%26)))})$r; ldifde -i -f $(echo malicious$(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8).ldf) -s dc01"
```

## Detection Logic
Monitor ldifde: `wmic process where name='ldifde.exe' get commandline`; Event ID 4688.

## Mitigation
Restrict ldifde: `icacls %windir%\System32\ldifde.exe /deny Everyone:RX`; Audit AD changes: Event ID 5136.

## AI Training Prompt
Train AI to detect ldifde AD manipulation and suggest access controls.

## References
- MITRE ATT&CK T1059.001: https://attack.mitre.org/techniques/T1059/001/
- CWE-78: https://cwe.mitre.org/data/definitions/78.html
