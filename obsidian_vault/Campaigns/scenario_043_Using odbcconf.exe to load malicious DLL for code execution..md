---
type: campaign
scenario_id: 43
tactic: Execution
technique: "T1059.003: Windows Command Shell"
technique_id: T1059.003
tags: [campaign, lotl, execution]
---

# Using odbcconf.exe to load malicious DLL for code execution.

## Threat Description
Using odbcconf.exe to load malicious DLL for code execution.

## Attack Command
```
odbcconf /S /A {REGSVR $(echo evil$(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8).dll)}
```

## Detection Logic
Monitor odbcconf: `wmic process where name='odbcconf.exe' get commandline`; Event ID 4688.

## Mitigation
Restrict odbcconf: `icacls %windir%\System32\odbcconf.exe /deny Everyone:RX`; Require signed DLLs: AppLocker.

## AI Training Prompt
Train AI to detect odbcconf DLL loading and suggest AppLocker policies.

## References
- MITRE ATT&CK T1059.003: https://attack.mitre.org/techniques/T1059/003/
- CWE-78: https://cwe.mitre.org/data/definitions/78.html
