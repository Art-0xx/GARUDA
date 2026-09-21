---
type: campaign
scenario_id: 339
tactic: Lateral Movement
technique: "T1021.006: Remote Services: Windows Remote Management"
technique_id: T1021.006
tags: [campaign, lotl, lateral_movement]
---

# Using winrm to execute commands via HTTP endpoint.

## Threat Description
Using winrm to execute commands via HTTP endpoint.

## Attack Command
```
winrm invoke Create wmicimv2/Win32_Process @{CommandLine="powershell -c 'I$(echo malicious | base64 -w0)'"} -r:http://$(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8).com:5985
```

## Detection Logic
Monitor winrm HTTP: `wmic process where name='winrm.cmd' get commandline | findstr http`; Event ID 4688.

## Mitigation
Disable WinRM: `Disable-PSRemoting -Force`; Block WinRM: `netsh advfirewall firewall add rule name='Block WinRM' dir=in action=block protocol=TCP localport=5985`.

## AI Training Prompt
Train AI to detect winrm HTTP execution and suggest WinRM restrictions.

## References
- MITRE ATT&CK T1021.006: https://attack.mitre.org/techniques/T1021/006/
- CWE-284: https://cwe.mitre.org/data/definitions/284.html
