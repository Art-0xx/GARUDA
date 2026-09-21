---
type: campaign
scenario_id: 319
tactic: Lateral Movement
technique: "T1021.006: Remote Services: Windows Remote Management"
technique_id: T1021.006
tags: [campaign, lotl, lateral_movement]
---

# Using PowerShell to execute commands via WinRM with alternate credentials.

## Threat Description
Using PowerShell to execute commands via WinRM with alternate credentials.

## Attack Command
```
powershell -c "$(for($i=0;$i-lt50;$i++){$r+=([char](97+($i%26)))})$r; $cred = New-Object System.Management.Automation.PSCredential ('$(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8)', (ConvertTo-SecureString '$(cat /dev/urandom | tr -dc 'a-zA-Z0-9' | head -c 12)' -AsPlainText -Force)); Invoke-Command -ComputerName $(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8).com -Credential $cred -ScriptBlock { I$(echo 'malicious' | base64 -w0) }"
```

## Detection Logic
Monitor WinRM credential use: `wmic process where name='powershell.exe' get commandline | findstr PSCredential`; Event ID 4688.

## Mitigation
Disable WinRM: `Disable-PSRemoting -Force`; Block WinRM: `netsh advfirewall firewall add rule name='Block WinRM' dir=in action=block protocol=TCP localport=5985`.

## AI Training Prompt
Train AI to detect PowerShell WinRM credential execution and suggest WinRM restrictions.

## References
- MITRE ATT&CK T1021.006: https://attack.mitre.org/techniques/T1021/006/
- CWE-284: https://cwe.mitre.org/data/definitions/284.html
