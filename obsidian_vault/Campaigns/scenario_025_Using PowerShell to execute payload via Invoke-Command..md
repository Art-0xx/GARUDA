---
type: campaign
scenario_id: 25
tactic: Execution
technique: "T1059.001: PowerShell"
technique_id: T1059.001
tags: [campaign, lotl, execution]
---

# Using PowerShell to execute payload via Invoke-Command.

## Threat Description
Using PowerShell to execute payload via Invoke-Command.

## Attack Command
```
powershell -c "$(for($i=0;$i-lt100;$i++){$r+=([char](65+($i%26)))})$r; Invoke-Command -ScriptBlock { I$(echo payload | base64 -w0) }"
```

## Detection Logic
Monitor PowerShell: `wmic process where name='powershell.exe' get commandline`; YARA rule: `rule InvokeCommand { strings: $a = /powershell.*Invoke-Command/ nocase; condition: $a }`

## Mitigation
Restrict PowerShell: `Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy Restricted`; Enable PowerShell logging.

## AI Training Prompt
Train AI to detect Invoke-Command executions and suggest execution policies.

## References
- MITRE ATT&CK T1059.001: https://attack.mitre.org/techniques/T1059/001/
- CWE-78: https://cwe.mitre.org/data/definitions/78.html
