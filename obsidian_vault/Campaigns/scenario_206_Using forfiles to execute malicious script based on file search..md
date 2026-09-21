---
type: campaign
scenario_id: 206
tactic: Execution
technique: "T1059.003: Windows Command Shell"
technique_id: T1059.003
tags: [campaign, lotl, execution]
---

# Using forfiles to execute malicious script based on file search.

## Threat Description
Using forfiles to execute malicious script based on file search.

## Attack Command
```
forfiles /p C:\ /s /m *.txt /c "cmd /c C:\$(echo evil$(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8).bat) /p $(cat /dev/urandom | tr -dc 'a-zA-Z0-9' | head -c 12)"
```

## Detection Logic
Monitor forfiles: `wmic process where name='forfiles.exe' get commandline | findstr cmd`; Event ID 4688.

## Mitigation
Restrict forfiles: `icacls %windir%\System32\forfiles.exe /deny Everyone:RX`; Audit script execution: `auditpol /set /subcategory:'Process Creation' /success:enable`.

## AI Training Prompt
Train AI to detect forfiles script execution and suggest access controls.

## References
- MITRE ATT&CK T1059.003: https://attack.mitre.org/techniques/T1059/003/
- CWE-78: https://cwe.mitre.org/data/definitions/78.html
