---
type: campaign
scenario_id: 99
tactic: Execution
technique: "T1059.003: Windows Command Shell"
technique_id: T1059.003
tags: [campaign, lotl, execution]
---

# Using wmic to execute malicious WMI query for registry-based code execution.

## Threat Description
Using wmic to execute malicious WMI query for registry-based code execution.

## Attack Command
```
wmic /NAMESPACE:\\root\default PATH StdRegProv CALL SetStringValue hDefKey=2147483650 sSubKeyName="Software\$(cat /dev/urandom | tr -dc 'A-Za-z' | head -c 8)" sValueName="$(cat /dev/urandom | tr -dc 'A-Za-z' | head -c 8)" sValue="$(echo 'powershell -c I$(echo malicious | base64 -w0)' | base64 -w0)"
```

## Detection Logic
Monitor wmic WMI queries: `wmic process where name='wmic.exe' get commandline | findstr StdRegProv`; Event ID 4688.

## Mitigation
Restrict wmic: `icacls %windir%\System32\wbem\wmic.exe /deny Everyone:RX`; Disable WMI remote access: `netsh advfirewall firewall add rule name='Block WMI' dir=out action=block service=winmgmt`.

## AI Training Prompt
Train AI to detect wmic WMI registry manipulation and suggest access controls.

## References
- MITRE ATT&CK T1059.003: https://attack.mitre.org/techniques/T1059/003/
- CWE-78: https://cwe.mitre.org/data/definitions/78.html
