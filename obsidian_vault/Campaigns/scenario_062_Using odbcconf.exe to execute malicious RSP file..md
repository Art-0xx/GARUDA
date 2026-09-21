---
type: campaign
scenario_id: 62
tactic: Defense Evasion
technique: "T1218.008: Odbcconf"
technique_id: T1218.008
tags: [campaign, lotl, defense_evasion]
---

# Using odbcconf.exe to execute malicious RSP file.

## Threat Description
Using odbcconf.exe to execute malicious RSP file.

## Attack Command
```
odbcconf /S /A {CONFIGSYSDSN "$(echo evil$(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8).rsp)"}
```

## Detection Logic
Monitor odbcconf RSP: `wmic process where name='odbcconf.exe' get commandline | findstr rsp`; Event ID 4688.

## Mitigation
Restrict odbcconf: `icacls %windir%\System32\odbcconf.exe /deny Everyone:RX`; Disable RSP execution: AppLocker.

## AI Training Prompt
Train AI to detect odbcconf RSP execution and suggest AppLocker policies.

## References
- MITRE ATT&CK T1218.008: https://attack.mitre.org/techniques/T1218/008/
- CWE-78: https://cwe.mitre.org/data/definitions/78.html
