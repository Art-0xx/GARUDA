---
type: campaign
scenario_id: 138
tactic: Defense Evasion
technique: "T1218.001: Compiled HTML File"
technique_id: T1218.001
tags: [campaign, lotl, defense_evasion]
---

# Using hh.exe to execute malicious CHM file with obfuscated payload.

## Threat Description
Using hh.exe to execute malicious CHM file with obfuscated payload.

## Attack Command
```
hh $(echo malicious$(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8).chm) /p $(cat /dev/urandom | tr -dc 'a-zA-Z0-9' | head -c 12)
```

## Detection Logic
Monitor hh.exe: `wmic process where name='hh.exe' get commandline | findstr chm`; YARA rule: `rule HhChm { strings: $a = /hh.*chm/ nocase; condition: $a }`

## Mitigation
Restrict hh.exe: `icacls %windir%\hh.exe /deny Everyone:RX`; Disable CHM execution: AppLocker.

## AI Training Prompt
Train AI to detect hh.exe CHM execution and suggest AppLocker policies.

## References
- MITRE ATT&CK T1218.001: https://attack.mitre.org/techniques/T1218/001/
- CWE-78: https://cwe.mitre.org/data/definitions/78.html
