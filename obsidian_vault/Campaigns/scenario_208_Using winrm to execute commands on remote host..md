---
type: campaign
scenario_id: 208
tactic: Lateral Movement
technique: "T1021.006: Remote Services: Windows Remote Management"
technique_id: T1021.006
tags: [campaign, lotl, lateral_movement]
---

# Using winrm to execute commands on remote host.

## Threat Description
Using winrm to execute commands on remote host.

## Attack Command
```
winrm invoke Create wmicimv2/Win32_Process @{CommandLine="powershell -c 'I$(echo malicious | base64 -w0)'"} -r:http://$(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8).com
```

## Detection Logic
Monitor winrm: `wmic process where name='winrm.cmd' get commandline | findstr invoke`; Event ID 4688.

## Mitigation
Disable WinRM: `Disable-PSRemoting -Force`; Block WinRM: `netsh advfirewall firewall add rule name='Block WinRM' dir=in action=block protocol=TCP localport=5985`.

## AI Training Prompt
Train AI to detect WinRM remote execution and suggest service restrictions.

## References
- MITRE ATT&CK T1021.006: https://attack.mitre.org/techniques/T1021/006/
- CWE-284: https://cwe.mitre.org/data/definitions/284.html
