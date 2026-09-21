---
type: campaign
scenario_id: 253
tactic: Lateral Movement
technique: "T1021.006: Remote Services: Windows Remote Management"
technique_id: T1021.006
tags: [campaign, lotl, lateral_movement]
---

# Using PowerShell to execute commands via WinRM remotely.

## Threat Description
Using PowerShell to execute commands via WinRM remotely.

## Attack Command
```
powershell -c "$(for($i=0;$i-lt50;$i++){$r+=([char](97+($i%26)))})$r; Invoke-Command -ComputerName $(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8).com -ScriptBlock { I$(echo 'malicious' | base64 -w0) }"
```

## Detection Logic
Monitor WinRM remote: `wmic process where name='powershell.exe' get commandline | findstr Invoke-Command`; Event ID 4688.

## Mitigation
Disable WinRM: `Disable-PSRemoting -Force`; Block WinRM: `netsh advfirewall firewall add rule name='Block WinRM' dir=in action=block protocol=TCP localport=5985`.

## AI Training Prompt
Train AI to detect PowerShell WinRM execution and suggest WinRM restrictions.

## References
- MITRE ATT&CK T1021.006: https://attack.mitre.org/techniques/T1021/006/
- CWE-284: https://cwe.mitre.org/data/definitions/284.html
