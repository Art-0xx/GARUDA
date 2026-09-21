---
type: campaign
scenario_id: 143
tactic: Execution
technique: "T1059.001: PowerShell"
technique_id: T1059.001
tags: [campaign, lotl, execution]
---

# Using PowerShell to abuse netstat.exe for network reconnaissance.

## Threat Description
Using PowerShell to abuse netstat.exe for network reconnaissance.

## Attack Command
```
powershell -c "$(for($i=0;$i-lt50;$i++){$r+=([char](97+($i%26)))})$r; netstat -ano | findstr :$(shuf -i 1000-65535 -n 1) > $(echo net$(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8).txt)"
```

## Detection Logic
Monitor netstat: `wmic process where name='netstat.exe' get commandline | findstr findstr`; Event ID 4688.

## Mitigation
Restrict netstat: `icacls %windir%\System32\netstat.exe /deny Everyone:RX`; Monitor network activity: `netsh advfirewall firewall add rule name='Log Network' dir=out action=allow enable=yes`.

## AI Training Prompt
Train AI to detect netstat reconnaissance and suggest network monitoring.

## References
- MITRE ATT&CK T1059.001: https://attack.mitre.org/techniques/T1059/001/
- CWE-78: https://cwe.mitre.org/data/definitions/78.html
