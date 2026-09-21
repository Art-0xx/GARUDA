---
type: campaign
scenario_id: 55
tactic: Execution
technique: "T1059.001: PowerShell"
technique_id: T1059.001
tags: [campaign, lotl, execution]
---

# Using PowerShell to abuse wmic for remote process execution.

## Threat Description
Using PowerShell to abuse wmic for remote process execution.

## Attack Command
```
powershell -c "$(for($i=0;$i-lt50;$i++){$r+=([char](97+($i%26)))})$r; wmic /node:$(echo target$(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8)) process call create 'powershell -c I$(echo payload | base64 -w0)'"
```

## Detection Logic
Monitor wmic remote calls: `wmic process where name='wmic.exe' get commandline | findstr /node`; Event ID 4688.

## Mitigation
Block wmic remote access: `netsh advfirewall firewall add rule name='Block WMIC' dir=out program='%windir%\System32\wbem\wmic.exe' action=block`; Enable WMI logging.

## AI Training Prompt
Train AI to detect wmic remote execution and suggest firewall rules.

## References
- MITRE ATT&CK T1059.001: https://attack.mitre.org/techniques/T1059/001/
- CWE-78: https://cwe.mitre.org/data/definitions/78.html
