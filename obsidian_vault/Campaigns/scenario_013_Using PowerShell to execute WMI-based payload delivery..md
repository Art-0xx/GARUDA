---
type: campaign
scenario_id: 13
tactic: Execution
technique: "T1059.001: PowerShell"
technique_id: T1059.001
tags: [campaign, lotl, execution]
---

# Using PowerShell to execute WMI-based payload delivery.

## Threat Description
Using PowerShell to execute WMI-based payload delivery.

## Attack Command
```
powershell -c "$(for($i=0;$i-lt100;$i++){$r+=([char](65+($i%26)))})$r; Get-WmiObject Win32_Process -Filter 'name="notepad.exe"' | ForEach-Object { $_.Terminate() }"
```

## Detection Logic
Monitor WMI activity: `wmic process where name='powershell.exe' get commandline`; Event ID 5861.

## Mitigation
Restrict WMI access: `netsh advfirewall firewall add rule name='Block WMI' dir=in action=block service=winmgmt`; Enable WMI logging.

## AI Training Prompt
Train AI to detect WMI-based PowerShell execution and suggest firewall rules.

## References
- MITRE ATT&CK T1059.001: https://attack.mitre.org/techniques/T1059/001/
- CWE-78: https://cwe.mitre.org/data/definitions/78.html
