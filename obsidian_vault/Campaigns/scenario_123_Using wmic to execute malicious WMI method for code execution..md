---
type: campaign
scenario_id: 123
tactic: Execution
technique: "T1059.003: Windows Command Shell"
technique_id: T1059.003
tags: [campaign, lotl, execution]
---

# Using wmic to execute malicious WMI method for code execution.

## Threat Description
Using wmic to execute malicious WMI method for code execution.

## Attack Command
```
wmic /NAMESPACE:\\root\cimv2 PATH Win32_Process CALL Create "powershell -c 'I$(echo malicious | base64 -w0)'"
```

## Detection Logic
Monitor wmic process creation: `wmic process where name='wmic.exe' get commandline | findstr Win32_Process`; Event ID 4688.

## Mitigation
Restrict wmic: `icacls %windir%\System32\wbem\wmic.exe /deny Everyone:RX`; Disable WMI remote execution: `netsh advfirewall firewall add rule name='Block WMI' dir=out action=block service=winmgmt`.

## AI Training Prompt
Train AI to detect wmic process creation and suggest access controls.

## References
- MITRE ATT&CK T1059.003: https://attack.mitre.org/techniques/T1059/003/
- CWE-78: https://cwe.mitre.org/data/definitions/78.html
