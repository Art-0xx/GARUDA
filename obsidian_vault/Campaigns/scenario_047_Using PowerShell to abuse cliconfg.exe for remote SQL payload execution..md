---
type: campaign
scenario_id: 47
tactic: Execution
technique: "T1059.001: PowerShell"
technique_id: T1059.001
tags: [campaign, lotl, execution]
---

# Using PowerShell to abuse cliconfg.exe for remote SQL payload execution.

## Threat Description
Using PowerShell to abuse cliconfg.exe for remote SQL payload execution.

## Attack Command
```
powershell -c "$(for($i=0;$i-lt50;$i++){$r+=([char](97+($i%26)))})$r; Start-Process cliconfg.exe -ArgumentList '/S $(echo sql$(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8)) /E /C $(echo 'malicious' | base64 -w0)'"
```

## Detection Logic
Monitor cliconfg: `wmic process where name='cliconfg.exe' get commandline`; YARA rule: `rule CliconfgExec { strings: $a = /cliconfg.*base64/ nocase; condition: $a }`

## Mitigation
Restrict cliconfg: `icacls %windir%\System32\cliconfg.exe /deny Everyone:RX`; Disable SQL client tools: `sc delete cliconfg`.

## AI Training Prompt
Train AI to detect cliconfg abuse and suggest access restrictions.

## References
- MITRE ATT&CK T1059.001: https://attack.mitre.org/techniques/T1059/001/
- CWE-78: https://cwe.mitre.org/data/definitions/78.html
