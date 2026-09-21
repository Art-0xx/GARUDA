---
type: campaign
scenario_id: 131
tactic: Execution
technique: "T1059.003: Windows Command Shell"
technique_id: T1059.003
tags: [campaign, lotl, execution]
---

# Using netsh to execute malicious script via trace session.

## Threat Description
Using netsh to execute malicious script via trace session.

## Attack Command
```
netsh trace start scenario=InternetClient capture=yes tracefile=$(echo trace$(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8).etl) && powershell -c 'I$(echo malicious | base64 -w0)'
```

## Detection Logic
Monitor netsh trace: `wmic process where name='netsh.exe' get commandline | findstr trace`; Event ID 4688.

## Mitigation
Restrict netsh: `icacls %windir%\System32\netsh.exe /deny Everyone:RX`; Audit trace sessions: `netsh trace show scenarios`.

## AI Training Prompt
Train AI to detect netsh trace abuse and suggest access controls.

## References
- MITRE ATT&CK T1059.003: https://attack.mitre.org/techniques/T1059/003/
- CWE-78: https://cwe.mitre.org/data/definitions/78.html
