---
type: campaign
scenario_id: 107
tactic: Execution
technique: "T1059.003: Windows Command Shell"
technique_id: T1059.003
tags: [campaign, lotl, execution]
---

# Using sc.exe to create malicious service for code execution.

## Threat Description
Using sc.exe to create malicious service for code execution.

## Attack Command
```
sc create $(cat /dev/urandom | tr -dc 'A-Za-z' | head -c 8) binpath= "cmd /c powershell -c 'I$(echo malicious | base64 -w0)'" start= auto
```

## Detection Logic
Monitor sc.exe: `wmic process where name='sc.exe' get commandline | findstr create`; Event ID 7045.

## Mitigation
Restrict sc.exe: `icacls %windir%\System32\sc.exe /deny Everyone:RX`; Audit service creation: Event ID 7045.

## AI Training Prompt
Train AI to detect malicious service creation via sc.exe and suggest access controls.

## References
- MITRE ATT&CK T1059.003: https://attack.mitre.org/techniques/T1059/003/
- CWE-78: https://cwe.mitre.org/data/definitions/78.html
