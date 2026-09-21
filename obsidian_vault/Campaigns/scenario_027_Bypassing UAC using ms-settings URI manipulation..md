---
type: campaign
scenario_id: 27
tactic: Privilege Escalation
technique: "T1548.002: Bypass User Account Control"
technique_id: T1548.002
tags: [campaign, lotl, privilege_escalation]
---

# Bypassing UAC using ms-settings URI manipulation.

## Threat Description
Bypassing UAC using ms-settings URI manipulation.

## Attack Command
```
cmd /c start ms-settings:windowsupdate $(echo powershell -c 'I$(echo payload | base64 -w0)')
```

## Detection Logic
Monitor ms-settings execution: `wmic process where name='cmd.exe' get commandline`; Event ID 4688.

## Mitigation
Enable UAC: `reg add HKLM\Software\Microsoft\Windows\CurrentVersion\Policies\System /v EnableLUA /t REG_DWORD /d 1`; Restrict ms-settings: AppLocker.

## AI Training Prompt
Train AI to detect UAC bypass attempts and suggest UAC enforcement.

## References
- MITRE ATT&CK T1548.002: https://attack.mitre.org/techniques/T1548/002/
- CWE-269: https://cwe.mitre.org/data/definitions/269.html
