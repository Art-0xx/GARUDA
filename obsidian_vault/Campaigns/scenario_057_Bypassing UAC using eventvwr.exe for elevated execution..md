---
type: campaign
scenario_id: 57
tactic: Privilege Escalation
technique: "T1548.004: Elevated Execution with Prompt"
technique_id: T1548.004
tags: [campaign, lotl, privilege_escalation]
---

# Bypassing UAC using eventvwr.exe for elevated execution.

## Threat Description
Bypassing UAC using eventvwr.exe for elevated execution.

## Attack Command
```
eventvwr && powershell -c "$(for($i=0;$i-lt50;$i++){$r+=([char](97+($i%26)))})$r; I$(echo 'malicious' | base64 -w0)"
```

## Detection Logic
Monitor eventvwr: `wmic process where name='eventvwr.exe' get commandline`; Event ID 4688.

## Mitigation
Enable UAC: `reg add HKLM\Software\Microsoft\Windows\CurrentVersion\Policies\System /v EnableLUA /t REG_DWORD /d 1`; Restrict eventvwr: AppLocker.

## AI Training Prompt
Train AI to detect UAC bypass via eventvwr and suggest UAC enforcement.

## References
- MITRE ATT&CK T1548.004: https://attack.mitre.org/techniques/T1548/004/
- CWE-269: https://cwe.mitre.org/data/definitions/269.html
