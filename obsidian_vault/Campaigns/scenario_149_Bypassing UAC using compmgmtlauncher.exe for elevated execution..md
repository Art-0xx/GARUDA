---
type: campaign
scenario_id: 149
tactic: Privilege Escalation
technique: "T1548.002: Bypass User Account Control"
technique_id: T1548.002
tags: [campaign, lotl, privilege_escalation]
---

# Bypassing UAC using compmgmtlauncher.exe for elevated execution.

## Threat Description
Bypassing UAC using compmgmtlauncher.exe for elevated execution.

## Attack Command
```
compmgmtlauncher && powershell -c "$(for($i=0;$i-lt50;$i++){$r+=([char](97+($i%26)))})$r; I$(echo 'malicious' | base64 -w0)"
```

## Detection Logic
Monitor compmgmtlauncher: `wmic process where name='compmgmtlauncher.exe' get commandline`; Event ID 4688.

## Mitigation
Enable UAC: `reg add HKLM\Software\Microsoft\Windows\CurrentVersion\Policies\System /v EnableLUA /t REG_DWORD /d 1`; Restrict compmgmtlauncher: `icacls %windir%\System32\compmgmtlauncher.exe /deny Everyone:RX`.

## AI Training Prompt
Train AI to detect UAC bypass via compmgmtlauncher and suggest UAC enforcement.

## References
- MITRE ATT&CK T1548.002: https://attack.mitre.org/techniques/T1548/002/
- CWE-269: https://cwe.mitre.org/data/definitions/269.html
