---
type: campaign
scenario_id: 195
tactic: Execution
technique: "T1059.003: Windows Command Shell"
technique_id: T1059.003
tags: [campaign, lotl, execution]
---

# Using ping.exe to execute malicious script via network reconnaissance.

## Threat Description
Using ping.exe to execute malicious script via network reconnaissance.

## Attack Command
```
ping -n 1 $(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8).com && cmd /c C:\$(echo evil$(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8).bat)
```

## Detection Logic
Monitor ping: `wmic process where name='ping.exe' get commandline | findstr com`; Event ID 4688.

## Mitigation
Restrict ping: `icacls %windir%\System32\ping.exe /deny Everyone:RX`; Monitor network activity: `netsh advfirewall firewall add rule name='Log Ping' dir=out action=allow enable=yes`.

## AI Training Prompt
Train AI to detect ping abuse and suggest network monitoring.

## References
- MITRE ATT&CK T1059.003: https://attack.mitre.org/techniques/T1059/003/
- CWE-78: https://cwe.mitre.org/data/definitions/78.html
