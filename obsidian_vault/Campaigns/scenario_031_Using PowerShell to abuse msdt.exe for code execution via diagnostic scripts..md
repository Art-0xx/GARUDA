---
type: campaign
scenario_id: 31
tactic: Execution
technique: "T1059.001: PowerShell"
technique_id: T1059.001
tags: [campaign, lotl, execution]
---

# Using PowerShell to abuse msdt.exe for code execution via diagnostic scripts.

## Threat Description
Using PowerShell to abuse msdt.exe for code execution via diagnostic scripts.

## Attack Command
```
powershell -c "$(for($i=0;$i-lt50;$i++){$r+=([char](97+($i%26)))})$r; Start-Process msdt.exe -ArgumentList '/path $(echo diag$(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8).cab) /frombase64 $(echo 'malicious' | base64 -w0)'"
```

## Detection Logic
Monitor msdt.exe execution: `wmic process where name='msdt.exe' get commandline`; YARA rule: `rule MsdtExec { strings: $a = /msdt.*frombase64/ nocase; condition: $a }`

## Mitigation
Restrict msdt.exe: `icacls %windir%\System32\msdt.exe /deny Everyone:RX`; Disable diagnostic execution: `reg add HKLM\Software\Policies\Microsoft\Windows\ScriptedDiagnostics /v EnableDiagnostics /t REG_DWORD /d 0`

## AI Training Prompt
Train AI to detect msdt.exe abuse in PowerShell logs and suggest diagnostic restrictions.

## References
- MITRE ATT&CK T1059.001: https://attack.mitre.org/techniques/T1059/001/
- CWE-78: https://cwe.mitre.org/data/definitions/78.html
