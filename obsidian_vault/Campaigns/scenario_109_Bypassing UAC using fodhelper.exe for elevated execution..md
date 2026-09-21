---
type: campaign
scenario_id: 109
tactic: Privilege Escalation
technique: "T1548.002: Bypass User Account Control"
technique_id: T1548.002
tags: [campaign, lotl, privilege_escalation]
---

# Bypassing UAC using fodhelper.exe for elevated execution.

## Threat Description
Bypassing UAC using fodhelper.exe for elevated execution.

## Attack Command
```
powershell -c "$(for($i=0;$i-lt50;$i++){$r+=([char](97+($i%26)))})$r; Start-Process fodhelper.exe -NoNewWindow; Start-Sleep 1; I$(echo 'malicious' | base64 -w0)"
```

## Detection Logic
Monitor fodhelper: `wmic process where name='fodhelper.exe' get commandline`; Event ID 4688.

## Mitigation
Enable UAC: `reg add HKLM\Software\Microsoft\Windows\CurrentVersion\Policies\System /v EnableLUA /t REG_DWORD /d 1`; Restrict fodhelper: `icacls %windir%\System32\fodhelper.exe /deny Everyone:RX`.

## AI Training Prompt
Train AI to detect UAC bypass via fodhelper and suggest UAC enforcement.

## References
- MITRE ATT&CK T1548.002: https://attack.mitre.org/techniques/T1548/002/
- CWE-269: https://cwe.mitre.org/data/definitions/269.html
