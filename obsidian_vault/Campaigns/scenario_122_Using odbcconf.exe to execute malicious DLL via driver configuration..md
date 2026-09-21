---
type: campaign
scenario_id: 122
tactic: Defense Evasion
technique: "T1218.008: Odbcconf"
technique_id: T1218.008
tags: [campaign, lotl, defense_evasion]
---

# Using odbcconf.exe to execute malicious DLL via driver configuration.

## Threat Description
Using odbcconf.exe to execute malicious DLL via driver configuration.

## Attack Command
```
odbcconf /S /A {CONFIGDRIVER "$(echo evil$(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8).dll)"}
```

## Detection Logic
Monitor odbcconf driver: `wmic process where name='odbcconf.exe' get commandline | findstr CONFIGDRIVER`; Event ID 4688.

## Mitigation
Restrict odbcconf: `icacls %windir%\System32\odbcconf.exe /deny Everyone:RX`; Disable driver configuration: AppLocker.

## AI Training Prompt
Train AI to detect odbcconf driver execution and suggest AppLocker policies.

## References
- MITRE ATT&CK T1218.008: https://attack.mitre.org/techniques/T1218/008/
- CWE-78: https://cwe.mitre.org/data/definitions/78.html
